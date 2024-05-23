import express from 'express';
import {
	getAllUsers,
	getUserByUsername,
	updateUser,
	deactivate,
	newUser,
} from '../controller/userController.js';

const router = express.Router();

router.post('/register', newUser);

//* get all users
router.get('/', getAllUsers);

//* get user by username
router.get('/:username', getUserByUsername);

router.put('/:username', updateUser);
router.put('/:username/deactivate', deactivate);

export default router;
