import express from 'express';
import { getAllBooks } from '../controller/bookController.js';

const router = express.Router();

//* get all books
router.get('/', getAllBooks);

//* get book by title

//* create a new book

//* update a book

//* delete a book

export default router;
