import { createSlice } from "@reduxjs/toolkit";

export const usernameSlice = createSlice({
    name: "username",
    initialState: " ",
    reducers: {
        addUsernameToStore(state, action) {
            return action.payload;
        }
    }
})

export const username = state => state.username;

export default usernameSlice.reducer;

export const { addUsernameToStore } = usernameSlice.actions;