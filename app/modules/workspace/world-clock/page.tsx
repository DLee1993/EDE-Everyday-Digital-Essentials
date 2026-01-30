"use client";

import { useEffect } from "react";
import { useWorldClock } from "@/hooks/world-clock/use-world-clock";
import { allTimezones, useTimezoneSelect } from "react-timezone-select";
import { ComposableMap, Geographies, Geography } from "@vnedyalk0v/react19-simple-maps";
import geoUrl from "@/data/world-clock/data.json";

import { Card } from "@/components/ui/card";

import TimezoneSelect from "@/components/world-clock/timezone-select";
import { TimezoneCard } from "@/components/world-clock/timezone-card";

export type FormattedTimezone = {
    date: string;
    time: string;
    location: string;
    offset: string;
    timezone: string;
    name: string;
};

export default function WorldClock() {
    const { selected, setSelected, selectedTimezone, currentTimezone, setCurrent } =
        useWorldClock();

    const { options } = useTimezoneSelect({
        labelStyle: "altName",
        timezones: allTimezones,
    });

    useEffect(() => {
        const guessed = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const match = options.find((o) => o.value === guessed);
        if (match) setSelected(match);
    }, [options, setSelected]);

    return (
        <section className="relative max-w-none!">
            <ComposableMap
                projectionConfig={{ scale: 225 }}
                className="absolute top-0! left-0! w-full h-full"
            >
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo, i) => (
                            <Geography
                                key={geo?.id || i}
                                geography={geo}
                                style={{
                                    default: {
                                        fill: "var(--primary)",
                                        outline: "none",
                                    },
                                    hover: {
                                        fill: "var(--primary)",
                                        outline: "none",
                                    },
                                    pressed: {
                                        fill: "var(--primary)",
                                        outline: "none",
                                    },
                                }}
                            />
                        ))
                    }
                </Geographies>
            </ComposableMap>

            <div className="absolute left-1/2 top-1/2 -translate-1/2 w-screen max-w-4xl px-4 z-50">
                <Card className="w-full p-4 flex items-center gap-6 bg-card/85 backdrop-blur-lg">
                    <TimezoneSelect tz={selected} setTz={setSelected} setCurrentTz={setCurrent} />
                    <section className="w-full">
                        {selected ? (
                            <TimezoneCard data={selectedTimezone} />
                        ) : (
                            <TimezoneCard data={currentTimezone} />
                        )}
                    </section>
                </Card>
            </div>
        </section>
    );
}
