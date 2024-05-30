import { mongo } from 'mongoose';
import Review from '../models/Reviews.js';
import User from '../models/Users.js';

export const getAllUserReviews = async (req, res) => {
	try {
		const user = await User.find({ username: req.params.username });

		const reviews = await Review.find({ userId: user[0]._id.toString() });

		res.json(reviews);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

export const getAllBookReviews = async (req, res) => {
	try {
		const reviews = await Review.find({ bookId: req.params.bookId });

		res.json(reviews);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

export const createReview = async (req, res) => {
	try {
		const { title, body, rating, userId, bookId } = req.body;

		// check if the user has already reviewed the book
		const existingReview = await Review.findOne({ userId, bookId });

		if (existingReview) {
			return res
				.status(400)
				.json({ message: 'You have already reviewed this book' });
		}

		// New review
		const review = new Review({ title, body, rating, userId, bookId });

		const newReview = await review.save();
		res.status(201).json(newReview);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

export const updateReview = async (req, res) => {
	try {
        const {  bookId } = req.params;
        const { username, title, body, rating } = req.body;

        // get user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        //find review by user and book ID
        const review = await Review.findOne({ userId: user._id, bookId });
        if (!review) {
            return res.status(404).json({ message: 'Review not found.' });
        }

        // update fields
        if (title !== undefined) review.title = title;
        if (body !== undefined) review.body = body;
        if (rating !== undefined) review.rating = rating;

        const updatedReview = await review.save();

        res.status(200).json({ message: 'Review has been updated.', updatedReview });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const deleteReview = async (req, res) => {
	try {

		const { username, bookId} = req.params;

		//get by username
		const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

		//find and delete by userID and bookID
		const existingReview = await Review.findOneAndDelete({ userId: user._id, bookId });

        if (!existingReview) {
            return res.status(404).json({ message: 'Review not found.' });
        }


		res.status(200).json({ message: 'Review has been deleted.'});

	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};