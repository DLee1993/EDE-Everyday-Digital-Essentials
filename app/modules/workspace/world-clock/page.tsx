"use client";

import TimezoneSelect from "@/components/world-clock/timezone-select";
import { TimezoneCard } from "@/components/world-clock/timezone-card";
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
        <section className="mx-auto flex flex-col items-center space-y-12">
            <TimezoneSelect tz={selected} setTz={setSelected} setCurrentTz={setCurrent} />

            <section className="w-full">
                {selected ? (
                    <TimezoneCard data={selectedTimezone} />
                ) : (
                    <TimezoneCard data={currentTimezone} />
                )}
            </section>
        </section>
    );
}
