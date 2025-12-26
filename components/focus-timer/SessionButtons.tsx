import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import usePersistentState from "@/hooks/global/usePersistentState";
import { useMounted } from "@/hooks/global/use-mounted";

type SessionSelectorProps = {
    time: number; // current time in seconds
    calculateTime: (minutes: number) => void; // callback when user changes
};

export default function SessionSelector({ time, calculateTime }: SessionSelectorProps) {
    const mounted = useMounted();

    // Persistent states for each session length
    const [short, setShort] = usePersistentState<number>("short", 1);
    const [medium, setMedium] = usePersistentState<number>("medium", 5);
    const [long, setLong] = usePersistentState<number>("long", 30);

    // Config array
    const SessionButtons = [
        { label: "Short", value: short, setValue: setShort },
        { label: "Medium", value: medium, setValue: setMedium },
        { label: "Long", value: long, setValue: setLong },
    ];

    const [selectedSession, setSelectedSession] = usePersistentState<string>(
        "selectedSession",
        "1"
    );

    return (
        <section className="space-y-2.5">
            <p className="text-sm text-left">
                Select session length <span className="text-xs">(in minutes)</span>
            </p>
            <div>
                <RadioGroup
                    value={String(time / 60)}
                    onValueChange={(val: string) => {
                        calculateTime(parseFloat(val));
                        setSelectedSession(val);
                    }}
                    className="flex flex-col"
                >
                    {SessionButtons.map(({ label, value, setValue }) => (
                        <div
                            key={label}
                            className={`flex-1 flex items-center justify-between gap-3 p-2 rounded border ${
                                mounted && selectedSession === String(value)
                                    ? "border-ring/50"
                                    : "border-border"
                            }`}
                        >
                            <div className="flex items-center gap-2">
                                <RadioGroupItem
                                    className="cursor-pointer"
                                    value={mounted ? String(value) : "0"}
                                    id={label}
                                />
                                <Label htmlFor={label} className="text-sm">
                                    {label}
                                </Label>
                            </div>
                            <Input
                                type="number"
                                step="0.5"
                                value={mounted ? value : 0}
                                onChange={(e: { target: { value: string } }) => {
                                    const newVal = parseFloat(e.target.value);
                                    setValue(newVal); // persist new value
                                    calculateTime(newVal); // trigger callback immediately
                                }}
                                className="w-20 text-center"
                                min={0.5}
                            />
                        </div>
                    ))}
                </RadioGroup>
            </div>
        </section>
    );
}
