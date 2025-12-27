"use client";

import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { extensions } from "@/lib/file-converter/extensions";


export function AudioSelect({ action, updateAction }: FileConverterAudioSelectProps) {
    const filtered = extensions.audio.filter((ext) => ext !== action.from);

    return (
        <Select value={action.to ?? ""} onValueChange={updateAction}>
            <SelectTrigger aria-placeholder="Select type to convert to">
                <SelectValue placeholder={action.from.toUpperCase()} />
            </SelectTrigger>

            <SelectContent>
                {filtered.map((ext) => (
                    <SelectItem key={ext} value={ext}>
                        {ext.toUpperCase()}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
