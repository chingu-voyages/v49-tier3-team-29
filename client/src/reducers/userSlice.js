import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authBaseURL, userBaseURL } from '../utils/baseUrl';

const initialState = {
	loading: false,
	user: {},
	accessToken: localStorage.getItem('accessToken') || null,
	refreshToken: localStorage.getItem('refreshToken') || null,
	error: '',
};

// * Login User
export const loginUser = createAsyncThunk(
	'user/loginUser',
	async userCredentials => {
		const request = await axios.post(
			`${authBaseURL}/login`,
			userCredentials
		);
		const response = await request.data;

		return response;
	}
);

// * Logout User
export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
	const request = await axios.post(`${authBaseURL}/logout`);
	const response = await request.data;
	return response;
});
// * Register User
export const registerUser = createAsyncThunk(
	'user/registerUser',
	async userDetails => {
		const request = await axios.post(
			`${authBaseURL}/register`,
			userDetails
		);
		const response = await request.data;

		return response;
	}
);

// * Fetch user by username
export const fetchUser = createAsyncThunk('user/fetchUser', async username => {
	const request = await axios.get(`${userBaseURL}/${username}`);
	const response = await request.data;
	return response;
});

// * Refresh Token
export const refreshToken = createAsyncThunk('user/tokenRefresh', async () => {
	const refreshToken = localStorage.getItem('refreshToken');
	const response = await axios.post(`${authBaseURL}/refresh-token`, {
		token: refreshToken,
	});
	return response.data;
});

const userSlice = createSlice({
	name: 'user',
	initialState,
	extraReducers: builder => {
		builder
			.addMatcher(
				action => {
					return (
						action.type === loginUser.pending.type ||
						action.type === logoutUser.pending.type ||
						action.type === refreshToken.pending.type ||
						action.type === registerUser.pending.type
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
						action.type === loginUser.fulfilled.type ||
						action.type === refreshToken.fulfilled.type ||
						action.type === registerUser.fulfilled.type
					);
				},
				(state, action) => {
					state.loading = false;
					state.user = action.payload.user;
					state.accessToken = action.payload.accessToken;
					state.refreshToken = action.payload.refreshToken;
					state.error = '';
				}
			)
			.addMatcher(
				action => action.type === logoutUser.fulfilled.type,
				state => {
					state.loading = false;
					state.user = {};
					state.error = '';
				}
			)
			.addMatcher(
				action => {
					return (
						action.type === loginUser.rejected.type ||
						action.type === logoutUser.rejected.type ||
						action.type === refreshToken.rejected.type ||
						action.type === registerUser.rejected.type
					);
				},
				(state, action) => {
					state.loading = false;
					state.user = {};
					state.error = action.error.message;
					console.log(action.error.message);
				}
			);
	},
});

export default userSlice.reducer;
