import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRoutes from './routes/userRoute.js';
import User from './models/Users.js';
const app = express();
const PORT = process.env.PORT || 5000;

//connect to db

console.log('connecting...');
mongoose.connect(process.env.DB);

//insert user test
const user = new User({
	username: 'user1',
	email: 'user1@example.com',
	password: 'pass',
});

//user.save();
//const firstArticle = User.findOne({});
//console.log(firstArticle);

app.use(express.json());
app.use('/users', userRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
console.log('connected');
