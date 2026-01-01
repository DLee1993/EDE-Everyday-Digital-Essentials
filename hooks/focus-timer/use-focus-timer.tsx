import { useEffect } from "react";
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
} from "@/store/slices/focus-timer-slice";
import { useAppSelector } from "@/store";

// ---------------------------------------------------------
// 1. PURE STATE + ACTIONS (CLEAN + MINIMAL)
// ---------------------------------------------------------
export function useFocusTimerState() {
    const dispatch = useDispatch();
    const state = useAppSelector((state) => state.focusTimer);

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

    return { ...state, actions };
}

// ---------------------------------------------------------
// 2. INTERVAL ENGINE (RUN ONLY ONCE IN PAGE)
// ---------------------------------------------------------
export function useFocusTimerEngine() {
    const dispatch = useDispatch();
    const { isRunning, isBreak, alarm, sound, remainingTime, remainingBreakTime } = useAppSelector(
        (state) => state.focusTimer
    );

    // -----------------------------
    // WORK INTERVAL
    // -----------------------------
    useEffect(() => {
        if (!isRunning || isBreak) return;

        const id = setInterval(() => dispatch(workTimer()), 1000);
        return () => clearInterval(id);
    }, [isRunning, isBreak, dispatch]);

    // -----------------------------
    // BREAK INTERVAL
    // -----------------------------
    useEffect(() => {
        if (!isBreak) return;

        const id = setInterval(() => dispatch(breakTimer()), 1000);
        return () => clearInterval(id);
    }, [isBreak, dispatch]);

    // -----------------------------
    // TRANSITION TO BREAK OR END
    // -----------------------------
    useEffect(() => {
        const breakEnabled = alarm === true; // toast + break
        const soundOnly = alarm === false && sound; // sound only, no break

        if (remainingTime === 0 && isRunning) {
            // 1. FULL BREAK MODE (alarm = true)
            if (breakEnabled) {
                dispatch(startBreak());
                return;
            }

            // 2. SOUND-ONLY MODE (alarm = false, sound = true)
            if (soundOnly) {
                const audio = new Audio("/sound/alarm.mp3");
                audio.loop = true;
                audio.play().catch(() => {});

                // Stop after 5 seconds
                setTimeout(() => {
                    audio.pause();
                    audio.currentTime = 0;
                }, 5000);

                dispatch(reset());
                return;
            }

            // 3. NO ALERT MODE (alarm = false, sound = false)
            // or sound-only mode after playing sound
            dispatch(reset());
        }
    }, [remainingTime, isRunning, alarm, sound, dispatch]);

    // -----------------------------
    // AUTO-CANCEL BREAK
    // -----------------------------
    useEffect(() => {
        if (remainingBreakTime === 0 && isBreak) {
            dispatch(cancelBreak());
        }
    }, [remainingBreakTime, isBreak, dispatch]);
}
