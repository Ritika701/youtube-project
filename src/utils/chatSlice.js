import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        message: []
    },
    reducers: {
        addMessage: (state, action) => {
            state.message.splice(LIVE_CHAT_COUNT, 1); //restrict length to 25 & remove 1 msg from top. whenever we are adding one msg we are removing one msg. Now our app will not crash even we leave it for hours.
            state.message.push(action.payload)
        }
    }
})

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
