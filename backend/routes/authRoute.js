import express from 'express';
import { forgotPassword, resetPassword } from '../controller/authController.js';
const router = express.Router();

//* initiate password reset
router.post('/forgot-password', forgotPassword);

//* process resetting password
router.post('/reset-password', resetPassword);

//* Refresh Token
router.post('/refresh-token', refreshToken);

//* new user
router.post('/register', newUser);

// * Login user
router.post('/login', login);

//* log user out
router.post('/logout', logoutUser);

export default router;
