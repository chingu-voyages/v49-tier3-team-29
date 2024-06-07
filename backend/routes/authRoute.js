import express from "express";
import {
  forgotPassword,
  resetPassword,
  logoutUser,
} from "../controller/authController.js";
const router = express.Router();

//* initiate password reset
router.post("/forgot-password", forgotPassword);
//* process resetting password
router.post("/reset-password", resetPassword);

//* log user out
router.get("/logout", logoutUser);

export default router;
