import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isRunning: false,
    startTimestamp: null,
    duration: 1500, // 25 minutes
};

const focusTimerSlice = createSlice({
    name: "focusTimer",
    initialState,
    reducers: {
        startTimer(state, action) {
            state.isRunning = true;
            state.startTimestamp = action.payload.startTimestamp;
            state.duration = action.payload.duration;
        },
        stopTimer(state) {
            state.isRunning = false;
            state.startTimestamp = null;
        },
        resetTimer(state) {
            state.isRunning = false;
            state.startTimestamp = null;
            state.duration = 1500;
        },
    },
});

export const { startTimer, stopTimer, resetTimer } = focusTimerSlice.actions;
export default focusTimerSlice.reducer;
