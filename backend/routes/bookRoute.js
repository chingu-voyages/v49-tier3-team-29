import express from 'express';
import Book from '../models/Books.js';

const router = express.Router();

//* get all books
router.get('/', async (req, res) => {
	try {
		const books = await Book.find();
		res.json(books);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

//* get book by title

//* create a new book

//* update a book

//* delete a book

export default router;
