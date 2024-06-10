import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice";
import bookReducer from "../reducers/bookSlice";
import listReducer from "../reducers/listSlice";
import reviewReducer from '../reducers/reviewSlice';

export const store = configureStore({
  reducer: {
    session: userReducer,
    book: bookReducer,
    list: listReducer,
    review: reviewReducer,                                  
  },

});
