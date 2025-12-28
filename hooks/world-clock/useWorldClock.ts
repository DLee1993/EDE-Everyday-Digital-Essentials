
import { formatTimezone } from "@/lib/world-clock/format-timezones";
import { FormattedTimezone } from "@/types";
import { useState, useMemo } from "react";
import { ITimezoneOption } from "react-timezone-select";

export function useWorldClock() {
    const [selected, setSelected] = useState<ITimezoneOption | undefined>();
    const [current, setCurrent] = useState<ITimezoneOption | undefined>();

    const selectedTimezone: FormattedTimezone | undefined = useMemo(
        () => formatTimezone(selected),
        [selected]
    );

    const currentTimezone: FormattedTimezone | undefined = useMemo(
        () => formatTimezone(current),
        [current]
    );

    return {
        selected,
        setSelected,
        setCurrent,
        selectedTimezone,
        currentTimezone,
    };
}
