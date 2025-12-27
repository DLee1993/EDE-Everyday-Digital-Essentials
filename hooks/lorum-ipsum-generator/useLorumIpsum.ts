"use client";

import { useState } from "react";
import { generateLorem } from "@/lib/lorum-ipsum-generator/generate";

export function useLoremIpsum() {
    const [paragraphs, setParagraphs] = useState(3);
    const [sentences, setSentences] = useState(5);
    const [minWords, setMinWords] = useState(4);
    const [maxWords, setMaxWords] = useState(12);
    const [output, setOutput] = useState("");

    const generate = () => {
        setOutput(generateLorem(paragraphs, sentences, minWords, maxWords));
    };

    const clear = () => setOutput("");

    return {
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
    };
}
