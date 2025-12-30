"use client";

import Timer from "@/components/focus-timer/timer";
import Options from "@/components/focus-timer/options";
import { Button } from "@/components/ui/button";
import { Pause, Play, RotateCcw } from "lucide-react";
import { useFocusTimerState } from "@/hooks/focus-timer/useFocusTimer";

export default function FocusTimer() {
    const {
        time,
        breakTime,
        alarm,
        sound,
        remainingTime,
        isRunning,

        sessionPresets,
        selectedPreset,

        actions,
    } = useFocusTimerState();

    return (
        <section className="max-w-lg">
            <section className="w-full space-y-2.5">
                <Timer remaining={remainingTime} />

                <div className="h-px bg-border w-full" />

                <div className="flex flex-wrap gap-2">
                    <Button
                        variant="secondary"
                        onClick={actions.start}
                        disabled={isRunning}
                        className="flex-1 rounded-sm"
                    >
                        <span>Start</span>
                        <Play size={15} />
                    </Button>

                    <Button
                        variant="secondary"
                        onClick={actions.pause}
                        disabled={!isRunning}
                        className="flex-1 rounded-sm"
                    >
                        <span>Pause</span>
                        <Pause size={15} />
                    </Button>

                    <Button
                        variant="secondary"
                        onClick={actions.reset}
                        className="flex-1 rounded-sm"
                    >
                        <span>Restart</span>
                        <RotateCcw size={15} />
                    </Button>

                    <Options
                        alarm={alarm}
                        toggleAlarm={actions.toggleAlarm}
                        sound={sound}
                        toggleSound={actions.toggleSound}
                        breakTime={breakTime}
                        time={time}
                        sessionPresets={sessionPresets}
                        selectedPreset={selectedPreset}
                        selectPreset={actions.selectPreset}
                        updatePreset={actions.updatePreset}
                        setBreakMinutes={actions.setBreakMinutes}
                    />
                </div>
            </section>
        </section>
    );
}
