import { useState, useRef, useEffect } from "react";
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

type Props = {
    isBreak: boolean;
    breakTime: number;
    sound: boolean;
    alarm: boolean;
    cancelBreak: () => void;
};

export default function Alarm({ isBreak, cancelBreak, breakTime, sound, alarm }: Props) {
    const [shouldPlay, setShouldPlay] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    const loopCountRef = useRef(0);

    useEffect(() => {
        if (isBreak && sound) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setShouldPlay(true);
        } else {
            setShouldPlay(false);
        }
    }, [isBreak, sound]);

    useEffect(() => {
        if (shouldPlay && audioRef.current) {
            loopCountRef.current = 0;
            audioRef.current!.play();
        }
    }, [shouldPlay]);

    const handleEnded = () => {
        loopCountRef.current += 1;
        if (loopCountRef.current < 3) {
            audioRef.current!.play();
        } else {
            setShouldPlay(false);
            if (!alarm) {
                cancelBreak();
            }
        }
    };

    return (
        <Dialog modal open={isBreak}>
            <DialogContent
                onInteractOutside={(e) => e.preventDefault()}
                className="[&>button:last-child]:hidden"
            >
                <DialogHeader>
                    <DialogTitle className="text-center text-base font-normal flex justify-center items-center gap-5">
                        <BellRing size={16} /> <span>It&apos;s time to take a break</span>{" "}
                        <BellRing size={16} />
                    </DialogTitle>
                    <DialogDescription className="sr-only">
                        This is the break timer, this can be cancelled manually by pressing cancel
                        at the bottom.
                    </DialogDescription>
                </DialogHeader>
                <section className="space-y-10">
                    {sound && isBreak && (
                        <audio
                            ref={audioRef}
                            src="/sound/alarm.mp3"
                            autoPlay={shouldPlay}
                            onEnded={handleEnded}
                        />
                    )}
                    {alarm && isBreak && (
                        <div className="flex justify-center items-center min-h-40">
                            <p className="relative z-10 text-8xl sm:text-9xl w-full text-center font-mono">
                                {Math.floor(breakTime / 60)
                                    .toString()
                                    .padStart(2, "0")}
                                :{(breakTime % 60).toString().padStart(2, "0")}
                            </p>
                        </div>
                    )}
                    <div className="flex justify-center items-center gap-5">
                        <DialogClose asChild>
                            <Button variant="secondary" onClick={cancelBreak}>
                                Cancel break
                            </Button>
                        </DialogClose>
                    </div>
                </section>
            </DialogContent>
        </Dialog>
    );
}
