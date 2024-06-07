import express from "express";

import {
  removeListBook,
  getListByUserId,
} from "../controller/listController.js";

import { addBookToList } from "../controller/listController.js";

const router = express.Router();

 
router.patch("/:listId", addBookToList);

// Get list by user ID
router.get("/user/:userid", getListByUserId);
// Delete list
router.delete("/:listid", removeListBook);
 
router.patch('/:listId', addBookToList);
 

export default router;
