import express from 'express';
import {
	removeListBook,
	getListByUsername,
	addBookToList,
} from '../controller/listController.js';

const router = express.Router();

// Add book to list
router.patch('/:listId', addBookToList);

// Get list by username
router.get('/user/:username', getListByUsername);

// Remove book from a list by listId
router.patch('/remove/:listId', removeListBook);

export default router;
