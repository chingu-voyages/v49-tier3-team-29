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

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
console.log('connected');
