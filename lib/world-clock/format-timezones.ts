import { ITimezoneOption } from "react-timezone-select";
import { TZDate } from "@date-fns/tz";
import { format } from "date-fns";
import { FormattedTimezone } from "@/types";

export function formatTimezone(tz: ITimezoneOption | undefined): FormattedTimezone | undefined {
    if (!tz) return undefined;

    const now = new Date();
    const zoned = new TZDate(now, tz.value);

    return {
        date: format(zoned, "dd MMM yyyy"),
        time: format(zoned, "HH:mm aaaa"),
        location: tz.label.replace(/\([^)]*\)/g, "").trim(),
        offset: String(tz.offset ?? ""),
        timezone: tz.value || "",
        name: tz.altName || "",
    };
}
