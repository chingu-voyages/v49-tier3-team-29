import express from 'express';
import {
	getAllUserReviews,
	createReview,
	getAllBookReviews,
} from '../controller/reviewController.js';

const router = express.Router();

//* get all reviews by user
router.get('/user/:username', getAllUserReviews);

//* get all reviews by bookId
router.get('/:bookId', getAllBookReviews);

//* create a review
router.post('/', createReview);

//* update review

//* delete review

export default router;
