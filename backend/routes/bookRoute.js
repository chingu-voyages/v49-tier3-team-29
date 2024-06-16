import express from 'express';
import {
	getAllBooks,
	getBooksBySearchQuery,
	getAllLandingBooks,
} from '../controller/bookController.js';

const router = express.Router();

//* get all books
router.get('/', getAllBooks);

//* get all landing page books
router.get('/landingPage', getAllLandingBooks);

//* get book by search query
router.get('/search/:searchQuery', getBooksBySearchQuery);

export default router;
