"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type Props = {
    paragraphs: number;
    sentences: number;
    minWords: number;
    maxWords: number;

    setParagraphs: (n: number) => void;
    setSentences: (n: number) => void;
    setMinWords: (n: number) => void;
    setMaxWords: (n: number) => void;
};

export function LoremOptions({
    paragraphs,
    sentences,
    minWords,
    maxWords,
    setParagraphs,
    setSentences,
    setMinWords,
    setMaxWords,
}: Props) {
    return (
        <section className="w-full">
            <p className="text-sm text-primary font-medium mb-2.5">Generation Options</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
        </section>
    );
}
