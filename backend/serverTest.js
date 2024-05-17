const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const userRoutes = require('./routes/userRoute.js');
const User = require('./models/Users.js');
const app = express();
const PORT = process.env.PORT || 5000;

//connect to db
const uri = process.env.DB;

console.log("connecting...");
mongoose.connect(uri);

//insert user test
const user = new User({ 
    username: 'user1', 
    email: 'user1@example.com',
    password: 'pass'
        
});

//user.save();
//const firstArticle = User.findOne({});
//console.log(firstArticle);

app.use(express.json());
app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
