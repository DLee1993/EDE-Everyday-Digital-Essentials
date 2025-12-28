"use client";

import { useWordCounter } from "@/hooks/word-counter/useWordCounter";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import {
    ClipboardCopy,
    Download,
    FileJson,
    Table,
    Brush,
    RotateCcw,
    ChevronDown,
} from "lucide-react";

export default function WordCounter() {
    const { text, setText, analysis, reset, clearFormattingAction, actions } =
        useWordCounter();

    return (
        <section className="flex! md:flex-row! justify-evenly! space-y-10 gap-10">
            {/* LEFT COLUMN */}
            <div className="w-full md:max-w-3/5 space-y-6">
                <Textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type or paste your text here..."
                    className="w-full! h-80 resize-none"
                />

                <div className="flex gap-3 items-center">
                    {/* Clear Formatting */}
                    <Button onClick={clearFormattingAction}>
                        Clear Formatting
                        <Brush className="w-4 h-4" />
                    </Button>

                    {/* DROPDOWN MENU */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">
                                Actions
                                <ChevronDown />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className="w-48">
                            <DropdownMenuItem
                                className="flex justify-between items-center"
                                onClick={reset}
                            >
                                Reset
                                <RotateCcw className="w-4 h-4" />
                            </DropdownMenuItem>

                            <DropdownMenuItem
                                className="flex justify-between items-center"
                                onClick={actions.copyText}
                            >
                                Copy Text
                                <ClipboardCopy className="w-4 h-4" />
                            </DropdownMenuItem>

                            <DropdownMenuItem
                                className="flex justify-between items-center"
                                onClick={actions.downloadText}
                            >
                                Download Text
                                <Download className="w-4 h-4" />
                            </DropdownMenuItem>

                            <DropdownMenuItem
                                className="flex justify-between items-center"
                                onClick={actions.copyStats}
                            >
                                Copy Stats (JSON)
                                <FileJson className="w-4 h-4" />
                            </DropdownMenuItem>

                            <DropdownMenuItem
                                className="flex justify-between items-center"
                                onClick={actions.downloadStats}
                            >
                                Download Stats
                                <FileJson className="w-4 h-4" />
                            </DropdownMenuItem>

                            <DropdownMenuItem
                                className="flex justify-between items-center"
                                onClick={actions.downloadTable}
                            >
                                Download Table
                                <Table className="w-4 h-4" />
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="w-full md:w-1/3 space-y-4">
                <div className="rounded-lg border p-4 bg-muted/30 space-y-2">
                    <h2 className="text-sm font-semibold text-muted-foreground">Metrics</h2>

                    <p>Words: {analysis.words}</p>
                    <p>Characters: {analysis.characters}</p>
                    <p>Characters (no spaces): {analysis.charactersNoSpaces}</p>
                    <p>Lines: {analysis.lines}</p>
                    <p>Paragraphs: {analysis.paragraphs}</p>

                    <h3 className="text-sm font-semibold mt-4">Reading Time</h3>
                    <p>Slow: {analysis.readingTime.slow}</p>
                    <p>Average: {analysis.readingTime.average}</p>
                    <p>Fast: {analysis.readingTime.fast}</p>

                    <h3 className="text-sm font-semibold mt-4">Speaking Time</h3>
                    <p>Slow: {analysis.speakingTime.slow}</p>
                    <p>Average: {analysis.speakingTime.average}</p>
                    <p>Fast: {analysis.speakingTime.fast}</p>
                </div>
            </div>
        </section>
    );
}
