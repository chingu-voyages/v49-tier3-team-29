import express from 'express';
import {
	getAllBooks,
	getBookById,
	getBooksBySearchQuery,
} from '../controller/bookController.js';

const router = express.Router();

//* get all books
router.get('/', getAllBooks);

//* get book by search query
router.get('/search/:searchQuery', getBooksBySearchQuery);

//* get book by id
router.get('/book/:id', getBookById);

export default router;
