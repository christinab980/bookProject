import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("haveRead", async() => {
    let dbCall = await fetch('/account');
    let data = dbCall.json();
    console.log(data);
    return data;
})

export const haveReadSlice = createSlice({
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

export const { setHaveRead } = haveReadSlice.actions;

export default haveReadSlice.reducer;