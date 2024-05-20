import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../components/userSlice';
import bookReducer from '../components/bookSlice';

export const store = configureStore({
	reducer: {
		session: userReducer,
		book: bookReducer,
	},
});
