"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction } from "react";

type LoremOptionsProps = {
    paragraphs: number;
    sentences: number;
    minWords: number;
    maxWords: number;
    setParagraphs: Dispatch<SetStateAction<number>>;
    setSentences: Dispatch<SetStateAction<number>>;
    setMinWords: Dispatch<SetStateAction<number>>;
    setMaxWords: Dispatch<SetStateAction<number>>;
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
}: LoremOptionsProps) {
    return (
        <section className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <fieldset className="md:max-w-72 flex justify-between items-end gap-5">
                    <Label htmlFor="paragraphs">Number of paragraphs</Label>
                    <Input
                        id="paragraphs"
                        type="number"
                        min={1}
                        max={20}
                        value={paragraphs}
                        onChange={(e) => setParagraphs(Number(e.target.value))}
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
                        onChange={(e) => setSentences(Number(e.target.value))}
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
                        onChange={(e) => setMinWords(Number(e.target.value))}
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
                        onChange={(e) => setMaxWords(Number(e.target.value))}
                        className="bg-transparent! border-x-0 border-t-0 w-16"
                    />
                </fieldset>
            </div>
        </section>
    );
}
