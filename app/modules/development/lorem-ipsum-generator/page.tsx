"use client";

import { useState } from "react";
import { Copy } from "@/lib/global/copy-to-clipboard";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const words = [
    "lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "sed",
    "do",
    "eiusmod",
    "tempor",
    "incididunt",
    "ut",
    "labore",
    "et",
    "dolore",
    "magna",
    "aliqua",
    "enim",
    "minim",
    "veniam",
    "quis",
    "nostrud",
    "exercitation",
    "ullamco",
    "laboris",
    "nisi",
    "aliquip",
    "ex",
    "ea",
    "commodo",
    "consequat",
];

export default function LorumIpsumGenerator() {
    const [paragraphs, setParagraphs] = useState(3);
    const [sentences, setSentences] = useState(5);
    const [minWords, setMinWords] = useState(4);
    const [maxWords, setMaxWords] = useState(12);
    const [output, setOutput] = useState("");

    function generateLorem(
        paragraphs: number,
        sentences: number,
        minWords: number,
        maxWords: number
    ) {
        const result: string[] = [];
        for (let p = 0; p < paragraphs; p++) {
            const sentencesArr: string[] = [];
            for (let s = 0; s < sentences; s++) {
                const sentenceLength =
                    Math.floor(Math.random() * (maxWords - minWords + 1)) + minWords;
                const sentence = Array.from(
                    { length: sentenceLength },
                    () => words[Math.floor(Math.random() * words.length)]
                ).join(" ");
                sentencesArr.push(sentence.charAt(0).toUpperCase() + sentence.slice(1) + ".");
            }
            result.push(sentencesArr.join(" "));
        }
        return result.join("\n\n");
    }

    return (
        <section>
            <div className="w-full max-w-4xl space-y-10">
                <div>
                    <p className="text-sm text-accent font-medium mb-2.5">Generation Options</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-5">
                        <fieldset className="md:max-w-72 flex justify-between items-end gap-5">
                            <Label htmlFor="paragraphs">Number of paragraphs</Label>
                            <Input
                                id="paragraphs"
                                type="number"
                                min={1}
                                max={20}
                                value={paragraphs}
                                onChange={(e) => setParagraphs(+e.target.value)}
                                className="bg-transparent! border-x-0 border-t-0 w-16"
                            />
                        </fieldset>

                        <fieldset className="md:max-w-72 flex justify-between items-end gap-5">
                            <Label htmlFor="sentences">Sentences per paragraph</Label>
                            <Input
                                id="sentences"
                                type="number"
                                min={1}
                                max={15}
                                value={sentences}
                                onChange={(e) => setSentences(+e.target.value)}
                                className="bg-transparent! border-x-0 border-t-0 w-16"
                            />
                        </fieldset>

                        <fieldset className="md:max-w-72 flex justify-between items-end gap-5">
                            <Label htmlFor="minWords">Min words per sentence</Label>
                            <Input
                                id="minWords"
                                type="number"
                                min={2}
                                max={20}
                                value={minWords}
                                onChange={(e) => setMinWords(+e.target.value)}
                                className="bg-transparent! border-x-0 border-t-0 w-16"
                            />
                        </fieldset>

                        <fieldset className="md:max-w-72 flex justify-between items-end gap-5">
                            <Label htmlFor="maxWords">Max words per sentence</Label>
                            <Input
                                id="maxWords"
                                type="number"
                                min={2}
                                max={20}
                                value={maxWords}
                                onChange={(e) => setMaxWords(+e.target.value)}
                                className="bg-transparent! border-x-0 border-t-0 w-16"
                            />
                        </fieldset>
                    </div>
                </div>

                <Textarea className="resize-none w-full h-52" value={output} readOnly rows={10} />
                <div className="max-w-sm flex justify-between items-center gap-2">
                    <Button
                        className="flex-1"
                        onClick={() =>
                            setOutput(generateLorem(paragraphs, sentences, minWords, maxWords))
                        }
                    >
                        Generate
                    </Button>
                    <Button
                        className="flex-1"
                        variant="secondary"
                        onClick={() => Copy({ input: output })}
                    >
                        Copy to clipboard
                    </Button>
                    <Button className="flex-1" variant="secondary" onClick={() => setOutput("")}>
                        Clear
                    </Button>
                </div>
            </div>
        </section>
    );
}
