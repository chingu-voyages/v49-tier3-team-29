import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userSlice';
import bookReducer from '../reducers/bookSlice';
import reviewReducer from '../reducers/reviewSlice';

export const store = configureStore({
	reducer: {
		session: userReducer,
		book: bookReducer,
		review: reviewReducer,
	},
});
