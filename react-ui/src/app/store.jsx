import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/dataSlice";
import usernameSlice from "../features/usernameSlice";

export default configureStore({
    reducer: {
        bookData: bookReducer,
        username: usernameSlice
    }
})