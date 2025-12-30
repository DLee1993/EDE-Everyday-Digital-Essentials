
// useFocusTimer.ts
import { useEffect, useRef, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
    start,
    pause,
    reset,
    setBreakMinutes,
    setSessionMinutes,
    toggleAlarm,
    toggleSound,
    selectPreset,
    updatePreset,
    workTimer,
    breakTimer,
    startBreak,
    cancelBreak,
    closeAlarm,
} from "@/store/slices/focus-timer-slice";
import { useAppSelector } from "@/store";

// ---------------------------------------------------------
// 1. PURE STATE + ACTIONS + SOUND LOGIC (SAFE ANYWHERE)
// ---------------------------------------------------------
export function useFocusTimerState() {
    const dispatch = useDispatch();
    const state = useAppSelector((state) => state.focusTimer);

    // -----------------------------
    // LOCAL UI-ONLY SOUND LOGIC
    // -----------------------------
    const loopCountRef = useRef(0);
    const [replaySound, setReplaySound] = useState(0);
    const shouldPlaySound = state.sound && state.isBreak;

    const handleAlarmEnded = useCallback(() => {
        loopCountRef.current += 1;

        if (loopCountRef.current < 3) {
            setReplaySound((prev) => prev + 1);
        } else {
            setReplaySound(0);

            if (!state.alarm) {
                dispatch(cancelBreak());
            }

            dispatch(closeAlarm());
        }
    }, [state.alarm, dispatch]);

    // -----------------------------
    // ACTIONS OBJECT (EDE STYLE)
    // -----------------------------
    const actions = {
        start: () => dispatch(start()),
        pause: () => dispatch(pause()),
        reset: () => dispatch(reset()),

        setSessionMinutes: (m: number) => dispatch(setSessionMinutes(m)),
        setBreakMinutes: (m: number) => dispatch(setBreakMinutes(m)),

        selectPreset: (m: number) => dispatch(selectPreset(m)),
        updatePreset: (label: string, minutes: number) =>
            dispatch(updatePreset({ label, minutes })),

        toggleAlarm: () => dispatch(toggleAlarm()),
        toggleSound: () => dispatch(toggleSound()),

        cancelBreak: () => dispatch(cancelBreak()),
    };

    return {
        ...state,
        shouldPlaySound,
        replaySound,
        handleAlarmEnded,
        actions,
    };
}

// ---------------------------------------------------------
// 2. INTERVAL ENGINE (CALL ONLY ONCE IN PAGE)
// ---------------------------------------------------------
export function useFocusTimerEngine() {
    const dispatch = useDispatch();
    const { isRunning, isBreak, alarm, remainingTime, remainingBreakTime } = useAppSelector(
        (state) => state.focusTimer
    );

    // -----------------------------
    // WORK INTERVAL
    // -----------------------------
    useEffect(() => {
        if (!isRunning || isBreak) return;

        const id = setInterval(() => {
            dispatch(workTimer());
        }, 1000);

        return () => clearInterval(id);
    }, [isRunning, isBreak, dispatch]);

    // -----------------------------
    // BREAK INTERVAL
    // -----------------------------
    useEffect(() => {
        if (!isBreak || !alarm) return;

        const id = setInterval(() => {
            dispatch(breakTimer());
        }, 1000);

        return () => clearInterval(id);
    }, [isBreak, alarm, dispatch]);

    // -----------------------------
    // TRANSITION TO BREAK
    // -----------------------------
    useEffect(() => {
        if (remainingTime === 0 && isRunning) {
            dispatch(startBreak());
        }
    }, [remainingTime, isRunning, dispatch]);

    // -----------------------------
    // AUTO-CANCEL BREAK
    // -----------------------------
    useEffect(() => {
        if (alarm && remainingBreakTime === 0 && isBreak) {
            dispatch(cancelBreak());
        }
    }, [alarm, remainingBreakTime, isBreak, dispatch]);
}
