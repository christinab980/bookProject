import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const isLoggedIn = createSlice({
    name: "Read",
    initialState: [],
    reducers: {
        setHaveRead(state, action) {
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

export const  setIsLoggedIn  = isLog.actions;

export default haveReadSlice.reducer;