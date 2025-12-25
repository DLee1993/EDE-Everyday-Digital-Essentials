"use client";

import * as React from "react";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectSeparator,
    SelectTrigger,
} from "@/components/ui/select";

interface LengthProps {
    length: number;
    setLength: React.Dispatch<React.SetStateAction<number>>;
}

export default function SelectLength({ length, setLength }: LengthProps) {

    const ChangeLength = (value: number) => {
        setLength(value);
        console.log(value)
    };

    return (
        <Select onValueChange={(v) => ChangeLength(Number(v))}>
            <SelectTrigger>{length}</SelectTrigger>
            <SelectContent className="h-56">
                <SelectGroup>
                    <SelectLabel>Select Length</SelectLabel>
                    <SelectSeparator />
                    {Array.from({ length: 35 }, (_, i) => i + 4).map((n, i) => (
                        <SelectItem value={String(n)} key={i}>
                            {n}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
