"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type FocusTimerPreset = {
    label: string;
    value: number; // minutes
};

type FocusTimerSessionSelectorProps = {
    presets: FocusTimerPreset[];
    selected: number;
    onSelect: (minutes: number) => void;
    onEditPreset: (label: string, minutes: number) => void;
};

export default function SessionSelector({
    presets,
    selected,
    onSelect,
    onEditPreset,
}: FocusTimerSessionSelectorProps) {
    return (
        <section className="space-y-2.5">
            <p className="text-sm text-left">
                Select session length <span className="text-xs">(in minutes)</span>
            </p>

            <RadioGroup
                value={String(selected)}
                onValueChange={(val) => onSelect(parseFloat(val))}
                className="flex flex-col"
            >
                {presets.map((preset) => (
                    <Label
                        key={preset.label}
                        htmlFor={preset.label}
                        className={`flex-1 flex items-center justify-between gap-3 p-2 rounded border cursor-pointer ${
                            selected === preset.value ? "border-ring/50" : "border-border"
                        }`}
                    >
                        <div className="flex items-center gap-2">
                            <RadioGroupItem
                                value={String(preset.value)}
                                id={preset.label}
                                className="cursor-pointer"
                            />
                            <span className="text-sm">{preset.label}</span>
                        </div>

                        <Input
                            type="number"
                            step="0.5"
                            value={preset.value}
                            onChange={(e) => onEditPreset(preset.label, parseFloat(e.target.value))}
                            className="w-20 text-center"
                            min={0.5}
                            onClick={(e) => e.stopPropagation()} // prevent selecting when editing
                        />
                    </Label>
                ))}
            </RadioGroup>
        </section>
    );
}
