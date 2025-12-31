import { useCallback, useRef } from "react";
import { toast } from "sonner";

export interface AlarmToastOptions {
    title: React.ReactNode;
    description?: React.ReactNode;
    actionLabel: string;
    onAction: () => void;
    soundEnabled?: boolean;
}

function useAlarmSound() {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const play = useCallback(() => {
        if (!audioRef.current) {
            const audio = new Audio("/sound/alarm.mp3");
            audio.loop = true; // ← loop for entire break
            audio.volume = 1;
            audioRef.current = audio;
        }

        audioRef.current.play().catch(() => {});
    }, []);

    const stop = useCallback(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    }, []);

    return { play, stop };
}

export function useAlarmToast() {
    const { play, stop } = useAlarmSound();

    return function triggerAlarmToast({
        title,
        description,
        actionLabel,
        onAction,
        soundEnabled = false,
    }: AlarmToastOptions) {
        if (soundEnabled) play();

        const id = toast(title, {
            description,
            duration: Infinity,
            closeButton: true,
            action: {
                label: actionLabel,
                onClick: () => {
                    onAction();
                    toast.dismiss(id);
                },
            },

            onDismiss: () => {
                stop();
                onAction();
            },
        });

        return id;
    };
}
