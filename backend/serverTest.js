import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRoutes from './routes/userRoute.js';
import bookRoutes from './routes/bookRoute.js';
import User from './models/Users.js';
import Book from './models/Books.js';
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/users', userRoutes);
app.use('/books', bookRoutes);

//connect to db

console.log('connecting...');
mongoose.connect(process.env.DB_URI);

//******** insert user test *****************
// const user = new User({
// 	username: 'user1',
// 	email: 'user1@example.com',
// 	password: 'pass',
// });

//user.save();
//const firstArticle = User.findOne({});
//console.log(firstArticle);

//******* insert book test *****************
// const book = new Book({
// 	title: 'book1',
// 	description: 'description1 for a new book that is created by user1',
// 	genre: 'genre1',
// 	userId: '6647cba7f2367062b0990012',
// 	isBan: 'not banned',
// });

// book.save();
// const firstBook = Book.findOne({});
// console.log(firstBook);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
console.log('connected');
