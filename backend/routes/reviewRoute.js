import express from 'express';
import {
	getAllUserReviews,
	createReview,
	getAllBookReviews,
	updateReview,
	deleteReview,
} from '../controller/reviewController.js';

const router = express.Router();

//* get all reviews by user
router.get('/users/:username', getAllUserReviews);

//* get all reviews by bookId
router.get('/:bookId', getAllBookReviews);

//* create a review
router.post('/', createReview);

//* update review
router.put('/users/:username/:bookId', updateReview)

//* delete review
router.delete('/users/:username/:bookId', deleteReview);

export default router;
