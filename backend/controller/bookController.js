import Book from '../models/Books.js';

// @desc		Get all books
// @route		GET	/books

export const getAllBooks = async (req, res) => {
	try {
		const books = await Book.find();

		// Randomly select 5 books
		const randomBooks = books
			.sort(() => Math.random() - Math.random())
			.slice(0, 5);

		res.json(randomBooks);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

// @desc		Get books by author name or genre title or ISBN
// @route		GET	/books/search/:searchQuery

export const getBooksBySearchQuery = async (req, res) => {
	let query;
	try {
		query = Book.find({
			$or: [
				{
					author: { $regex: '.*' + req.params.searchQuery + '.*' },
				},
				{
					title: { $regex: '.*' + req.params.searchQuery + '.*' },
				},
				{ ISBN: req.params.searchQuery },
				{ genre: req.params.searchQuery },
			],
		});
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
	const booksBySearchQuery = await query;
	if (booksBySearchQuery.length === 0) {
		res.json({ message: 'No record found.' });
	} else {
		res.json(booksBySearchQuery);
	}
};
