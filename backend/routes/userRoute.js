import express from 'express';
import {
	getAllUsers,
	getUserByUsername,
	updateUser,
	deactivate,
	newUser,
	login,
} from '../controller/userController.js';

const router = express.Router();

router.post('/register', newUser);
router.post('/login', login);
//* get all users
router.get('/', getAllUsers);

//* get user by username
router.get('/:username', getUserByUsername);

//* Update user by username
router.put('/:username', updateUser);

// * Deactivate user
router.put('/:username/deactivate', deactivate);

export default router;
