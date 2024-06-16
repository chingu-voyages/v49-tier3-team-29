import express from 'express';
import {
	getAllUsers,
	getUserByUsername,
	updateUser,
	deactivate,
} from '../controller/userController.js';
import {
	login,
	newUser,
	logoutUser,
	refreshToken,
} from '../controller/authController.js';

const router = express.Router();

//* get all users
router.get('/', getAllUsers);

//* get user by username
router.get('/:username', getUserByUsername);

//* Update user by username
router.patch('/:username', updateUser);

// * Deactivate user
router.patch('/:username/deactivate', deactivate);

export default router;
