import { configureStore } from "@reduxjs/toolkit";
import focusTimerReducer from "./slices/focus-timer-slice";

export const store = configureStore({
    reducer: {
        focusTimer: focusTimerReducer,
    },
});
