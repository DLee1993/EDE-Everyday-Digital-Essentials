"use client";

import Timer from "@/components/focus-timer/timer";
import Options from "@/components/focus-timer/options";
import Alarm from "@/components/focus-timer/alarm";
import { Button } from "@/components/ui/button";
import { Pause, Play, RotateCcw } from "lucide-react";
import { useFocusTimer } from "@/hooks/focus-timer/useFocusTimer";

export default function FocusTimer() {
    const {
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
        setBreakMinutes,
        toggleAlarm,
        toggleSound,
        cancelBreak,
        handleAlarmEnded,

        sessionPresets,
        selectedPreset,
        selectPreset,
        updatePreset,
    } = useFocusTimer();

    return (
        <section className="max-w-lg">
            <section className="w-full space-y-2.5">
                <Timer remaining={remainingTime} />
                <div className="h-px bg-border w-full" />
                <div className="flex flex-wrap gap-2">
                    <Button
                        variant="secondary"
                        onClick={start}
                        disabled={isRunning}
                        className="flex-1 rounded-sm"
                    >
                        <span>Start</span>
                        <Play size={15} />
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={pause}
                        disabled={!isRunning}
                        className="flex-1 rounded-sm"
                    >
                        <span>Pause</span>
                        <Pause size={15} />
                    </Button>
                    <Button variant="secondary" onClick={reset} className="flex-1 rounded-sm">
                        <span>Restart</span>
                        <RotateCcw size={15} />
                    </Button>

                    <Options
                        alarm={alarm}
                        toggleAlarm={toggleAlarm}
                        sound={sound}
                        toggleSound={toggleSound}
                        breakTime={breakTime}
                        time={time}
                        sessionPresets={sessionPresets}
                        selectedPreset={selectedPreset}
                        selectPreset={selectPreset}
                        updatePreset={updatePreset}
                        setBreakMinutes={setBreakMinutes}
                    />
                </div>

                <Alarm
                    isBreak={isBreak}
                    breakTime={remainingBreakTime}
                    cancelBreak={cancelBreak}
                    alarm={alarm}
                    shouldPlaySound={shouldPlaySound}
                    replaySound={replaySound}
                    onAlarmEnded={handleAlarmEnded}
                />
            </section>
        </section>
    );
}
