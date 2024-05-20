import express from 'express';
import {
	getAllUsers,
	getUserByUsername,
} from '../controller/userController.js';

const router = express.Router();

//* get all users
router.get('/', getAllUsers);

//* get user by username
router.get('/:username', getUserByUsername);

export default router;
