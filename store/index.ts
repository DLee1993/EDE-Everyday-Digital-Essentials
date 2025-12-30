// /state/store.ts

import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import focusTimerReducer from "@/store/slices/focus-timer-slice";

// ---------------------------------------------
// Persisted State Helper
// ---------------------------------------------

function persist<T>(key: string, data: T) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (err) {
        console.warn(`Error writing localStorage key "${key}":`, err);
    }
}

// ---------------------------------------------
// STORE
// ---------------------------------------------
export const store = configureStore({
    reducer: {
        focusTimer: focusTimerReducer,
    },
});

store.subscribe(() => {
    if (typeof window === "undefined") return;

    const { sessionMinutes, breakMinutes, selectedPreset, sessionPresets, alarm, sound } =
        store.getState().focusTimer;

    persist("focusTimerConfig", {
        sessionMinutes,
        breakMinutes,
        selectedPreset,
        sessionPresets,
        alarm,
        sound,
    });
});

// ---------------------------------------------
// TYPES
// ---------------------------------------------
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// ---------------------------------------------
// TYPED HOOKS (INLINE)
// ---------------------------------------------
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
