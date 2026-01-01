import { rehydrateSlice } from "@/store/rehydrate-slice";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SessionPreset {
    label: string;
    value: number; // minutes
}

export interface FocusTimerState {
    // Persisted state
    sessionMinutes: number;
    breakMinutes: number;

    // User-configurable settings
    time: number;
    breakTime: number;
    alarm: boolean;
    sound: boolean;

    sessionPresets: SessionPreset[];
    selectedPreset: number;

    // Runtime state
    remainingTime: number;
    remainingBreakTime: number;
    isRunning: boolean;
    isBreak: boolean;
}

const persisted = rehydrateSlice("focusTimerConfig", {
    sessionMinutes: 5,
    breakMinutes: 5,
    alarm: false,
    sound: false,
    sessionPresets: [
        { label: "Short", value: 1 },
        { label: "Medium", value: 5 },
        { label: "Long", value: 30 },
    ],
    selectedPreset: 5,
});

const initialState: FocusTimerState = {
    sessionMinutes: persisted.sessionMinutes,
    breakMinutes: persisted.breakMinutes,

    time: Math.round(persisted.sessionMinutes * 60),
    breakTime: Math.round(persisted.breakMinutes * 60),

    alarm: persisted.alarm,
    sound: persisted.sound,

    sessionPresets: persisted.sessionPresets,
    selectedPreset: persisted.selectedPreset,

    remainingTime: Math.round(persisted.sessionMinutes * 60),
    remainingBreakTime: Math.round(persisted.breakMinutes * 60),

    isRunning: false,
    isBreak: false,
};

export const focusTimerSlice = createSlice({
    name: "focusTimer",
    initialState,
    reducers: {
        // -------------------------
        // BASIC CONTROLS
        // -------------------------
        start(state) {
            state.isRunning = true;
            state.isBreak = false;
        },

        pause(state) {
            state.isRunning = false;
        },

        reset(state) {
            state.remainingTime = state.time;
            state.remainingBreakTime = state.breakTime;
            state.isRunning = false;
            state.isBreak = false;
        },

        // -------------------------
        // SESSION LENGTH CONTROLS
        // -------------------------
        setSessionMinutes(state, action: PayloadAction<number>) {
            const minutes = action.payload;

            state.sessionMinutes = minutes; // persistable config
            state.selectedPreset = minutes; // match preset selection

            const seconds = Math.max(1, Math.round(minutes * 60));

            state.time = seconds;
            state.remainingTime = seconds;
            state.isRunning = false;
        },

        setBreakMinutes(state, action: PayloadAction<number>) {
            const minutes = action.payload;

            state.breakMinutes = minutes; // persistable config

            const seconds = Math.max(1, Math.round(minutes * 60));

            state.breakTime = seconds;
            state.remainingBreakTime = seconds;
        },

        // -------------------------
        // PRESETS
        // -------------------------
        selectPreset(state, action: PayloadAction<number>) {
            const minutes = action.payload;

            state.selectedPreset = minutes;
            state.sessionMinutes = minutes;

            const seconds = Math.max(1, Math.round(minutes * 60));

            state.time = seconds;
            state.remainingTime = seconds;
            state.isRunning = false;
        },

        updatePreset(state, action: PayloadAction<{ label: string; minutes: number }>) {
            const { label, minutes } = action.payload;

            state.sessionPresets = state.sessionPresets.map((p) => {
                if (p.label === label) {
                    const updated = { ...p, value: minutes };

                    // If editing the active preset
                    if (p.value === state.selectedPreset) {
                        state.selectedPreset = minutes;
                        state.sessionMinutes = minutes;

                        const seconds = Math.max(1, Math.round(minutes * 60));
                        state.time = seconds;
                        state.remainingTime = seconds;
                        state.isRunning = false;
                    }

                    return updated;
                }
                return p;
            });
        },

        // -------------------------
        // TOGGLES
        // -------------------------
        toggleAlarm(state) {
            state.alarm = !state.alarm;
        },

        toggleSound(state) {
            state.sound = !state.sound;
        },

        // -------------------------
        // WORK TIMER TICK
        // -------------------------
        workTimer(state) {
            if (!state.isRunning || state.isBreak) return;

            if (state.remainingTime > 0) {
                state.remainingTime -= 1;
            }
        },

        // -------------------------
        // BREAK TIMER TICK
        // -------------------------
        breakTimer(state) {
            if (!state.isBreak || !state.alarm) return;

            if (state.remainingBreakTime > 0) {
                state.remainingBreakTime -= 1;
            }
        },

        // -------------------------
        // TRANSITIONS
        // -------------------------
        startBreak(state) {
            state.isRunning = false;
            state.isBreak = true;
            state.remainingBreakTime = state.breakTime;
        },

        cancelBreak(state) {
            state.isBreak = false;
            state.remainingTime = state.time;
            state.remainingBreakTime = state.breakTime;
        },
    },
});

export const {
    start,
    pause,
    reset,
    setSessionMinutes,
    setBreakMinutes,
    selectPreset,
    updatePreset,
    toggleAlarm,
    toggleSound,
    workTimer,
    breakTimer,
    startBreak,
    cancelBreak,
} = focusTimerSlice.actions;

export default focusTimerSlice.reducer;
