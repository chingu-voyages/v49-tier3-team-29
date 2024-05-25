import Review from '../models/Reviews.js';

export const getAllUserReviews = async (req, res) => {
	try {
		const reviews = await Review.find({ userId: req.params.userId });

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
