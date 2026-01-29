import { FormattedTimezone } from "@/app/modules/workspace/world-clock/page";

export function TimezoneCard({ data }: { data?: FormattedTimezone }) {
    if (!data) return null;

    return (
        <section className="space-y-5 min-h-60">
            <span className="flex justify-between items-center">
                <h1 className="text-xl font-medium">{data.location}</h1>
                <p className="font-medium">{data.time}</p>
            </span>

            <div className="bg-primary/50 w-full h-px"></div>

            <InfoRow label="Current Date" value={data.date} />
            <InfoRow label="Timezone name" value={data.name} />
            <InfoRow label="Timezone offset" value={`${data.offset} hours`} />
            <InfoRow label="Timezone" value={data.timezone} />
        </section>
    );
}

function InfoRow({ label, value }: { label: string; value?: string }) {
    if (!value) return null;

    return (
        <div className="flex flex-wrap justify-between items-center gap-5">
            <h2 className="text-sm text-muted-foreground">{label}:</h2>
            <p>{value}</p>
        </div>
    );
}
