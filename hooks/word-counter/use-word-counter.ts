import { useCallback, useMemo, useState } from "react";
import { analyzeText } from "@/lib/word-counter/analyze-text";
import { cleanFormatting } from "@/lib/word-counter/clean-formatting";
import { createStatsTable } from "@/lib/word-counter/create-stats-table";

type TextAnalysis = {
    words: number;
    characters: number;
    charactersNoSpaces: number;
    lines: number;
    paragraphs: number;
    readingTime: {
        slow: string;
        average: string;
        fast: string;
    };
    speakingTime: {
        slow: string;
        average: string;
        fast: string;
    };
};


export function useWordCounter() {
    const [text, setText] = useState("");

    const analysis: TextAnalysis = useMemo(() => analyzeText(text), [text]);
    const table = useMemo(() => createStatsTable(analysis), [analysis]);

    const clearFormattingAction = () => {
        setText((t) => cleanFormatting(t));
    };

    const reset = useCallback(() => {
        setText("");
    }, []);

    return {
        text,
        analysis,
        table,
        setText,
        clearFormattingAction,
        reset
    };
}
