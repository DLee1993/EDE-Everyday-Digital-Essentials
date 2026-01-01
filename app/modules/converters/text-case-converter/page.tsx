"use client";

import { useTextCase, caseOptions } from "@/hooks/text-case-converter/use-text-case-converter";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, CopyIcon, Download } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Copy } from "@/lib/global/copy-to-clipboard";
import { DownloadJsonFile, DownloadTextFile } from "@/lib/global/download";
import { Check } from "lucide-react";

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
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" disabled={!output}>
                                Actions
                                <ChevronDown />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuItem
                                onClick={() => Copy({ input: output })}
                                className="flex justify-between items-center"
                            >
                                Copy text <CopyIcon />
                            </DropdownMenuItem>

                            <DropdownMenuItem
                                onClick={() =>
                                    Copy({
                                        input: JSON.stringify({ input, output, mode }, null, 2),
                                    })
                                }
                                className="flex justify-between items-center"
                            >
                                Copy JSON <CopyIcon />
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem
                                onClick={() => DownloadTextFile("text-case.txt", output)}
                                className="flex justify-between items-center"
                            >
                                Download Text <Download />
                            </DropdownMenuItem>

                            <DropdownMenuItem
                                onClick={() =>
                                    DownloadJsonFile("text-case.json", { input, output, mode })
                                }
                                className="flex justify-between items-center"
                            >
                                Download JSON <Download />
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </section>
            </div>

            <div className="w-full flex flex-wrap gap-5">
                {/* INPUT TEXTAREA */}
                <section className="flex-1 min-w-80 flex flex-col gap-2">
                    <Label className="font-medium">Input</Label>
                    <Textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter text to transform…"
                        className="resize-none w-full h-48"
                    />
                </section>

                {/* OUTPUT TEXTAREA */}
                <section className="flex-1 min-w-80 flex flex-col gap-2">
                    <Label className="font-medium">Output</Label>
                    <Textarea value={output} readOnly className="resize-none w-full h-48" />
                </section>
            </div>
        </section>
    );
}
