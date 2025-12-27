"use client";

import { useMounted } from "@/hooks/global/use-mounted";
import { formatTime } from "@/lib/focus-timer/formatTime";

export default function Timer({ remaining }: { remaining: number }) {
    const mounted = useMounted();

    if (!mounted) {
        return (
            <section className="font-prime flex-1 max-w-xl min-h-40 flex justify-center items-center">
                <p className="text-8xl min-[425px]:text-9xl lg:text-[11rem] text-center w-full">
                    00:00
                </p>
            </section>
        );
    }

    return (
        <section className="font-prime flex-1 max-w-xl min-h-40 flex justify-center items-center">
            <p className="text-8xl min-[425px]:text-9xl lg:text-[11rem] text-center w-full">
                {formatTime(remaining)}
            </p>
        </section>
    );
}
