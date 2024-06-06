import List from "../models/Lists.js";
// import Book from "../models/Books.js";

export const getListById = async (req, res) => {
  try {
    const list = await List.find({ _id: req.params.listid });

    res.json(list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const getListByUserId = async (req, res) => {
  try {
    const list = await List.findOne({ userId: req.params.userid });

    res.json(list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const getAllLists = async (req, res) => {
  try {
    const list = await List.find();

    res.json(list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const deleteList = async (req, res) => {
  try {
    // get by list
    const list = await List.findOne({ _id: req.params.listid });
    if (!list) {
      return res.status(404).json({ message: "List not found." });
    }

    // find and delete by listID
    const existingList = await List.findOneAndDelete({
      _id: list._id,
    });

    if (!existingList) {
      return res.status(404).json({ message: "List not found." });
    }

    res.status(200).json({ message: "List has been deleted." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// // @desc   Add book to list
// // @route  PATCH  /lists/:listId/
// export const addBookToList = async (req, res) => {
// 	try {
// 		const { listId } = req.params;
// 		const { bookId } = req.body;

// 		const list = await List.findById(listId);
// 		if (!list) {
// 			return res.status(404).json({ message: 'List not found' });
// 		}

// 		// Find the book by id
// 		const book = await Book.findById(bookId);
// 		if (!book) {
// 			throw new Error('Book not found');
// 		}

// 		// Check if book is already in the list
// 		const bookInList = list.books.find(
// 			book => book.bookId.toString() === bookId
// 		);

// 		if (bookInList) {
// 			return res.status(400).json({ message: 'Book already in list' });
// 		}

// 		list.books.push({ bookId });
// 		await list.save();

// 		// Return the updated list with book objects
// 		const populatedList = await List.findById(listId).populate(
// 			'books.bookId'
// 		);
// 		return populatedList;
// 	} catch (error) {
// 		res.status(500).json({ message: error.message });
// 	}
// };
