"use client";

import { useSlugGenerator } from "@/hooks/slug-generator/useSlugGenerator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Copy, Download } from "lucide-react";
import { Label } from "@/components/ui/label";

export default function SlugGenerator() {
    const {
        input,
        setInput,
        slug,
        separator,
        setSeparator,
        maxLength,
        setMaxLength,
        copy,
        download,
        downloadJson,
        copyJson,
    } = useSlugGenerator();

    return (
        <section className="space-y-5">
            <section className="w-full max-w-4xl flex flex-wrap gap-4">
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium">Separator</label>
                    <Input
                        value={separator}
                        onChange={(e) => setSeparator(e.target.value)}
                        className="w-32"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium">Max length</label>
                    <Input
                        type="number"
                        value={maxLength ?? "200"}
                        max={200}
                        onChange={(e) =>
                            setMaxLength(e.target.value ? Number(e.target.value) : null)
                        }
                        className="w-24"
                    />
                </div>
            </section>

            <section className="w-full max-w-4xl flex flex-col gap-2">
                <Label htmlFor="slugInput" className="text-sm font-medium">
                    Text to slugify
                </Label>
                <Textarea
                    id="slugInput"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter text to generate slug…"
                    className="resize-none w-full h-52"
                />
            </section>

            <section className="w-full max-w-4xl space-y-5">
                <div className="flex flex-col gap-2">
                    <Label htmlFor="slugOutput" className="text-sm font-medium">
                        Slug
                    </Label>
                    <Input id="slugOutput" value={slug} readOnly className="font-mono" />
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="secondary" disabled={!slug}>
                            Actions
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem
                            onClick={copy}
                            className="flex justify-between items-center"
                        >
                            Copy slug <Copy />
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={copyJson}
                            className="flex justify-between items-center"
                        >
                            Copy JSON <Copy />{" "}
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem
                            onClick={download}
                            className="flex justify-between items-center"
                        >
                            Download slug <Download />
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={downloadJson}
                            className="flex justify-between items-center"
                        >
                            Download JSON <Download />
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </section>
        </section>
    );
}
