import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userBaseURL } from '../utils/baseUrl';

const initialState = {
	loading: false,
	userInfo: {},
	error: '',
};

// * Login User
export const loginUser = createAsyncThunk(
	'user/loginUser',
	async userCredentials => {
		const request = await axios.post(
			`${userBaseURL}/login`,
			userCredentials
		);
		const response = await request.data;
		return response;
	}
);

// * Logout User
export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
	axios.get(`${userBaseURL}/logout`);
});

// * Register User
export const registerUser = createAsyncThunk(
	'user/registerUser',
	async userDetails => {
		const request = await axios.post(
			`${userBaseURL}/register`,
			userDetails
		);
		const response = await request.data;

		return response;
	}
);

// * Authenticate/ restore logged In user
export const authenticateUser = createAsyncThunk(
	'user/authentication',
	async userId => {
		const request = await axios.get(`${userBaseURL}/${userId}`);
		const response = await request.data;
		return response;
	}
);

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
						action.type === authenticateUser.pending.type ||
						action.type === registerUser.pending.type
					);
				},
				state => {
					state.loading = true;
				}
			)
			.addMatcher(
				action => {
					return (
						action.type === loginUser.fulfilled.type ||
						action.type === authenticateUser.fulfilled.type ||
						action.type === registerUser.fulfilled.type
					);
				},
				(state, action) => {
					state.loading = false;
					state.userInfo = action.payload;
				}
			)
			.addMatcher(
				action => action.type === logoutUser.fulfilled.type,
				state => {
					state.loading = false;
					state.userInfo = {};
				}
			)
			.addMatcher(
				action => {
					return (
						action.type === loginUser.rejected.type ||
						action.type === logoutUser.rejected.type ||
						action.type === authenticateUser.rejected.type ||
						action.type === registerUser.rejected.type
					);
				},
				(state, action) => {
					state.loading = false;
					state.userInfo = null;
					state.error = action.error.message;
					console.log(action.error.message);
				}
			);
	},
});

export default userSlice.reducer;
