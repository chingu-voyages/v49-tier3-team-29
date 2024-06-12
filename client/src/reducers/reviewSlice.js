import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { reviewBaseURL } from '../utils/baseUrl';

const initialState = {
	loading: false,
	reviewInfo: {},
	error: '',
};

// * Fetch all reviews for a book
export const fetchBookReviews = createAsyncThunk(
	'review/bookReviews',
	async bookId => {
		const request = await axios.get(`${reviewBaseURL}/${bookId}`);
		const response = await request.data;
		return response;
	}
);
// * Fetch all reviews by a user
export const fetchUserReviews = createAsyncThunk(
	'review/userReviews',
	async username => {
		const request = await axios.get(`${reviewBaseURL}/users/${username}`);
		const response = await request.data;
		return response;
	}
);
// * Post a review for a book
export const postReview = createAsyncThunk(
	'review/postReview',
	async newReview => {
		const request = await axios.post(`${reviewBaseURL}/`, newReview);
		const response = await request.data;
		return response;
	}
);
// * Update a review
export const updateReview = createAsyncThunk(
	'review/updateReview',
	async reviewDetails => {
		// reviewDetails must be an object with the following format
		// reviewDetails = {bookId:'123455', review:{username:'example', title:'example',body:'example',rating:4}}
		const { bookId, review } = reviewDetails;
		const request = await axios.patch(`${reviewBaseURL}/${bookId}`, review);
		const response = await request.data;
		return response;
	}
);
// * Delete a review
export const deleteReview = createAsyncThunk(
	'review/deleteReview',
	async reviewDetails => {
		const request = await axios.delete(
			`${reviewBaseURL}/${reviewDetails.username}/${reviewDetails.bookId}`
		);
		const response = await request.data;
		return response;
	}
);

const reviewSlice = createSlice({
	name: 'review',
	initialState,
	extraReducers: builder => {
		builder
			.addMatcher(
				action => {
					return (
						action.type === fetchBookReviews.pending.type ||
						action.type === fetchUserReviews.pending.type ||
						action.type === postReview.pending.type ||
						action.type === updateReview.pending.type ||
						action.type === deleteReview.pending.type
					);
				},
				state => {
					state.loading = true;
				}
			)
			.addMatcher(
				action => {
					return (
						action.type === fetchBookReviews.fulfilled.type ||
						action.type === fetchUserReviews.fulfilled.type ||
						action.type === postReview.fulfilled.type ||
						action.type === updateReview.fulfilled.type ||
						action.type === deleteReview.fulfilled.type
					);
				},
				(state, action) => {
					state.loading = false;
					state.reviewInfo = action.payload;
					state.error = '';
				}
			)
			.addMatcher(
				action => {
					return (
						action.type === fetchBookReviews.rejected.type ||
						action.type === fetchUserReviews.rejected.type ||
						action.type === postReview.rejected.type ||
						action.type === updateReview.rejected.type ||
						action.type === deleteReview.rejected.type
					);
				},
				(state, action) => {
					state.loading = false;
					state.reviewInfo = {};
					state.error = action.error.message;
				}
			);
	},
});

export default reviewSlice.reducer;
