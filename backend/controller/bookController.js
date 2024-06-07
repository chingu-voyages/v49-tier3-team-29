import Book from '../models/Books.js';
import Review from '../models/Reviews.js';
import mongoose from 'mongoose';

// @desc		Get all books
// @route		GET	/books

export const getAllBooks = async (req, res) => {
	try {
		const books = await Book.find();

		// Randomly select 5 books
		const randomBooks = books
			.sort(() => Math.random() - Math.random())
			.slice(0, 5);

		// Fetch reviews for all books in parallel
		const booksWithReviews = await Promise.all(
			randomBooks.map(async book => {
				const reviews = await Review.find({ bookId: book._id });
				return { ...book.toObject(), reviews };
			})
		);
		res.json(booksWithReviews);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// @desc		Get books by author name or genre title or ISBN
// @route		GET	/books/search/:searchQuery

export const getBooksBySearchQuery = async (req, res) => {
	try {
		const searchQuery = req.params.searchQuery;
		const booksBySearchQuery = await Book.find({
			$or: [
				{ author: { $regex: searchQuery, $options: 'i' } },
				{ title: { $regex: searchQuery, $options: 'i' } },
				{ ISBN: searchQuery },
				{ genre: searchQuery },
			],
		});

		if (booksBySearchQuery.length === 0) {
			return res.status(404).json({ message: 'No books found' });
		}

		// Fetch reviews for all books in parallel
		const booksWithReviews = await Promise.all(
			booksBySearchQuery.map(async book => {
				const reviews = await Review.find({ bookId: book._id });
				return { ...book.toObject(), reviews };
			})
		);

		res.json(booksWithReviews);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

export const getBookById = async (req, res) => {
	try {
		const { id } = req.params;
		if (!mongoose.Types.ObjectId.isValid(id)) {
			return res.status(400).json({ error: 'Invalid ID' });
		}
		const book = await Book.findById(id);
		if (!book) {
			return res.status(404).json({ message: 'Book not found' });
		}
		res.json(book);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};
