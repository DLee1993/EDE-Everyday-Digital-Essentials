"use client";

import { useAppSelector } from "@/store";
import { formatTime } from "@/lib/focus-timer/formatTime";

export function AlarmToastContent() {
    const remainingBreakTime = useAppSelector((state) => state.focusTimer.remainingBreakTime);

    return (
        <div className="flex flex-col gap-1">
            <span className="text-xs opacity-80">Time to take a break</span>
            <span className="text-base font-semibold">{formatTime(remainingBreakTime)}</span>
        </div>
    );
}
