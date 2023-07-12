import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/dataSlice";
import usernameSlice from "../features/usernameSlice";
import favoritesSlice from "../features/favoritesSlice";
import haveReadSlice from "../features/haveReadSlice"

export default configureStore({
    reducer: {
        bookData: bookReducer,
        username: usernameSlice,
        favorites: favoritesSlice,
        read: haveReadSlice
    }
})