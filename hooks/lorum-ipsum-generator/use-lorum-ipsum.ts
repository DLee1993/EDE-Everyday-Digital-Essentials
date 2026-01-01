import { useState } from "react";
import { generateLorem } from "@/lib/lorum-ipsum-generator/generate";

export function useLoremIpsum() {
    const [paragraphs, setParagraphs] = useState<number>(3);
    const [sentences, setSentences] = useState<number>(5);
    const [minWords, setMinWords] = useState<number>(4);
    const [maxWords, setMaxWords] = useState<number>(12);
    const [output, setOutput] = useState<string>("");
    
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
        clear,
        generate,
        setParagraphs,
        setSentences,
        setMinWords,
        setMaxWords,
    };
}
