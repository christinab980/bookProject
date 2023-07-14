import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("haveRead", async() => {
    let dbCall = await fetch('/account');
    let data = dbCall.json();
    console.log(data);
    return data;
})

export const genreTableSlice = createSlice({
    name: "Genre-Table",
    initialState: [],
    reducers: {
        setGenreRecommendations(state, action) {
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

export const { setGenreRecommendations } = genreTableSlice.actions;

export default genreTableSlice.reducer;