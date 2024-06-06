import express from "express";

import {
  deleteList,
  getAllLists,
  getListById,
  getListByUserId,
} from "../controller/listController.js";

// import { addBookToList } from "../controller/listController.js";

const router = express.Router();

// router.patch("/:listId", addBookToList);
// Get all lists
router.get("/", getAllLists);
// Get list by list ID
router.get("/:listid", getListById);
// Get list by user ID
router.get("/user/:userid", getListByUserId);
// Delete list
router.delete("/:listid", deleteList);

export default router;
