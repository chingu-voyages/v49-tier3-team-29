import { faker } from '@faker-js/faker';
import Books from '../models/Books.js';
import Users from '../models/Users.js';
import Reviews from '../models/Reviews.js';
import bcrypt from "bcrypt";

export const seedData = async () => {
const genres = [
'Fiction',
'Non-Fiction',
'Science Fiction',
'Fantasy',
'Biography',
'History',
'Romance',
'Thriller',
'Mystery',
'Self-Help',
'Health',
];

//Getting random genres
const getRandomGenre = () => {
const randomIndex = Math.floor(Math.random() * genres.length);
return genres[randomIndex];
};

//Cleaning collections
Users.collection.drop();
Books.collection.drop();
Reviews.collection.drop();

// # of seed objects
const seed_count = 10;

let userData = [];
let BookData = [];

// Demo user data
const demoUser = {
name: 'Demo User',
username: 'demo_user',
email: 'demo_shelf@bookShare.com',
password: process.env.DEMOUSER_PASSWORD,
isActive: true,
};

userData.push(demoUser);

async function hashPassword(password) {
    const saltRounds = 10; // Número de rondas para generar el salt
    try {
        const hash = await bcrypt.hash(password, saltRounds);
        return hash;
    } catch (err) {
        console.error(err);
        throw err; // Propaga el error para que el llamador lo maneje
    }
}


const saltRounds = 10;

// Created user data
for (let i = 0; i < seed_count; i++) {
const name = faker.person.fullName();
const username = faker.internet.userName().slice(0, 12);
const email = faker.internet.email();
const Pass = faker.internet.password(); // Generates the password
const password = bcrypt.hashSync(Pass, saltRounds); //Hash each password

const isActive = true;

userData.push({
name,
username,
email,
password,
isActive,
});
}

 await Users.insertMany(userData);

const bookDemo = {
title: 'Demo Book',
description: 'This is a demo book for testing purposes',
genre: 'Fiction',
author: 'Demo Author',
ISBN: '22cdc683-2e7',
};

BookData.push(bookDemo);
// Created book data
for (let i = 0; i < seed_count; i++) {
const title = faker.lorem.words(4);
const description = faker.lorem.paragraph();
const genre = getRandomGenre();
const author = faker.person.fullName();

const truncatedIsban = faker.string.uuid();
const ISBN = truncatedIsban.slice(0, 12);

BookData.push({ title, description, genre, author, ISBN });
}

const seedDB = async () => {
await Books.insertMany(BookData);
};

seedDB().then(() => {
console.log('Seeding was successful');
});
};