import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("favorites", async() => {
    let dbCall = await fetch('/account');
    let data = dbCall.json();
    console.log(data);
    return data;
})

export const favesSlice = createSlice({
    name: "favorites",
    initialState: [],
    extraReducers(builder) {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const favesData = state => state.favorites;

export default favesSlice.reducer;