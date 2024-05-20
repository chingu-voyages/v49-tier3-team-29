import express from 'express';
import { getAllBooks } from '../controller/bookController.js';

const router = express.Router();

//* get all books
router.get('/', getAllBooks);

//* get books by genre

//* get book by title/author/isbn

export default router;
