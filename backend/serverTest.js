const express = require('express');
const mongoose = require('mongoose');
const {MongoClient} = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();
const userRoutes = require('./routes/userRoute.js'); 

const app = express();
const PORT = process.env.PORT || 5000;

//connect to db

const uri = process.env.DB;
 
const client = new MongoClient(uri);

async function main(){

    console.log("connecting...");
 
    try {
        
        await client.connect();
        const db = client.db('Bookapp');
        const collection = db.collection('userTest');
        console.log("connected!");
        // insert document
       // const insertResult = await collection.insertMany([{ username: 'user1', email: 'user1@example.com', password: 'pass'
        // }, { username: 'user2', email: 'user2@example.com',  password: 'pass' }, 
        // {username: 'user3', email: 'user3@example.com',  password: 'pass' }]);


        //console.log('Inserted documents =>', insertResult);
 
    } catch (e) {
        console.error(e);
    } finally {
        //await client.close();
    }
}

main().catch(console.error);


app.use(express.json());
app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
