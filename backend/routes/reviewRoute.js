import express from 'express';
import {
	getAllUserReviews,
	createReview,
	getAllBookReviews,
} from '../controller/reviewController';

const router = express.Router();

//* get all reviews by user
router.get('/user/:userId', getAllUserReviews);

//* get all reviews by bookId
router.get('/:bookId', getAllBookReviews);

//* create a review
router.post('/', createReview);

export default router;
