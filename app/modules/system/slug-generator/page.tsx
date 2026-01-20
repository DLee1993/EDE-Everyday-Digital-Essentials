"use client";

import { useSlugGenerator } from "@/hooks/slug-generator/use-slug-generator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CopyIcon, Download, Trash } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Copy, CopyJson } from "@/lib/global/copy-to-clipboard";
import { DownloadJsonFile, DownloadTextFile } from "@/lib/global/download";
import { ActionsMenu } from "@/components/global/ActionsMenu";

export default function SlugGenerator() {
    const { input, setInput, slug, separator, setSeparator, maxLength, setMaxLength } =
        useSlugGenerator();

    return (
        <section className="space-y-5">
            <section className="w-full max-w-4xl flex flex-wrap gap-4">
                <div className="flex flex-col gap-1">
                    <Label className="text-xs font-medium">Add a Separator</Label>
                    <Input value={separator} onChange={(e) => setSeparator(e.target.value)} />
                </div>

                <div className="flex flex-col gap-1">
                    <Label className="text-xs font-medium">Select max length</Label>
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
                <fieldset className="flex flex-col gap-2">
                    <Label htmlFor="slugInput" className="text-sm font-medium">
                        Text to slugify
                    </Label>
                    <Textarea
                        id="slugInput"
                        name="slugInput"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter text to generate slug…"
                        className="resize-none w-full h-48"
                    />
                </fieldset>
            </section>

            <section className="w-full max-w-4xl space-y-5">
                <div className="flex flex-col gap-2">
                    <Label htmlFor="slugOutput" className="text-sm font-medium">
                        Slug
                    </Label>
                    <Input id="slugOutput" value={slug} readOnly className="font-mono" />
                </div>
                <ActionsMenu
                    actions={[
                        {
                            label: "Copy slug",
                            icon: <CopyIcon />,
                            onClick: () => Copy({ input: slug }),
                        },
                        {
                            label: "Copy JSON",
                            icon: <CopyIcon />,
                            onClick: () => CopyJson({ input: slug }),
                        },
                        {
                            label: "Download slug",
                            icon: <Download />,
                            onClick: () => DownloadTextFile("slug.txt", `SLUG - ${slug}`),
                        },
                        {
                            label: "Download JSON",
                            icon: <Download />,
                            onClick: () => DownloadJsonFile("slug.json", { slug }),
                        },
                        {
                            label: "Clear slug",
                            icon: <Trash />,
                            onClick: () => setInput(""),
                            isDelete: true,
                        },
                    ]}
                    disabled={!slug}
                />
            </section>
        </section>
    );
}
