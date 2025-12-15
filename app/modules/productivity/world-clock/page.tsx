"use client";

import { useMemo, useState } from "react";
import { ITimezoneOption } from "react-timezone-select";
import { TZDate } from "@date-fns/tz";
import { format } from "date-fns";
import TimezoneSelect from "@/components/world-clock/TimezoneSelect";

export default function WorldClock() {
    const [tz, setTz] = useState<ITimezoneOption | undefined>();
    const [currentTz, setCurrentTz] = useState<ITimezoneOption | undefined>();

    const currentTimezone = useMemo(() => {
        if (!currentTz) return undefined;

        const label = currentTz.value;
        const currentDate = new Date();
        const timezoneSelected = new TZDate(currentDate, label);

        return {
            date: format(timezoneSelected, "dd MMM yyyy"),
            time: format(timezoneSelected, "HH:mm aaaa"),
            location: currentTz.label.replace(/\([^)]*\)/g, "").trim(),
            offset: String(currentTz.offset ?? ""),
            timezone: currentTz.value || "",
            name: currentTz.altName || "",
        };
    }, [currentTz]);

    const selectedTimezone = useMemo(() => {
        if (!tz) return undefined;

        const label = tz.value;
        const currentDate = new Date();
        const timezoneSelected = new TZDate(currentDate, label);

        return {
            date: format(timezoneSelected, "dd MMMM yyyy"),
            time: format(timezoneSelected, "HH:mm aaaa"),
            location: tz.label.replace(/\([^)]*\)/g, "").trim(),
            offset: String(tz.offset ?? ""),
            timezone: tz.value || "",
            name: tz.altName || "",
        };
    }, [tz]);

    return (
        <section>
            <section className="w-11/12 max-w-2xl flex flex-col justify-center items-center space-y-12">
                <TimezoneSelect tz={tz} setTz={setTz} setCurrentTz={setCurrentTz} />
                <section className="flex flex-col gap-10 w-full">
                    {tz ? (
                        <section className="space-y-5 min-h-60">
                            <span className="flex justify-between items-center">
                                <h2 className="text-2xl font-medium">
                                    {selectedTimezone?.location}
                                </h2>
                                <p className="hidden md:block font-medium">
                                    {selectedTimezone?.time}
                                </p>
                            </span>
                            {selectedTimezone && <div className="bg-primary/50 w-full h-px"></div>}
                            <p className="flex justify-between items-center gap-5 md:hidden font-medium">
                                <span>Current Time</span>
                                <span>{selectedTimezone?.time}</span>
                            </p>
                            {selectedTimezone?.date && (
                                <div className="flex flex-wrap justify-between items-center gap-5">
                                    <h3>Current Date</h3>
                                    <p>{selectedTimezone?.date}</p>
                                </div>
                            )}
                            {selectedTimezone?.name && (
                                <div className="flex flex-wrap justify-between items-center gap-5">
                                    <h3>Timezone name:</h3>
                                    <p>{selectedTimezone.name}</p>
                                </div>
                            )}
                            {selectedTimezone?.offset && (
                                <div className="flex flex-wrap justify-between items-center gap-5">
                                    <h3 className="text-sm">Timezone offset:</h3>
                                    <p>{selectedTimezone.offset} hours</p>
                                </div>
                            )}
                            {selectedTimezone?.timezone && (
                                <div className="flex flex-wrap justify-between items-center gap-5">
                                    <h3 className="text-sm">Timezone:</h3>
                                    <p>{selectedTimezone.timezone}</p>
                                </div>
                            )}
                        </section>
                    ) : (
                        <section className="space-y-5 min-h-60">
                            <span className="flex justify-between items-center">
                                <h2 className="text-2xl font-medium">
                                    {currentTimezone?.location}
                                </h2>
                                <p className="hidden md:block font-medium">
                                    {currentTimezone?.time}
                                </p>
                            </span>
                            {currentTimezone && <div className="bg-primary/50 w-full h-px"></div>}
                            <div className="flex justify-between items-center gap-5 md:hidden font-medium">
                                <h3 className="text-muted-foreground">Current Time:</h3>
                                <p>{currentTimezone?.time}</p>
                            </div>
                            {currentTimezone?.date && (
                                <div className="flex flex-wrap justify-between items-center gap-5">
                                    <h3 className="text-muted-foreground">Current Date:</h3>
                                    <p>{currentTimezone?.date}</p>
                                </div>
                            )}
                            {currentTimezone?.name && (
                                <div className="flex flex-wrap justify-between items-center gap-5">
                                    <h3 className="text-muted-foreground">Timezone name:</h3>
                                    <p>{currentTimezone.name}</p>
                                </div>
                            )}
                            {currentTimezone?.offset && (
                                <div className="flex flex-wrap justify-between items-center gap-5">
                                    <h3 className="text-muted-foreground">Timezone offset:</h3>
                                    <p>{currentTimezone.offset} hours</p>
                                </div>
                            )}
                            {currentTimezone?.timezone && (
                                <div className="flex flex-wrap justify-between items-center gap-5">
                                    <h3 className="text-muted-foreground">Timezone:</h3>
                                    <p>{currentTimezone.timezone}</p>
                                </div>
                            )}
                        </section>
                    )}
                </section>
            </section>
        </section>
    );
}
