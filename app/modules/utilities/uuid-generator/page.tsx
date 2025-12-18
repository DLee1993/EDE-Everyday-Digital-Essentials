"use client";

import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { NotifyUser } from "@/lib/global/NotifyUser";
import { Copy, CopyAll } from "@/lib/global/copy-to-clipboard";
import { clampValues } from "@/lib/uuid-generator/validation";
import { generateBase36, generateBase62, generateUUIDv4 } from "@/lib/uuid-generator/identifiers";

function generateIdentifier(
    format: string,
    length: number,
    hyphens: boolean,
    uppercase: boolean,
    prefix: string,
    suffix: string
) {
    let id = "";
    switch (format) {
        case "uuid":
            id = generateUUIDv4(length, hyphens, uppercase);
            break;
        case "base36":
            id = generateBase36(length);
            break;
        case "base62":
            id = generateBase62(length);
            break;
        default:
            id = generateUUIDv4(length, hyphens, uppercase);
    }

    // Add separators if prefix/suffix exist
    const prefixPart = prefix ? `${prefix}-` : "";
    const suffixPart = suffix ? `-${suffix}` : "";

    return `${prefixPart}${id}${suffixPart}`;
}

export default function UUIDGenerator() {
    const [count, setCount] = useState(5);
    const [length, setLength] = useState(36);
    const [hyphens, setHyphens] = useState(true);
    const [uppercase, setUppercase] = useState(false);
    const [prefix, setPrefix] = useState("");
    const [suffix, setSuffix] = useState("");
    const [format, setFormat] = useState("uuid");
    const [uuids, setUuids] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = () => {
        const { safeCount, safeLength, safePrefix, safeSuffix, error } = clampValues(
            count,
            length,
            prefix,
            suffix
        );

        if (error) {
            setError(error); // update UI state
            return;
        }

        const newIds = Array.from({ length: safeCount }, () =>
            generateIdentifier(format, safeLength, hyphens, uppercase, safePrefix, safeSuffix)
        );
        setUuids(newIds);
    };

    const downloadAll = () => {
        const blob = new Blob([uuids.join("\n")], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "identifiers.txt";
        a.click();
        URL.revokeObjectURL(url);
    };

    const regenerateOne = (index: number) => {
        const { safeLength, safePrefix, safeSuffix } = clampValues(count, length, prefix, suffix);
        const newId = generateIdentifier(
            format,
            safeLength,
            hyphens,
            uppercase,
            safePrefix,
            safeSuffix
        );
        setUuids((prev) => prev.map((u, i) => (i === index ? newId : u)));
    };

    const deleteOne = (index: number) => setUuids((prev) => prev.filter((_, i) => i !== index));

    const deleteAll = () => {
        setUuids([]);
    };

    useEffect(() => {
        NotifyUser({ type: "Error", title: "Error", message: "Invalid input" });
    }, [error]);

    return (
        <div className="space-y-8">
            {/* Options Section */}
            <section className="space-y-4 border p-4 rounded-md">
                <h2 className="text-sm font-medium">Identifier Options</h2>

                <div className="grid gap-2">
                    <Label htmlFor="count">Number of IDs (max 50)</Label>
                    <Input
                        id="count"
                        type="number"
                        value={count}
                        min={1}
                        max={50}
                        onChange={(e) => setCount(+e.target.value)}
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="length">Length (max 36)</Label>
                    <Input
                        id="length"
                        type="number"
                        value={length}
                        min={1}
                        max={36}
                        onChange={(e) => setLength(+e.target.value)}
                    />
                </div>

                <div className="grid gap-2">
                    <Label>Format</Label>
                    <Select value={format} onValueChange={setFormat}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="uuid">UUID v4</SelectItem>
                            <SelectItem value="base36">Base36</SelectItem>
                            <SelectItem value="base62">Base62</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {format === "uuid" && (
                    <>
                        <div className="flex items-center gap-2">
                            <input
                                id="hyphens"
                                type="checkbox"
                                checked={hyphens}
                                onChange={(e) => setHyphens(e.target.checked)}
                            />
                            <Label htmlFor="hyphens">Include hyphens</Label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                id="uppercase"
                                type="checkbox"
                                checked={uppercase}
                                onChange={(e) => setUppercase(e.target.checked)}
                            />
                            <Label htmlFor="uppercase">Uppercase</Label>
                        </div>
                    </>
                )}

                <div className="grid gap-2">
                    <Label htmlFor="prefix">Prefix (max 20 chars)</Label>
                    <Input id="prefix" value={prefix} onChange={(e) => setPrefix(e.target.value)} />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="suffix">Suffix (max 20 chars)</Label>
                    <Input id="suffix" value={suffix} onChange={(e) => setSuffix(e.target.value)} />
                </div>
            </section>

            {/* Actions Section */}
            <section className="flex gap-4">
                <Button onClick={handleGenerate}>Generate IDs</Button>
                <Button
                    variant="secondary"
                    onClick={() => CopyAll({ inputs: uuids })}
                    disabled={uuids.length === 0}
                >
                    Copy All
                </Button>
                <Button variant="secondary" onClick={downloadAll} disabled={uuids.length === 0}>
                    Download All
                </Button>
                <Button variant="destructive" onClick={deleteAll} disabled={uuids.length === 0}>
                    Delete All
                </Button>
            </section>

            {/* Table Section */}
            <section>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {uuids.map((id, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-mono">{id}</TableCell>
                                <TableCell className="flex gap-2">
                                    <Button size="sm" onClick={() => Copy({ input: id })}>
                                        Copy
                                    </Button>
                                    <Button size="sm" onClick={() => regenerateOne(index)}>
                                        Regenerate
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="destructive"
                                        onClick={() => deleteOne(index)}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>
        </div>
    );
}
