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

// Delete one book from lilst by a combination of list ID + book ID
router.delete("/:listid/:bookid", removeListBook);

export default router;
