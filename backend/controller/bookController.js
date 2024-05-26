import Book from "../models/Books.js";

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc		Get books by genre
// @route		GET	/books/genre/:genre
// @access	Public
export const getBooksByGenre = async (req, res) => {
  let query;
  try {
    query = Book.find({ genre: req.params.genre });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  const booksByGenre = await query;
  if (booksByGenre.length === 0) {
    res.json({ message: "No record found." });
  } else {
    res.json(booksByGenre);
  }
};

// @desc		Get book by Book ISBN
// @route		GET	/books/isbn/:isbn
// @access	Public
export const getBookByIsbn = async (req, res) => {
  let query;
  try {
    query = Book.find({ isbn: req.params.isbn });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  const bookByIsbn = await query;
  if (bookByIsbn.length === 0) {
    res.json({ message: "No record found." });
  } else {
    res.json(bookByIsbn);
  }
};

// @desc		Get book(s) by book title
// @route		GET	/books/title/:title
// @access	Public
export const getBooksByTitle = async (req, res) => {
  let query;
  try {
    query = Book.find({ title: { $regex: ".*" + req.params.title + ".*" } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  const booksByTitle = await query;
  if (booksByTitle.length === 0) {
    res.json({ message: "No record found." });
  } else {
    res.json(booksByTitle);
  }
};

// @desc		Get books(s) by book author
// @route		GET	/books/author/:author
// @access	Public
export const getBooksByAuthor = async (req, res) => {
  let query;
  try {
    query = Book.find({ author: { $regex: ".*" + req.params.author + ".*" } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  const booksByAuthor = await query;

  if (booksByAuthor.length === 0) {
    res.json({ message: "No record found." });
  } else {
    res.json(booksByAuthor);
  }
};
