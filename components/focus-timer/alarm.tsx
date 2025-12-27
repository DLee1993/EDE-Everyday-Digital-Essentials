"use client";

import { BellRing } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { formatTime } from "@/lib/focus-timer/formatTime";

export default function Alarm({
    isBreak,
    breakTime,
    alarm,
    shouldPlaySound,
    replaySound,
    onAlarmEnded,
    cancelBreak,
}: FocusTimerAlarmProps) {
    return (
        <Dialog modal open={isBreak}>
            <DialogContent
                onInteractOutside={(e) => e.preventDefault()}
                className="max-w-sm rounded-xl border-border/50 shadow-xl backdrop-blur-sm
                   bg-background/95 animate-in fade-in-0 zoom-in-95
                   [&>button:last-child]:hidden"
            >
                <DialogHeader className="space-y-2">
                    <DialogTitle className="text-center text-lg font-medium flex justify-center items-center gap-3">
                        <BellRing size={18} className="text-foreground/80" />
                        <span>Break Time</span>
                        <BellRing size={18} className="text-foreground/80" />
                    </DialogTitle>

                    <DialogDescription className="text-center text-sm text-muted-foreground">
                        Step away, stretch, breathe.
                    </DialogDescription>
                </DialogHeader>

                <section className="space-y-8 pt-4">
                    {shouldPlaySound && (
                        <audio
                            key={replaySound}
                            src="/sound/alarm.mp3"
                            autoPlay
                            onEnded={onAlarmEnded}
                        />
                    )}

                    {alarm && (
                        <div className="flex justify-center items-center min-h-32">
                            <p
                                className="relative z-10 text-7xl sm:text-8xl font-mono text-center
                           tracking-tight select-none animate-in fade-in-0 slide-in-from-bottom-2"
                            >
                                {formatTime(breakTime)}
                            </p>
                        </div>
                    )}

                    <div className="flex justify-center items-center">
                        <DialogClose asChild>
                            <Button
                                variant="secondary"
                                onClick={cancelBreak}
                                className="px-6 py-2 rounded-md"
                            >
                                End break
                            </Button>
                        </DialogClose>
                    </div>
                </section>
            </DialogContent>
        </Dialog>
    );
}
