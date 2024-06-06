import List from '../models/Lists.js';
import Book from '../models/Books.js';

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

		// if (!findBook) {
		// 	return res.status(404).json({ message: 'Book not found' });
		// }

		// if (!findList) {
		// 	return res.status(404).json({ message: 'List not found' });
		// }

		// if (findList.books.includes(bookId)) {
		// 	return res
		// 		.status(400)
		// 		.json({ message: 'Book already exists in list' });
		// }

		//* Add the book to the list
		findList.books.push(bookId);
		await findList.save();

		const populatedList = await List.findById(listId)
			.populate('books')
			.exec();

		res.status(200).json(populatedList);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
