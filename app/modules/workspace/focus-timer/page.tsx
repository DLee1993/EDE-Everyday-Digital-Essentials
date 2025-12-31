"use client";

import { useFocusTimerState } from "@/hooks/focus-timer/useFocusTimer";
import Timer from "@/components/focus-timer/timer";
import Options from "@/components/focus-timer/options";
import { Button } from "@/components/ui/button";
import { Pause, Play, RotateCcw } from "lucide-react";
import { useEffect, useRef } from "react";
import { useAlarmToast } from "@/hooks/global/use-alarm";
import { toast } from "sonner";
import { AlarmToastContent } from "@/components/global/AlarmToastContent";

export default function FocusTimer() {
    const triggerAlarmToast = useAlarmToast();

    const {
        time,
        breakTime,
        alarm,
        sound,
        remainingTime,
        isRunning,
        isBreak,
        sessionPresets,
        selectedPreset,
        actions,
    } = useFocusTimerState();

    const prev = useRef(remainingTime);
    const toastIdRef = useRef<string | number | null>(null);

    // -----------------------------------------------------
    // 1. Trigger toast when focus session hits zero
    // -----------------------------------------------------
    useEffect(() => {
        const hitZeroNow = remainingTime === 0 && prev.current !== 0;

        if (hitZeroNow && alarm) {
            toastIdRef.current = triggerAlarmToast({
                title: (
                    <span className="font-semibold text-foreground">Focus Session Complete!</span>
                ),
                description: <AlarmToastContent />,
                actionLabel: "End Break",
                onAction: () => actions.cancelBreak(),
                soundEnabled: sound,
            });
        }

        prev.current = remainingTime;
    }, [remainingTime, alarm, sound, triggerAlarmToast, actions]);

    // -----------------------------------------------------
    // 2. Auto-close toast when break ends
    // -----------------------------------------------------
    useEffect(() => {
        if (!isBreak && toastIdRef.current) {
            toast.dismiss(toastIdRef.current);
            toastIdRef.current = null;
        }
    }, [isBreak]);

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
