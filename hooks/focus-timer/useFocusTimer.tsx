/* eslint-disable react-hooks/set-state-in-effect */

import { useCallback, useEffect, useRef, useState } from "react";
import usePersistentState from "@/hooks/global/usePersistentState";

export function useFocusTimer() {
    //
    // ────────────────────────────────────────────────────────────────
    //  PERSISTENT SETTINGS
    // ────────────────────────────────────────────────────────────────
    //

    const [time, setTime] = usePersistentState<number>("time", 300);
    const [breakTime, setBreakTime] = usePersistentState<number>("break", 300);
    const [alarm, setAlarm] = usePersistentState<boolean>("alarm", false);
    const [sound, setSound] = usePersistentState<boolean>("sound", false);

    //
    // ────────────────────────────────────────────────────────────────
    //  SESSION PRESETS (REPLACES short/medium/long)
    // ────────────────────────────────────────────────────────────────
    //

    const [sessionPresets, setSessionPresets] = usePersistentState("sessionPresets", [
        { label: "Short", value: 1 },
        { label: "Medium", value: 5 },
        { label: "Long", value: 30 },
    ]);

    const [selectedPreset, setSelectedPreset] = usePersistentState("selectedPreset", 5);

    // Ensure selectedPreset always matches an existing preset
    useEffect(() => {
        const exists = sessionPresets.some((p) => p.value === selectedPreset);
        if (!exists) {
            setSelectedPreset(sessionPresets[0].value);
        }
    }, [sessionPresets, selectedPreset, setSelectedPreset]);

    //
    // ────────────────────────────────────────────────────────────────
    //  RUNTIME STATE
    // ────────────────────────────────────────────────────────────────
    //

    const [remainingTime, setRemainingTime] = useState(time);
    const [remainingBreakTime, setRemainingBreakTime] = useState(breakTime);
    const [isRunning, setIsRunning] = useState(false);
    const [isBreak, setIsBreak] = useState(false);

    //
    // ────────────────────────────────────────────────────────────────
    //  ACTIONS
    // ────────────────────────────────────────────────────────────────
    //

    const toggleAlarm = () => setAlarm((prev) => !prev);
    const toggleSound = () => setSound((prev) => !prev);

    const start = () => {
        setIsRunning(true);
        setIsBreak(false);
    };

    const pause = () => setIsRunning(false);

    const reset = () => {
        setRemainingTime(time);
        setRemainingBreakTime(breakTime);
        setIsRunning(false);
        setIsBreak(false);
    };

    const setSessionMinutes = (minutes: number) => {
        const seconds = minutes * 60;
        setTime(seconds);
        setRemainingTime(seconds);
        setIsRunning(false);
    };

    const setBreakMinutes = (minutes: number) => {
        const seconds = minutes * 60;
        setBreakTime(seconds);
        setRemainingBreakTime(seconds);
    };

    const cancelBreak = useCallback(() => {
        setRemainingTime(time);
        setIsBreak(false);

        setTimeout(() => {
            setRemainingBreakTime(breakTime);
        }, 1000);
    }, [time, breakTime]);

    //
    // ────────────────────────────────────────────────────────────────
    //  ALARM SOUND LOOP
    // ────────────────────────────────────────────────────────────────
    //

    const loopCountRef = useRef(0);
    const [replaySound, setReplaySound] = useState(0);
    const shouldPlaySound = sound && isBreak;

    const handleAlarmEnded = useCallback(() => {
        loopCountRef.current += 1;

        if (loopCountRef.current < 3) {
            setReplaySound((prev) => prev + 1);
        } else {
            setReplaySound(0);
            if (!alarm) cancelBreak();
        }
    }, [alarm, cancelBreak]);

    //
    // ────────────────────────────────────────────────────────────────
    //  PRESET LOGIC (THIS FIXES YOUR ISSUE)
    // ────────────────────────────────────────────────────────────────
    //

    const selectPreset = (minutes: number) => {
        setSelectedPreset(minutes);
        setSessionMinutes(minutes);
    };

    const updatePreset = (label: string, minutes: number) => {
        setSessionPresets((prev) =>
            prev.map((p) => {
                if (p.label === label) {
                    const oldValue = p.value;

                    // If editing the active preset → update timer
                    if (oldValue === selectedPreset) {
                        setSelectedPreset(minutes);
                        setSessionMinutes(minutes);
                    }

                    return { ...p, value: minutes };
                }
                return p;
            })
        );
    };

    //
    // ────────────────────────────────────────────────────────────────
    //  TIMERS
    // ────────────────────────────────────────────────────────────────
    //

    // Work timer
    useEffect(() => {
        if (!isRunning || isBreak) return;

        const timer = setInterval(() => {
            setRemainingTime((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [isRunning, isBreak]);

    // Transition to break
    useEffect(() => {
        if (remainingTime === 0 && isRunning) {
            setIsRunning(false);
            setIsBreak(true);
            setRemainingBreakTime(breakTime);
        }
    }, [remainingTime, isRunning, breakTime]);

    // Break timer
    useEffect(() => {
        if (!alarm || !isBreak) return;

        const timer = setInterval(() => {
            setRemainingBreakTime((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [alarm, isBreak]);

    // Auto-cancel break
    useEffect(() => {
        if (!alarm) return;
        if (remainingBreakTime === 0 && isBreak) {
            cancelBreak();
        }
    }, [alarm, remainingBreakTime, isBreak, cancelBreak]);

    //
    // ────────────────────────────────────────────────────────────────
    //  EXPORT
    // ────────────────────────────────────────────────────────────────
    //

    return {
        time,
        breakTime,
        alarm,
        sound,
        remainingTime,
        remainingBreakTime,
        isRunning,
        isBreak,
        shouldPlaySound,
        replaySound,

        start,
        pause,
        reset,
        setSessionMinutes,
        setBreakMinutes,
        toggleAlarm,
        toggleSound,
        cancelBreak,
        handleAlarmEnded,

        sessionPresets,
        selectedPreset,
        selectPreset,
        updatePreset,
    };
}
