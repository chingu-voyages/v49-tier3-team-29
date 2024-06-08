import { faker } from '@faker-js/faker';
import Books from '../models/Books.js';
import Users from '../models/Users.js';
import Reviews from '../models/Reviews.js';
import Lists from '../models/Lists.js';
import bcrypt from 'bcrypt';

export const seedData = async () => {
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

	const bookSeeders = [
		{
			title: 'The Great Gatsby',
			description:
				"The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
			genre: 'Fiction',
			author: 'F. Scott Fitzgerald',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg',
			ISBN: '9780743273565',
		},
		{
			title: 'To Kill a Mockingbird',
			description:
				'To Kill a Mockingbird is a novel by Harper Lee published in 1960. Instantly successful, widely read in high schools and middle schools in the United States, it has become a classic of modern American literature, winning the Pulitzer Prize.',
			genre: 'Fiction',
			author: 'Harper Lee',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/1200px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg',
			ISBN: '9780060935467',
		},
		{
			title: '1984',
			description:
				"1984 is a dystopian social science fiction novel by English novelist George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime.",
			genre: 'Science Fiction',
			author: 'George Orwell',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/en/5/51/1984_first_edition_cover.jpg',
			ISBN: '9780451524935',
		},
		{
			title: 'Steve Jobs',
			description:
				'Steve Jobs is the authorized self-titled biography of Steve Jobs. The book was written at the request of Jobs by Walter Isaacson, a former executive at CNN and Time who has written best-selling biographies of Benjamin Franklin and Albert Einstein.',
			genre: 'Biography',
			author: 'Walter Isaacson',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/en/e/e4/Steve_Jobs_by_Walter_Isaacson.jpg',
			ISBN: '9781451648539',
		},
		{
			title: 'The Power of Habit',
			description:
				'The Power of Habit: Why We Do What We Do in Life and Business is a book by Charles Duhigg, a New York Times reporter, published in February 2012 by Random House. It explores the science behind habit creation and reformation.',
			genre: 'Health',
			author: 'Charles Duhigg',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/en/7/7f/The_Power_of_Habit.jpg',
			ISBN: '9780812981605',
		},
		{
			title: 'The Hobbit',
			description:
				'The Hobbit, or There and Back Again is a childrens fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction.',
			genre: 'Fantasy',
			author: 'J. R. R. Tolkien',
			imageUrl:
				'https://tolkiengateway.net/w/images/thumb/e/e4/The_Hobbit_2016-facsimile.jpeg/275px-The_Hobbit_2016-facsimile.jpeg',
			ISBN: '9780547928227',
		},
		{
			title: 'Pride and Prejudice',
			description:
				'Pride and Prejudice is a romantic novel of manners written by Jane Austen in 1813. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.',
			genre: 'Romance',
			author: 'Jane Austen',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/1/17/PrideAndPrejudiceTitlePage.jpg',
			ISBN: '9780141439518',
		},
		{
			title: 'Sapiens: A Brief History of Humankind',
			description:
				'Sapiens: A Brief History of Humankind is a book by Yuval Noah Harari first published in Hebrew in 2011, and in English in 2014. The book surveys the history of humankind from the evolution of archaic human species in the Stone Age up to the twenty-first century',
			genre: 'History',
			author: 'Yuval Noah Harari',
			imageUrl:
				'https://jamesclear.com/wp-content/uploads/2016/06/sapiens-by-yuval-noah-harari.jpg',
			ISBN: '9780062316097',
		},
		{
			title: 'Educated',
			description:
				'Educated is a memoir by the American author Tara Westover. It details Westover’s upbringing in a Mormon fundamentalist family in rural Idaho, her eventual departure from her family at the age of 17, and her pursuit of formal education.',
			genre: 'Non-Fiction',
			author: 'Tara Westover',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/en/1/1f/Educated_%28Tara_Westover%29.png',
			ISBN: '9780399590504',
		},
		{
			title: 'The Subtle Art of Not Giving a F*ck',
			description:
				'The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life is the second book by blogger and author Mark Manson. It was published under the imprint of HarperOne, a division of HarperCollins Publishers, and was released on September 13, 2016.',
			genre: 'Self-Help',
			author: 'Mark Manson',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/en/b/bd/The_Subtle_Art_of_Not_Giving_a_F%2Ack_by_Mark_Manson_-_Book_Cover.png',
			ISBN: '9780062457714',
		},
		{
			title: 'Sharp Objects',
			description:
				'Sharp Objects is a 2006 novel by American author Gillian Flynn and her debut novel. The book was first published through Shaye Areheart Books on September 26, 2006, and has subsequently been re-printed through Broadway Books.',
			genre: 'Thriller',
			author: 'Gillian Flynn',
			imageUrl:
				'https://static.wikia.nocookie.net/gone-girl/images/d/dc/Sharp-objects-book-cover.jpg/revision/latest?cb=20160404234516',
			ISBN: '9780307341556',
		},
		{
			title: 'The Immortal Life of Henrietta Lacks',
			description:
				'The Immortal Life of Henrietta Lacks is a non-fiction book by American author Rebecca Skloot. It was the 2011 winner of the National Academies Communication Award for best creative work that helps the public understanding of topics in science, engineering or medicine.',
			genre: 'Non-Fiction',
			author: 'Rebecca Skloot',
			imageUrl:
				'https://m.media-amazon.com/images/I/71YyiW5bLzL._AC_UF1000,1000_QL80_.jpg',
			ISBN: '9781400052172',
		},
		{
			title: 'Unbroken: A World War II Story of Survival, Resilience, and Redemption',
			description:
				'Unbroken: A World War II Story of Survival, Resilience, and Redemption is a non-fiction book by Laura Hillenbrand. Unbroken is a biography of World War II hero Louis Zamperini, a former Olympic track star who survived a plane crash in the Pacific theater, spent 47 days drifting on a raft, and then survived more than two and a half years as a prisoner of war in three brutal Japanese prisoner-of-war camps.',
			genre: 'History',
			author: 'Laura Hillenbrand',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/en/f/f0/Unbroken_by_Laura_Hillenbrand_%28cover%29.jpg',
			ISBN: '9781400064168',
		},
		{
			title: 'The 7 Habits of Highly Effective People',
			description:
				'The 7 Habits of Highly Effective People, first published in 1989, is a business and self-help book written by Stephen R. Covey. Covey presents an approach to being effective in attaining goals by aligning oneself to what he calls "true north" principles based on a character ethic that he presents as universal and timeless.',
			genre: 'Self-Help',
			author: 'Stephen R. Covey',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/en/a/a2/The_7_Habits_of_Highly_Effective_People.jpg',
			ISBN: '9781982137138',
		},
		{
			title: 'The Notebook',
			description:
				'The Notebook is a romantic novel by American novelist Nicholas Sparks, The novel was later adapted into a popular film of the same name, in 2004. The Indian Bollywood film, Zindagi Tere Naam, starring Mithun Chakraborty, is also based on it.',
			genre: 'Romance',
			author: 'Nicholas Sparks',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/id/c/cc/Thenotebookcoverbook.jpg',
			ISBN: '9780446605236',
		},
	];

	const reviewSeeders = [
		{
			title: 'Amazing Book!',
			body: 'This book was amazing! I could not put it down!, I would recommend it to anyone.',
			rating: 5,
		},
		{
			title: 'Not a great read',
			body: 'This book was not a great read. I would not recommend it to anyone.',
			rating: 2,
		},
		{
			title: 'Terrible Book!',
			body: 'This book was terrible! I would not recommend it to anyone. I could not even finish it.',
			rating: 1,
		},
		{
			title: 'So and so book',
			body: 'This book was so and so. I liked some parts but did not like others. I would not recommend it to anyone.',
			rating: 3,
		},
		{
			title: 'Best of this year',
			body: 'This book was the best of this year. The author did a great job expanding on their ideas and goals. I would recommend it to anyone.',
			rating: 5,
		},
		{
			title: 'Almost perfect',
			body: 'This book was almost perfect. It lacks the little bit of depth that would make it a 5-star book. I would recommend it to anyone.',
			rating: 4,
		},
		{
			title: 'Pleasantly surprised',
			body: 'This book was a pleasant surprise. I did not expect to like it as much as I did. This was a recommended read and I would recommend it to anyone.',
			rating: 4,
		},
		{
			title: "Don't waste your time",
			body: 'This book was a waste of time. I would not recommend it to anyone. My time would have been better spent elsewhere.',
			rating: 1,
		},
		{
			title: 'Not what I expected',
			body: 'This book was not what I expected. It had its moments but overall It is a maybe in terms of recommending it to anyone.',
			rating: 3,
		},
		{
			title: 'FAKE NEWS',
			body: 'This book was fake news, and fake agenda. You are better off reading the back of a cereal box. I would not recommend it to anyone.',
			rating: 1,
		},
		{
			title: 'A must-read',
			body: "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable.",
			rating: 4,
		},
		{
			title: 'Great Read!',
			body: "One of the standout features of this product is the exceptional customer support. In my experience, the team behind this product has been quick to respond and incredibly helpful. It's reassuring to know that they stand firmly behind their product.",
			rating: 4,
		},
		{
			title: 'Must-read!',
			body: 'The level of simplicity and user-friendliness in this product has significantly simplified my life. I appreciate the creators for delivering a solution that not only meets but exceeds user expectations.',
			rating: 5,
		},
		{
			title: 'I was able to put it down easily',
			body: 'This book was not a great read. I would not recommend it to anyone.',
			rating: 2,
		},
		{
			title: 'I could not even finish it',
			body: 'This book was terrible! I would not recommend it to anyone. I could not even finish it.',
			rating: 1,
		},
	];

	try {
		// Cleaning collections
		await Users.collection.drop();
		await Books.collection.drop();
		await Reviews.collection.drop();
		await Lists.collection.drop();
	} catch (error) {
		console.error('Error dropping collections:', error);
	}

	// # of seed objects
	const seed_count = 6;

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

	const users = await Users.find();
	for (const user of users) {
		const list = new Lists({
			userId: user._id,
		});
		await list.save();
	}

	// Created book data
	bookSeeders.forEach(book => {
		BookData.push(book);
	});

	await Books.insertMany(BookData);

	const booksArr = await Books.find();

	// Create reviews for books
	for (let i = 0; i < booksArr.length; i++) {
		const book = booksArr[i];

		const user1 = users[Math.floor(Math.random() * users.length)];

		let user2;
		// Ensure user2 is different from user1
		do {
			user2 = users[Math.floor(Math.random() * users.length)];
		} while (user2._id === user1._id);

		const review1 = {
			userId: user1._id,
			bookId: book._id,
			rating: reviewSeeders[i].rating,
			title: reviewSeeders[i].title,
			body: reviewSeeders[i].body,
		};

		const index = (i + 1) % reviewSeeders.length;

		const review2 = {
			userId: user2._id,
			bookId: book._id,
			rating: reviewSeeders[index].rating,
			title: reviewSeeders[index].title,
			body: reviewSeeders[index].body,
		};

		ReviewData.push(review1);
		ReviewData.push(review2);
	}

	await Reviews.insertMany(ReviewData);

	const listSeedData = async () => {
		for (const user of users) {
			const userList = await Lists.findOne({ userId: user._id });

			const randomBook =
				booksArr[Math.floor(Math.random() * booksArr.length)];

			if (userList) {
				userList.books.push(randomBook._id);

				await userList.save();
			}
		}
	};

	await listSeedData();

	console.log('Seeding completed');
};
