import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { bookBaseURL } from '../utils/baseUrl';

const initialState = {
	loading: false,
	bookInfo: {},
	error: '',
};

// * Fetch book by title, author
export const fetchBook = createAsyncThunk(
	'book/bookInfo',
	async bookDetails => {
		const request = await axios.get(`${bookBaseURL}/author/${bookDetails}`);
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
					return action.type === fetchBook.pending.type;
				},
				state => {
					state.loading = true;
				}
			)
			.addMatcher(
				action => {
					return action.type === fetchBook.fulfilled.type;
				},
				(state, action) => {
					state.loading = false;
					state.bookInfo = action.payload;
				}
			)
			.addMatcher(
				action => {
					return action.type === fetchBook.rejected.type;
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
