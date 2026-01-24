"use client";

import { useWordCounter } from "@/hooks/word-counter/use-word-counter";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { ClipboardCopy, Download, FileJson, Table, Brush, RotateCcw } from "lucide-react";
import { Copy, CopyJson } from "@/lib/global/copy-to-clipboard";
import { DownloadJsonFile, DownloadTextFile } from "@/lib/global/download";
import { ActionsMenu } from "@/components/global/ActionsMenu";

export default function WordCounter() {
    const { text, setText, analysis, table, clearFormattingAction, reset } = useWordCounter();

    return (
        <section className="flex! md:flex-row! justify-evenly! space-y-10 md:space-y-0">
            {/* LEFT COLUMN */}
            <div className="w-full md:max-w-3/5 2xl:max-w-1/3 space-y-6">
                <Textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type or paste your text here..."
                    className="w-full! h-96 resize-none"
                />

                <div className="flex gap-3 items-center">
                    {/* Clear Formatting */}
                    <Button onClick={clearFormattingAction}>
                        Clear Formatting
                        <Brush className="w-4 h-4" />
                    </Button>

                    {/* DROPDOWN MENU */}
                    <ActionsMenu
                        actions={[
                            { label: "Reset", icon: <RotateCcw />, onClick: reset },
                            {
                                label: "Copy Text",
                                icon: <ClipboardCopy />,
                                onClick: () => Copy({ input: text }),
                            },
                            {
                                label: "Copy Stats (JSON)",
                                icon: <FileJson />,
                                onClick: () => CopyJson({ input: analysis }),
                            },
                            {
                                label: "Download Text",
                                icon: <Download />,
                                onClick: () => DownloadTextFile("text.txt", text),
                            },
                            {
                                label: "Download Stats (JSON)",
                                icon: <Download />,
                                onClick: () => DownloadJsonFile("wordStats.json", analysis),
                            },
                            {
                                label: "Download Stats (TEXT)",
                                icon: <Table />,
                                onClick: () => DownloadTextFile("word-stats.txt", table),
                            },
                        ]}
                    />
                </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="w-full md:w-1/3 2xl:max-w-1/5 space-y-4 rounded-lg border p-4 bg-muted/30 h-110">
                <div>
                    <h2 className="text-sm font-semibold text-primary mb-2.5">Metrics</h2>

                    <p>Words: {analysis.words}</p>
                    <p>Characters: {analysis.characters}</p>
                    <p>Characters (no spaces): {analysis.charactersNoSpaces}</p>
                    <p>Lines: {analysis.lines}</p>
                    <p>Paragraphs: {analysis.paragraphs}</p>
                </div>

                <div>
                    <h3 className="text-sm font-semibold mt-4 text-primary mb-2.5">Reading Time</h3>
                    <p>Slow: {analysis.readingTime.slow}</p>
                    <p>Average: {analysis.readingTime.average}</p>
                    <p>Fast: {analysis.readingTime.fast}</p>
                </div>

                <div>
                    <h3 className="text-sm font-semibold mt-4 text-primary mb-2.5">
                        Speaking Time
                    </h3>
                    <p>Slow: {analysis.speakingTime.slow}</p>
                    <p>Average: {analysis.speakingTime.average}</p>
                    <p>Fast: {analysis.speakingTime.fast}</p>
                </div>
            </div>
        </section>
    );
}
