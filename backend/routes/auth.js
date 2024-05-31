import express from "express";
import { forgotPassword, resetPassword } from "../controller/authController.js";
const router = express.Router();

//* initiate password reset
router.post("/forgot-password", forgotPassword);
//* process resetting password
router.post("/reset-password", resetPassword);

export default router;
