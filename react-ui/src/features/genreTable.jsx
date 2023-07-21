import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("haveRead", async() => {
    let dbCall = await fetch('/account');
    let data = dbCall.json();
    console.log(data);
    return data;
})

const setList = (list) => {
    const _list = [...new Set(list)].filter(x => x.length > 0 )
    return _list
}

export const genreTableSlice = createSlice({
    name: "Genres",
    initialState: [],
    reducers: {
        setGenreRecommendations(state, action) {
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

export const genres = state => state.Genres;

export const { setGenreRecommendations } = genreTableSlice.actions;

export default genreTableSlice.reducer;