import express from 'express';
import { addBookToList } from '../controller/listController.js';

const router = express.Router();

router.patch('/:listId', addBookToList);

export default router;
