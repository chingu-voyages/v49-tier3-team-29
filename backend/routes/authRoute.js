import express from 'express';
import {
	forgotPassword,
	resetPassword,
	refreshToken,
	newUser,
	login,
	logoutUser,
} from '../controller/authController.js';
const router = express.Router();

//* Initiate password reset
router.post('/forgot-password', forgotPassword);

//* Process resetting password
router.post('/reset-password', resetPassword);

//* Refresh Token
router.post('/refresh-token', refreshToken);

//* New user
router.post('/register', newUser);

// * Login user
router.post('/login', login);

//* Log user out
router.post('/logout', logoutUser);

export default router;
