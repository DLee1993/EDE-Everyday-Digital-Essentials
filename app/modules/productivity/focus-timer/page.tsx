/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect, useCallback } from "react";
import usePersistentState from "@/lib/global/usePersistentState";

import Timer from "@/components/focus-timer/timer";
import Options from "@/components/focus-timer/options";
import Alarm from "@/components/focus-timer/alarm";
import { Button } from "@/components/ui/button";
import { Pause, Play, RotateCcw } from "lucide-react";

export default function FocusTimer() {
    const [time, setTime] = usePersistentState<number>("time", 300);
    const [breakTime, setBreakTime] = usePersistentState<number>("break", 300);
    const [alarm, setAlarm] = usePersistentState<boolean>("alarm", false);
    const [sound, setSound] = usePersistentState<boolean>("sound", false);

    const [remainingTime, setRemainingTime] = useState(time);
    const [isRunning, setIsRunning] = useState(false);
    const [isBreak, setIsBreak] = useState(false);
    const [remainingBreakTime, setRemainingBreakTime] = useState(breakTime);

    const toggleAlarm = () => setAlarm(!alarm);
    const toggleSound = () => setSound(!sound);

    const startTimer = () => {
        setIsRunning(true);
        setIsBreak(false);
    };

    const pauseTimer = () => {
        setIsRunning(false);
    };

    const resetTimer = () => {
        setRemainingTime(time);
        setIsRunning(false);
        setIsBreak(false);
    };

    const calculateTime = (newTime: number) => {
        const time = newTime * 60;
        setIsRunning(false);
        setTime(time);
        localStorage.setItem("time", JSON.stringify(time));
        setRemainingTime(time);
    };

    const handleBreakTimeClick = (time: number) => {
        const breakTime = time * 60;

        localStorage.setItem("break", JSON.stringify(breakTime));
        setBreakTime(breakTime);
    };

    const cancelBreak = useCallback(() => {
        setRemainingTime(time);
        setIsBreak(false);

        setTimeout(() => {
            setRemainingBreakTime(breakTime);
        }, 1000);
    }, [time, breakTime]);

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;

        if (isRunning) {
            timer = setInterval(() => {
                setRemainingTime((prevTime) => {
                    if (prevTime <= 1) {
                        clearInterval(timer);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
            console.log("Timer started");
        }

        return () => clearInterval(timer);
    }, [isRunning]);

    useEffect(() => {
        if (remainingTime === 0 && isRunning) {
            setIsRunning(false);
            setRemainingTime(time);
            setIsBreak(true);
        }
    }, [remainingTime, isRunning, time]);

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;

        if (alarm && isBreak) {
            timer = setInterval(() => {
                setRemainingBreakTime((prevTime) => {
                    if (prevTime <= 1) {
                        clearInterval(timer);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [isBreak, alarm]);

    useEffect(() => {
        if (alarm) {
            if (remainingBreakTime === 0 && isBreak) {
                cancelBreak();
            }
        }
    }, [alarm, remainingBreakTime, isBreak, cancelBreak]);

    return (
        <section className="max-w-lg">
            <section className="w-full space-y-2.5">
                <Timer remaining={remainingTime} />
                <div className="h-px bg-border w-full"></div>
                <div className="flex flex-wrap gap-2">
                    <Button
                        variant="secondary"
                        onClick={startTimer}
                        disabled={isRunning}
                        className="flex-1 rounded-sm"
                    >
                        <span>Start</span>
                        <Play size={15} />
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={pauseTimer}
                        disabled={!isRunning}
                        className="flex-1 rounded-sm"
                    >
                        <span>Pause</span>
                        <Pause size={15} />
                    </Button>
                    <Button variant="secondary" onClick={resetTimer} className="flex-1 rounded-sm">
                        <span>Restart</span>
                        <RotateCcw size={15} />
                    </Button>
                    <Options
                        alarm={alarm}
                        toggleAlarm={toggleAlarm}
                        sound={sound}
                        toggleSound={toggleSound}
                        calculateTime={calculateTime}
                        handleBreakTimeClick={handleBreakTimeClick}
                        breakTime={breakTime}
                        time={time}
                        start={startTimer}
                        pause={pauseTimer}
                        reset={resetTimer}
                        running={isRunning}
                    />
                </div>
                <Alarm
                    isBreak={isBreak}
                    breakTime={remainingBreakTime}
                    cancelBreak={cancelBreak}
                    sound={sound}
                    alarm={alarm}
                />
            </section>
        </section>
    );
}
