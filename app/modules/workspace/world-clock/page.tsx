"use client";

import { useWorldClock } from "@/hooks/world-clock/use-world-clock";

export type FormattedTimezone = {
    date: string;
    time: string;
    location: string;
    offset: string;
    timezone: string;
    name: string;
};

export default function WorldClock() {
    const { selected, setSelected, setCurrent, selectedTimezone, currentTimezone } =
        useWorldClock();

    return (
        <section>
            <div className="w-full max-w-3xl space-y-12">
            </div>
        </section>
    );
}
