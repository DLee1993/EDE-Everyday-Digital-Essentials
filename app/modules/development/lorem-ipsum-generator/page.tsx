"use client";

import { LoremOptions } from "@/components/lorum-ipsum-generator/Options";
import { LoremOutput } from "@/components/lorum-ipsum-generator/Output";
import { useLoremIpsum } from "@/hooks/lorum-ipsum-generator/useLorumIpsum";

export default function LoremIpsumGenerator() {
    const {
        paragraphs,
        sentences,
        minWords,
        maxWords,
        setParagraphs,
        setSentences,
        setMinWords,
        setMaxWords,
        generate,
        clear,
        output,
    } = useLoremIpsum();

    return (
        <section className="space-y-10">
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

            <LoremOutput generate={generate} clear={clear} output={output} />
        </section>
    );
}
