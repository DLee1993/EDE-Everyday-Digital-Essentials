"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FocusTimerSessionSelectorProps } from "@/types";

export default function SessionSelector({ presets, selected, onSelect, onEditPreset }: FocusTimerSessionSelectorProps) {
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
                    <div
                        key={preset.label}
                        className={`flex-1 flex items-center justify-between gap-3 p-2 rounded border ${
                            selected === preset.value ? "border-ring/50" : "border-border"
                        }`}
                    >
                        <div className="flex items-center gap-2">
                            <RadioGroupItem
                                className="cursor-pointer"
                                value={String(preset.value)}
                                id={preset.label}
                            />
                            <Label htmlFor={preset.label} className="text-sm">
                                {preset.label}
                            </Label>
                        </div>

                        <Input
                            type="number"
                            step="0.5"
                            value={preset.value}
                            onChange={(e) => onEditPreset(preset.label, parseFloat(e.target.value))}
                            className="w-20 text-center"
                            min={0.5}
                        />
                    </div>
                ))}
            </RadioGroup>
        </section>
    );
}
