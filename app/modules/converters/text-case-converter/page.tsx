"use client";

import { useTextCase, caseOptions } from "@/hooks/text-case-converter/use-text-case-converter";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, CopyIcon, Download, Trash } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Copy } from "@/lib/global/copy-to-clipboard";
import { DownloadJsonFile, DownloadTextFile } from "@/lib/global/download";
import { Check } from "lucide-react";
import { ActionsMenu } from "@/components/global/ActionsMenu";

export default function TextCaseConverter() {
    const { input, setInput, mode, setMode, output } = useTextCase();

    return (
        <section className="space-y-10">
            <div className="w-full flex gap-5 justify-center items-end">
                {/* TOP ROW — Case Dropdown */}
                <section className="flex flex-wrap gap-4">
                    <div className="flex flex-col gap-2">
                        <Label className="font-medium">Select type</Label>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="secondary" className="capitalize">
                                    {mode}
                                    <ChevronDown />
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="w-48 h-80">
                                {caseOptions.map((opt) => (
                                    <DropdownMenuItem
                                        key={opt.value}
                                        onClick={() => setMode(opt.value)}
                                        className="flex justify-between items-center"
                                    >
                                        <div className="w-[135px] flex justify-between items-center">
                                            <span>{opt.label}</span>
                                            <span className="opacity-60 font-mono">
                                                {opt.example}
                                            </span>
                                        </div>

                                        {mode === opt.value && <Check />}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </section>

                {/* ACTIONS DROPDOWN */}
                <section className="w-full">
                    <ActionsMenu
                        actions={[
                            {
                                label: "Clear",
                                icon: <Trash />,
                                onClick: () => setInput(""),
                            },
                            {
                                label: "Copy Text",
                                icon: <CopyIcon />,
                                onClick: () => Copy({ input: output }),
                            },
                            {
                                label: "Copy JSON",
                                icon: <CopyIcon />,
                                onClick: () =>
                                    Copy({
                                        input: JSON.stringify({ input, output, mode }, null, 2),
                                    }),
                            },
                            {
                                label: "Download Text",
                                icon: <Download />,
                                onClick: () => DownloadTextFile("text-case.txt", output),
                            },
                            {
                                label: "Download JSON",
                                icon: <Download />,
                                onClick: () =>
                                    DownloadJsonFile("text-case.json", { input, output, mode }),
                            },
                        ]}
                        disabled={!output}
                    />
                </section>
            </div>

            <div className="w-full flex flex-wrap gap-5">
                {/* INPUT TEXTAREA */}
                <fieldset className="flex-1 min-w-80 flex flex-col gap-2">
                    <Label className="font-medium">Input</Label>
                    <Textarea
                        name="message"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter the text you want to transform..."
                        className="formField peer resize-none w-full h-48"
                    />
                </fieldset>

                {/* OUTPUT TEXTAREA */}
                <section className="flex-1 min-w-80 flex flex-col gap-2">
                    <Label className="font-medium">Output</Label>
                    <Textarea value={output} readOnly className="resize-none w-full h-48" />
                </section>
            </div>
        </section>
    );
}
