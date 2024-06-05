import { faker } from '@faker-js/faker';
import Books from '../models/Books.js';
import Users from '../models/Users.js';
import Reviews from '../models/Reviews.js';
import lists from '../models/Lists.js';
import bcrypt from 'bcrypt';

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
	const bookImages = [
		'https://images.unsplash.com/photo-1528459061998-56fd57ad86e3?q=80&w=3655&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1571829604981-ea159f94e5ad?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1528459105426-b9548367069b?q=80&w=3320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1571829604981-ea159f94e5ad?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=3333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	];

	const userImages = [
		'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1472068996216-8c972a0af9bd?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1536985576470-b7e4a0363a19?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1544185310-0b3cf501672b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1535930749574-1399327ce78f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1600468448005-67286e81341b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1604520024165-2f48dfca2a8b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1472173148041-00294f0814a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	];

	const reviewTitles = [
		'Amazing Book!',
		'Great Read!',
		'Must-read!',
		'Could not put it down!',
	];

	const reviewBodies = [
		'This book was amazing! I could not put it down!, I would recommend it to anyone.',
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
	lists.collection.drop();

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
		image: userImages[Math.floor(Math.random() * userImages.length)],
		isActive: true,
	};

	userData.push(demoUser);

	// Created user data
	for (let i = 0; i < seed_count; i++) {
		const name = faker.person.fullName();
		const username = faker.internet.userName().slice(0, 12);
		const email = faker.internet.email();
		const image = userImages[Math.floor(Math.random() * userImages.length)];
		const Pass = faker.internet.password(); // Generates the password
		const password = await bcrypt.hash(Pass, saltRounds); //Hash each password

		const isActive = true;

		userData.push({
			name,
			username,
			email,
			image,
			password,
			isActive,
		});
	}

	await Users.insertMany(userData);

	const createdUsers = await Users.find();
	for (let i = 0; i < createdUsers.length; i++) {
		const user = createdUsers[i];

		const list = new lists({
			userId: user._id,
		});

		await list.save();
	}

	const bookDemo = {
		title: 'Demo Book',
		description: 'This is a demo book for testing purposes',
		genre: 'Fiction',
		author: 'Demo Author',
		imageUrl: bookImages[Math.floor(Math.random() * bookImages.length)],
		ISBN: '22cdc683b2e7',
	};

	BookData.push(bookDemo);

	// Created book data
	for (let i = 0; i < seed_count; i++) {
		const title = faker.lorem.words(4);
		const description = faker.lorem.paragraph();
		const genre = getRandomGenre();
		const author = faker.person.fullName();
		const imageUrl =
			bookImages[Math.floor(Math.random() * bookImages.length)];
		const truncatedIsban = faker.string.uuid();
		const ISBN = truncatedIsban.slice(0, 12);

		BookData.push({ title, description, genre, author, ISBN, imageUrl });
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
