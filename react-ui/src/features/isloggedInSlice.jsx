import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const doLogin = async(username, password) => {
    const options = {
        body: JSON.stringify({username, password}),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST'
    };

const response = await fetch ('/api/signin', options);
const data = await response.json();
return await data;
};

export const verifyAuth = createAsyncThunk('/api/signin', async ({username, password}) => {
    if(username && password) {
        const response = await doLogin(username, password);
        const { isSuccess } = response
        console.log("this one", response)
        return isSuccess
    } else return false 
})

export const isLoggedInSlice = createSlice({
    name: "isLoggedIn",
    initialState: false,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(verifyAuth.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const setIsLoggedIn  = isLoggedInSlice.actions;

export const selectIsLoggedIn = state => state.isLoggedIn

export default isLoggedInSlice.reducer;