import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/dataSlice"

export default configureStore({
    reducer: {
        bookData: bookReducer
    }
})