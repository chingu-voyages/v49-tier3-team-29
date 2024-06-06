import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice";
import bookReducer from "../reducers/bookSlice";
import listSlice from "../reducers/listSlice";

export const store = configureStore({
  reducer: {
    session: userReducer,
    book: bookReducer,
    list: listSlice,
  },
});
