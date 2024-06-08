import express from 'express';
import {
	removeListBook,
	getListByUserId,
	addBookToList,
} from '../controller/listController.js';

const router = express.Router();

// Add book to list
router.patch('/:listId', addBookToList);

// Get list by user ID
router.get('/user/:userId', getListByUserId);

// Remove book from a list by listId
router.patch('/remove/:listId', removeListBook);

export default router;
