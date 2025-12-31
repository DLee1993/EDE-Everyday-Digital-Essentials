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
            audio.loop = true;
            audio.volume = 1;
            audioRef.current = audio;
        }

        audioRef.current.play().catch(() => {});
    }, []);

    const stop = useCallback(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.pause();
        audio.currentTime = 0;
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
                    stop();
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
