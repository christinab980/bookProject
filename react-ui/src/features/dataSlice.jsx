import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchData = createAsyncThunk("book", async() => {
        let category = "e-book-fiction";
        let apiKey = "eiXQ9V4I2rAf8ZwUbsSDCskl2h4PyvOl";
        
        let url = `https://api.nytimes.com/svc/books/v3/lists/current/${category}.json?api-key=${apiKey}`
        const response = await fetch(url)
        const data = await response.json()        
        return data

})

export const bookSlice = createSlice({
    name: "bookData",
    initialState: [],
    extraReducers(builder) {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const selectBookData = state => state.bookData;

export default bookSlice.reducer; 