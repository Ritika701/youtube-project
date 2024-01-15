import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        toggle: true
    },
    reducers: {
        toggleState: (state) => {
            state.toggle = !state.toggle
        },
        hideMenu: (state) => {
            state.toggle = false;
        } 
    }
});

export const { toggleState, hideMenu} = appSlice.actions;
export default appSlice.reducer;
