import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { connectDB } from './config/db.js';
import cookieParser from 'cookie-parser';
import { genLimiter } from './middleware/limiter.js';
import {
	userRoutes,
	bookRoutes,
	authRoutes,
	reviewRoutes,
	listRoutes,
} from './routes/index.js';
import { seedData } from './config/Seeders.js';

dotenv.config();
const port = process.env.PORT || 5000;

// Declare express app
const app = express();

// Security Middleware
app.use(helmet());
app.use(cors());

// Apply general rate limiter to all routes
app.use(genLimiter);

// Body parser
app.use(express.json());

// Cookier parser
app.use(cookieParser());

//* Routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/books', bookRoutes);
app.use('/reviews', reviewRoutes);
app.use('/lists', listRoutes);

app.get('/', (req, res) => {
	res.send('Shelf Share API is live!');
});

//* Connect to Database and then Start Server
connectDB()
	.then(() => {
		seedData();
		app.listen(port, () => {
			console.log(`Server is listening live on http://localhost:${port}`);
		});
	})
	.catch(error => {
		console.log(`Database Connection Error: ${error}`);
	});
