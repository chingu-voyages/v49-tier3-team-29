import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoute.js';
import bookRoutes from './routes/bookRoute.js';

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

//* Security Middleware
app.use(helmet());

//* Routes
app.use('/users', userRoutes);
app.use('/books', bookRoutes);

app.get('/', (req, res) => {
	res.send('Shelf Shell');
});

//* Connect to Database and Start Server
connectDB()
	.then(() => {
		app.listen(port, () => {
			console.log(`Server is listening live on port:${port}`);
		});
	})
	.catch(error => {
		console.log(`Database Connection Error: ${error}`);
	});
