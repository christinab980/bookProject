import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("favorites", async() => {
    let dbCall = await fetch('/api/account');
    let data = dbCall.json();
    console.log(data);
    return data;
})

const setList = (list) => {
    const _list = [...new Set(list)].filter(x => x.length > 0 )
    return _list
}

export const favesSlice = createSlice({
    name: "favorites",
    initialState: [],
    reducers: {
        setFavorite(state, action) {
            const value = setList([...state, ...action.payload])
            return value
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const favorites = state => state.favorites;

export const { setFavorite } = favesSlice.actions;

export default favesSlice.reducer;