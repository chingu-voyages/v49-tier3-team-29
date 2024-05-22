import express from 'express';
import {
	getAllUsers,
	getUserByUsername,
	updateUser,
} from '../controller/userController.js';

const router = express.Router();

//* get all users
router.get('/', getAllUsers);

//* get user by username
router.get('/:username', getUserByUsername);

router.put('/:username', updateUser);

export default router;
