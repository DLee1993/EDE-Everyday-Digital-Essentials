"use client";

import TimezoneSelect from "@/components/world-clock/TimezoneSelect";
import { TimezoneCard } from "@/components/world-clock/TimezoneCard";
import { useWorldClock } from "@/hooks/world-clock/useWorldClock";

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
