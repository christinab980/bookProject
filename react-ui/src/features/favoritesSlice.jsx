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
    reducers: {
        setFavorite(state, action) {
            console.log("hello", action.payload)
            const value = action.payload
            return [...state, value]
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const { setFavorite } = favesSlice.actions;

export default favesSlice.reducer;