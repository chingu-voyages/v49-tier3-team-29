import express from "express";
import {
  forgotPassword,
  generateJwtToken,
  resetPassword,
} from "../controller/authController.js";
const router = express.Router();

//* initiate password reset
router.post("/forgot-password", forgotPassword);
//* process resetting password
router.post("/reset-password", resetPassword);

// * jwt token
router.post("/jwttoken", generateJwtToken);

export default router;
