import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { bookBaseURL } from '../utils/baseUrl';

const initialState = {
	loading: false,
	bookInfo: {},
	error: '',
};

// * Fetch all books
export const fetchAllBooks = createAsyncThunk('book/allBooks', async () => {
	const request = await axios.get(`${bookBaseURL}/`);
	const response = await request.data;
	return response;
});

// * Fetch landing page books
export const fetchLandingBooks = createAsyncThunk(
	'book/landingBooks',
	async () => {
		const request = await axios.get(`${bookBaseURL}/landingPage`);
		const response = await request.data;
		return response;
	}
);

// * Fetch book by title, author, genre, or ISBN
export const fetchBook = createAsyncThunk(
	'book/bookQuery',
	async bookDetails => {
		const request = await axios.get(`${bookBaseURL}/search/${bookDetails}`);
		const response = await request.data;
		return response;
	}
);

const bookSlice = createSlice({
	name: 'book',
	initialState,
	extraReducers: builder => {
		builder
			.addMatcher(
				action => {
					return (
						action.type === fetchBook.pending.type ||
						action.type === fetchAllBooks.pending.type ||
						action.type === fetchLandingBooks.pending.type
					);
				},
				state => {
					state.loading = true;
				}
			)
			.addMatcher(
				action => {
					return (
						action.type === fetchBook.fulfilled.type ||
						action.type === fetchAllBooks.fulfilled.type ||
						action.type === fetchLandingBooks.fulfilled.type
					);
				},
				(state, action) => {
					state.loading = false;
					state.bookInfo = action.payload;
				}
			)
			.addMatcher(
				action => {
					return (
						action.type === fetchBook.rejected.type ||
						action.type === fetchAllBooks.rejected.type ||
						action.type === fetchLandingBooks.rejected.type
					);
				},
				(state, action) => {
					state.loading = false;
					state.bookInfo = {};
					state.error = action.error.message;
				}
			);
	},
});

export default bookSlice.reducer;
