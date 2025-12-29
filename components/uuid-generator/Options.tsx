"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

type UuidOptionsProps = {
    count: number;
    length: number;
    hyphens: boolean;
    uppercase: boolean;
    prefix: string;
    suffix: string;
    format: string;

    setCount: (value: number) => void;
    setLength: (value: number) => void;
    setHyphens: (value: boolean) => void;
    setUppercase: (value: boolean) => void;
    setPrefix: (value: string) => void;
    setSuffix: (value: string) => void;
    setFormat: (value: string) => void;
};

export function UuidOptions({
    count,
    length,
    hyphens,
    uppercase,
    prefix,
    suffix,
    format,
    setCount,
    setLength,
    setHyphens,
    setUppercase,
    setPrefix,
    setSuffix,
    setFormat,
}: UuidOptionsProps) {
    return (
        <section className="w-full! max-w-4xl space-y-10">
            <div className="flex justify-between gap-5 flex-wrap">
                <fieldset className="flex gap-5">
                    <p className="flex items-center gap-2 text-sm leading-none font-medium">
                        Select a Format
                    </p>
                    <Select name="country-label" value={format} onValueChange={setFormat}>
                        <SelectTrigger className="w-40">
                            <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="uuid">UUID v4</SelectItem>
                            <SelectItem value="base36">Base36</SelectItem>
                            <SelectItem value="base62">Base62</SelectItem>
                        </SelectContent>
                    </Select>
                </fieldset>

                {format === "uuid" && (
                    <div className="w-fit grid grid-cols-2 gap-6">
                        <fieldset className="flex items-center gap-2">
                            <Label htmlFor="hyphens">Include hyphens</Label>
                            <Checkbox
                                id="hyphens"
                                checked={hyphens}
                                onClick={() => setHyphens(!hyphens)}
                            />
                        </fieldset>

                        <fieldset className="flex items-center gap-2">
                            <Label htmlFor="uppercase">Uppercase & Lowercase</Label>
                            <Checkbox
                                id="uppercase"
                                checked={uppercase}
                                onClick={() => setUppercase(!uppercase)}
                            />
                        </fieldset>
                    </div>
                )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <fieldset className="grid gap-2">
                    <Label htmlFor="count">Number of IDs</Label>
                    <Input
                        id="count"
                        type="number"
                        min={1}
                        max={50}
                        value={count}
                        onChange={(e) => setCount(+e.target.value)}
                    />
                </fieldset>

                <fieldset className="grid gap-2">
                    <Label htmlFor="length">Length</Label>
                    <Input
                        id="length"
                        type="number"
                        min={1}
                        max={36}
                        value={length}
                        onChange={(e) => setLength(+e.target.value)}
                    />
                </fieldset>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="prefix">Prefix</Label>
                    <Input id="prefix" value={prefix} onChange={(e) => setPrefix(e.target.value)} />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="suffix">Suffix</Label>
                    <Input id="suffix" value={suffix} onChange={(e) => setSuffix(e.target.value)} />
                </div>
            </div>
        </section>
    );
}
