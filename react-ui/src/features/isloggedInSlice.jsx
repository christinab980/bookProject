import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const doLogin = async(username, email, password) => {
    const options = {
        body: JSON.stringify({username, email, password}),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST'
    };

    //https://book-project-ecru.vercel.app/api/signin
const response = await fetch ('/api/signin', options);
const data = await response.json();
return await data;
};

export const verifyAuth = createAsyncThunk('/api/signin', async ({username, email, password}) => {
    if(username && email  && password) {
        const response = await doLogin(username, email, password);
        const { isAuthenticated } = response
        console.log("verifyAuth", isAuthenticated)
        return isAuthenticated
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

// export const setIsLoggedIn  = isLoggedInSlice.actions;

export const selectIsLoggedIn = state => state.isLoggedIn

export default isLoggedInSlice.reducer;