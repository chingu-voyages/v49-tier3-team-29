import List from '../models/Lists.js';
import Book from '../models/Books.js';
import User from '../models/Users.js';

// @desc   Add book to list
// @route  PATCH  /lists/:listId/
export const addBookToList = async (req, res) => {
	try {
		const { listId } = req.params;
		const { bookId } = req.body;

		// Check if the book exists and if the list exists and contains the book
		const [findBook, findList] = await Promise.all([
			Book.findById(bookId),
			List.findById(listId),
		]);

		const errorMessage = !findBook
			? 'Book not found'
			: !findList
			? 'List not found'
			: findList.books.includes(bookId)
			? 'Book already exists in list'
			: null;

		if (errorMessage) {
			const statusCode =
				errorMessage === 'Book already exists in list' ? 400 : 404;
			return res.status(statusCode).json({ message: errorMessage });
		}

		//* Add the book to the list
		findList.books.push(bookId);
		await findList.save();

		// populate the books field in the list object
		const populatedList = await List.findById(listId)
			.populate('books')
			.exec();

		res.status(200).json(populatedList);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// @desc   query for a list by username
// @route  GET  /lists/:username/
export const getListByUsername = async (req, res) => {
	try {
		const user = await User.findOne({ username: req.params.username });

		// Find list, and then populate the books field in the list object
		const populatedList = await List.findOne({
			userId: user._id.toString(),
		})
			.populate('books')
			.exec();

		if (!populatedList) {
			return res.status(404).json({ message: 'List not found' });
		}

		res.json(populatedList);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

export const removeListBook = async (req, res) => {
	try {
		const { listId } = req.params;
		const { bookId } = req.body;

		// Check if the book exists, if the list exists and if the book is not in the list
		const [findBook, findList] = await Promise.all([
			Book.findById(bookId),
			List.findById(listId),
		]);

		const errorMessage = !findBook
			? 'Book not found'
			: !findList
			? 'List not found'
			: !findList.books.includes(bookId)
			? 'Book is not found on the list'
			: null;

		if (errorMessage) {
			const statusCode =
				errorMessage === 'Book is not found on the list' ? 400 : 404;
			return res.status(statusCode).json({ message: errorMessage });
		}

		// find List, remove book by ID, and populate the books field in the list object
		const existingList = await List.findOneAndUpdate(
			{ _id: listId },
			{ $pull: { books: bookId } },
			{ new: true }
		)
			.populate('books')
			.exec();

		res.status(200).json(existingList);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};
