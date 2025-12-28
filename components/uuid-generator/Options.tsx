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
import { UuidOptionsProps } from "@/types";

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
            <h2 className="text-sm font-medium text-primary">Identifier Options</h2>

            <div className="flex justify-between gap-5 flex-wrap">
                <fieldset className="flex gap-5">
                    <p className="flex items-center gap-2 text-sm leading-none font-medium">Select a Format</p>
                    <Select
                        name="country-label"
                        value={format}
                        onValueChange={setFormat}
                    >
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
                            <input
                                id="hyphens"
                                type="checkbox"
                                checked={hyphens}
                                onChange={(e) => setHyphens(e.target.checked)}
                            />
                            <Label htmlFor="hyphens">Include hyphens</Label>
                        </fieldset>

                        <fieldset className="flex items-center gap-2">
                            <input
                                id="uppercase"
                                type="checkbox"
                                checked={uppercase}
                                onChange={(e) => setUppercase(e.target.checked)}
                            />
                            <Label htmlFor="uppercase">Uppercase</Label>
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
