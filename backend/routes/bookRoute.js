import express from 'express';
import {
	getAllBooks,
	getBooksBySearchQuery,
} from '../controller/bookController.js';

const router = express.Router();

//* get all books
router.get('/', getAllBooks);

//* get book by search query
router.get('/search/:searchQuery', getBooksBySearchQuery);

export default router;
