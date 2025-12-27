"use client";

import { useLoremIpsum } from "@/hooks/lorum-ipsum-generator/useLorumIpsum";
import { LoremOptions } from "@/components/lorum-ipsum-generator/Options";
import { LoremOutput } from "@/components/lorum-ipsum-generator/Output";

export default function LoremIpsumGenerator() {
    const {
        paragraphs,
        sentences,
        minWords,
        maxWords,
        output,

        setParagraphs,
        setSentences,
        setMinWords,
        setMaxWords,

        generate,
        clear,
    } = useLoremIpsum();

    return (
        <section className="w-full max-w-4xl space-y-10">
            <LoremOptions
                paragraphs={paragraphs}
                sentences={sentences}
                minWords={minWords}
                maxWords={maxWords}
                setParagraphs={setParagraphs}
                setSentences={setSentences}
                setMinWords={setMinWords}
                setMaxWords={setMaxWords}
            />

            <LoremOutput output={output} onGenerate={generate} onClear={clear} />
        </section>
    );
}
