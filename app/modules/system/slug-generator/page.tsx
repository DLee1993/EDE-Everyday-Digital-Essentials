"use client";

import { useSlugGenerator } from "@/hooks/slug-generator/useSlugGenerator";
import { Copy } from "@/lib/global/copy-to-clipboard";
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
import {  CopyIcon, Download } from "lucide-react";
import { Label } from "@/components/ui/label";
import { downloadJsonFile, downloadTextFile } from "@/lib/global/download";

export default function SlugGenerator() {
    const {
        input,
        setInput,
        slug,
        separator,
        setSeparator,
        maxLength,
        setMaxLength,
    } = useSlugGenerator();

    return (
        <section className="space-y-5">
            <section className="w-full max-w-4xl flex flex-wrap gap-4">
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium">Add a Separator</label>
                    <Input
                        value={separator}
                        onChange={(e) => setSeparator(e.target.value)}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium">Select max length</label>
                    <Input
                        type="number"
                        value={maxLength ?? "200"}
                        max={200}
                        onChange={(e) =>
                            setMaxLength(e.target.value ? Number(e.target.value) : null)
                        }
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
                            onClick={() => Copy({ input: slug })}
                            className="flex justify-between items-center"
                        >
                            Copy slug <CopyIcon />
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => Copy({ input: JSON.stringify({ slug }, null, 2) })}
                            className="flex justify-between items-center"
                        >
                            Copy JSON <CopyIcon />{" "}
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem
                            onClick={() => downloadTextFile("slug.txt", `SLUG - ${slug}`)}
                            className="flex justify-between items-center"
                        >
                            Download slug <Download />
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => downloadJsonFile("slug.json", { slug })}
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
