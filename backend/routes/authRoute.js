import express from 'express';
import {
	forgotPassword,
	resetPassword,
	refreshToken,
	newUser,
	login,
	logoutUser,
	fetchUser,
} from '../controller/authController.js';
import { verifyToken } from '../middleware/authMiddleware.js';
const router = express.Router();

//* New user
router.post('/register', newUser);

// * Login user
router.post('/login', login);

//* Log user out
router.post('/logout', logoutUser);

//* Initiate password reset
router.post('/forgot-password', forgotPassword);

//* Process resetting password
router.post('/reset-password', resetPassword);

//* Refresh Token
router.post('/refresh-token', refreshToken);

//* Fetch authenticated user
router.get('/user', verifyToken, fetchUser);

export default router;
