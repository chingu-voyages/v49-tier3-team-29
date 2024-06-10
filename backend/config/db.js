import mongoose from 'mongoose';

// const dbConnection = "mongodb://localhost:27017/BookApp";

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(`${process.env.DB_URI}`);
		console.log(`Database Connected Successfully: ${conn.connection.host}`);
	} catch (e) {
		console.log('Database Connection Error: \n', e);
	}
};
