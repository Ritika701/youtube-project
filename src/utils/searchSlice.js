import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {},
    reducers: {
        cacheResults: (state, action) => {
            // state = { ...action.payload, ...state}; //not working. why ? hw - make it work (do it in es6 way)
            state = Object.assign(state, action.payload);
        }
    }
})

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;