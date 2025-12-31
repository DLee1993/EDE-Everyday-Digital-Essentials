import { formatTime } from "@/lib/focus-timer/formatTime";
import { useAppSelector } from "@/store";
import { useEffect, useRef, useCallback } from "react";
import { toast } from "sonner";

interface UseAlarmControllerProps {
    title: React.ReactNode;
    breakText: React.ReactNode;
    remainingTime: number;
    remainingBreakTime: number;
    isBreak: boolean;
    alarm: boolean;
    sound: boolean;
    onEndBreak: () => void;
    onReset: () => void;
}

export function useAlarmController({
    title,
    breakText,
    remainingTime,
    isBreak,
    alarm,
    sound,
    onEndBreak,
    onReset,
}: UseAlarmControllerProps) {
    const prev = useRef(remainingTime);
    const toastIdRef = useRef<string | number | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // ------------------------------------------
    // LIVE UPDATE NEEDED FOR TIMER COUNTDOWN
    // ------------------------------------------

    function LiveBreakTime() {
        const remaining = useAppSelector((state) => state.focusTimer.remainingBreakTime);

        return <span className="text-base font-semibold">{formatTime(remaining)}</span>;
    }

    // -----------------------------
    // SOUND ENGINE (looping)
    // -----------------------------
    const playLoopingSound = useCallback(() => {
        if (!audioRef.current) {
            const audio = new Audio("/sound/alarm.mp3");
            audio.loop = true;
            audio.volume = 1;
            audioRef.current = audio;
        }
        audioRef.current.play().catch(() => {});
    }, []);

    const stopLoopingSound = useCallback(() => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.pause();
        audio.currentTime = 0;
    }, []);

    // -----------------------------
    // SOUND-ONLY MODE (5 seconds)
    // -----------------------------
    const playSoundOnly = useCallback(() => {
        const audio = new Audio("/sound/alarm.mp3");
        audio.loop = true;
        audio.play().catch(() => {});

        setTimeout(() => {
            audio.pause();
            audio.currentTime = 0;
        }, 5000);
    }, []);

    // -----------------------------
    // BREAK TOAST (Unified UI)
    // -----------------------------

    const showBreakToast = useCallback(() => {
        if (sound) playLoopingSound();

        toastIdRef.current = toast(title, {
            description: (
                <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                    <span className="text-xs opacity-80">{breakText}</span>
                    {<LiveBreakTime />}
                </div>
            ),
            duration: Infinity,
            closeButton: true,

            action: {
                label: "End Break",
                onClick: () => {
                    stopLoopingSound();
                    onEndBreak();
                    toast.dismiss(toastIdRef.current!);
                },
            },

            onDismiss: () => {
                stopLoopingSound();
                onEndBreak();
            },
        });
    }, [sound, playLoopingSound, stopLoopingSound, onEndBreak, title, breakText]);

    // -----------------------------
    // MAIN ALARM LOGIC
    // -----------------------------
    useEffect(() => {
        const hitZeroNow = remainingTime === 0 && prev.current !== 0;

        if (!hitZeroNow) {
            prev.current = remainingTime;
            return;
        }

        const soundOnly = !alarm && sound;
        const noAlert = !alarm && !sound;

        // 1. FULL BREAK MODE (alarm = true)
        if (alarm) {
            showBreakToast();
            prev.current = remainingTime;
            return;
        }

        // 2. SOUND-ONLY MODE
        if (soundOnly) {
            playSoundOnly();
            onReset();
            prev.current = remainingTime;
            return;
        }

        // 3. NO ALERT MODE
        if (noAlert) {
            onReset();
            prev.current = remainingTime;
            return;
        }
    }, [remainingTime, alarm, sound, onReset, playSoundOnly, showBreakToast]);

    // -----------------------------
    // AUTO-DISMISS TOAST WHEN BREAK ENDS
    // -----------------------------
    useEffect(() => {
        if (!isBreak && toastIdRef.current) {
            toast.dismiss(toastIdRef.current);
            stopLoopingSound();
            toastIdRef.current = null;
        }
    }, [isBreak, stopLoopingSound]);
}
