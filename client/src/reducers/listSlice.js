import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { listBaseURL } from '../utils/baseUrl';

const initialState = {
	loading: false,
	listInfo: {},
	error: '',
};

// * Fetch list
export const fetchList = createAsyncThunk('list/userList', async username => {
	const request = await axios.get(`${listBaseURL}/user/${username}`);
	const response = await request.data;
	return response;
});

// * Add book from list
export const addBookToList = createAsyncThunk(
	'/list/addBook',
	async ({ listId, bookId }) => {
		const request = await axios.patch(`${listBaseURL}/${listId}`, {
			bookId,
		});
		const response = await request.data;
		return response;
	}
);

// * Remove book from list
export const removeListBook = createAsyncThunk(
	'/list/removeBook',
	async ({ listId, bookId }) => {
		const request = await axios.patch(`${listBaseURL}/remove/${listId}`, {
			bookId,
		});
		const response = await request.data;
		return response;
	}
);

const listSlice = createSlice({
	name: 'list',
	initialState,
	extraReducers: builder => {
		builder
			.addMatcher(
				action => {
					return (
						action.type === fetchList.pending.type ||
						action.type === addBookToList.pending.type ||
						action.type === removeListBook.pending.type
					);
				},
				state => {
					state.loading = true;
					state.error = '';
				}
			)
			.addMatcher(
				action => {
					return (
						action.type === fetchList.fulfilled.type ||
						action.type === addBookToList.fulfilled.type ||
						action.type === removeListBook.fulfilled.type
					);
				},
				(state, action) => {
					state.loading = false;
					state.listInfo = action.payload;
					state.error = '';
				}
			)
			.addMatcher(
				action => {
					return (
						action.type === fetchList.rejected.type ||
						action.type === addBookToList.rejected.type ||
						action.type === removeListBook.rejected.type
					);
				},
				(state, action) => {
					state.loading = false;
					state.listInfo = {};
					state.error = action.error.message;
					console.log(action.error.message);
				}
			);
	},
});

export default listSlice.reducer;
