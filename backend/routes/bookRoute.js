import express from "express";
import {
  getAllBooks,
  getBooksByGenre,
  getBookByIsbn,
  getBooksByTitle,
  getBooksByAuthor,
} from "../controller/bookController.js";

const router = express.Router();

//* get all books
router.get("/", getAllBooks);

//* get book by genre
router.get("/genre/:genre", getBooksByGenre);

//* get book by book isbn
router.get("/isbn/:isbn", getBookByIsbn);

//* get book(s) by title
router.get("/title/:title", getBooksByTitle);

//* get book(s) by author
router.get("/author/:author", getBooksByAuthor);

export default router;
