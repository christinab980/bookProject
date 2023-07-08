import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/dataSlice";
import usernameSlice from "../features/usernameSlice";
import favoritesSlice from "../features/favoritesSlice";

export default configureStore({
    reducer: {
        bookData: bookReducer,
        username: usernameSlice,
        favorites: favoritesSlice
    }
})