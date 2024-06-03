import { faker } from '@faker-js/faker';
import Books from '../models/Books.js';
import Users from '../models/Users.js';
import Reviews from '../models/Reviews.js';
import bcrypt from 'bcrypt';

export const seedData = async () => {
	// Book genres
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

	const reviewTitles = [
		'Amazing Book!',
		'Great Read!',
		'Must-read!',
		'Could not put it down!',
	];

	const reviewBodies = [
		'This book was amazing! I could not put it down!',
		'This book was a great read. I would recommend it to anyone.',
		'This book was a must-read! I would recommend it to anyone.',
		'I could not put this book down. It was amazing!',
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

	// Número de rondas para generar el salt
	const saltRounds = 10;

	let userData = [],
		BookData = [],
		ReviewData = [];

	// Demo user data
	const demoUser = {
		name: 'Demo User',
		username: 'demo_user',
		email: 'demo_shelf@bookShare.com',
		password: await bcrypt.hash(process.env.DEMOUSER_PASSWORD, saltRounds),
		isActive: true,
	};

	userData.push(demoUser);

	// Created user data
	for (let i = 0; i < seed_count; i++) {
		const name = faker.person.fullName();
		const username = faker.internet.userName().slice(0, 12);
		const email = faker.internet.email();
		const Pass = faker.internet.password(); // Generates the password
		const password = await bcrypt.hash(Pass, saltRounds); //Hash each password

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
		ISBN: '22cdc683b2e7',
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

	const seedDB_Books = async () => {
		await Books.insertMany(BookData);
	};
	seedDB_Books();

	const users = await Users.find();
	const books = await Books.find();

	for (let i = 0; i < books.length; i++) {
		const book = books[i];

		const user1 = users[Math.floor(Math.random() * users.length)];

		let user2;
		// Ensure user2 is different from user1
		do {
			user2 = users[Math.floor(Math.random() * users.length)];
		} while (user2._id === user1._id);

		const review1 = {
			userId: user1._id,
			bookId: book._id,
			rating: Math.floor(Math.random() * 3) + 3,
			title: reviewTitles[
				Math.floor(Math.random() * reviewTitles.length)
			],
			body: reviewBodies[Math.floor(Math.random() * reviewBodies.length)],
		};
		const review2 = {
			userId: user2._id,
			bookId: book._id,
			rating: Math.floor(Math.random() * 3) + 3,
			title: reviewTitles[
				Math.floor(Math.random() * reviewTitles.length)
			],
			body: reviewBodies[Math.floor(Math.random() * reviewBodies.length)],
		};

		ReviewData.push(review1);
		ReviewData.push(review2);
	}

	const seedDB_Review = async () => {
		await Reviews.insertMany(ReviewData);
	};

	seedDB_Review().then(() => {
		console.log('Seeding was successful');
	});
};
