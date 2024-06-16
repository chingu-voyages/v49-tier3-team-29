import express from 'express';
import {
	getAllUsers,
	getUserByUsername,
	updateUser,
	deactivate,
} from '../controller/userController.js';
import { login, newUser } from '../controller/authController.js';
import { authLimiter } from '../middleware/limiter.js';

const router = express.Router();
//* Login user
router.post('/login', login);

//* Register new user
router.post('/register', newUser);

//* get all users
router.get('/', getAllUsers);

//* get user by username
router.get('/:username', getUserByUsername);

//* Update user by username
router.patch('/:username', updateUser);

// * Deactivate user
router.patch('/:username/deactivate', deactivate);

export default router;
