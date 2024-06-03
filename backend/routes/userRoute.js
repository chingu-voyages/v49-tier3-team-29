import express from 'express';
import {
	getAllUsers,
	getUserByUsername,
	updateUser,
	deactivate,
} from '../controller/userController.js';
import { login, newUser } from '../controller/authController.js';

const router = express.Router();

router.post('/login', login);
router.post('/register', newUser);
//* get all users
router.get('/', getAllUsers);

//* get user by username
router.get('/:username', getUserByUsername);

//* Update user by username
router.put('/:username', updateUser);

// * Deactivate user
router.put('/:username/deactivate', deactivate);

export default router;
