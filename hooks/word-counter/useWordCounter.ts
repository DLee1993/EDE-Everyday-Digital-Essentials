import { useMemo, useState } from "react";
import { analyzeText } from "@/lib/word-counter/analyzeText";
import { cleanFormatting } from "@/lib/word-counter/cleanFormatting";
import { createStatsTable } from "@/lib/word-counter/createStatsTable";

import { Copy } from "@/lib/global/copy-to-clipboard";
import { downloadTextFile, downloadJsonFile } from "@/lib/global/download";
import { TextAnalysis } from "@/types";

export function useWordCounter() {
    const [text, setText] = useState("");

    const analysis: TextAnalysis = useMemo(() => analyzeText(text), [text]);

    const reset = () => setText("");

    const clearFormattingAction = () => {
        setText((t) => cleanFormatting(t));
    };

    const actions = {
        copyText: () => Copy({ input: text }),
        downloadText: () => downloadTextFile("text.txt", text),

        copyStats: () => Copy({ input: JSON.stringify(analysis, null, 2) }),
        downloadStats: () => downloadJsonFile("word-stats.json", analysis),

        downloadTable: () => {
            const table = createStatsTable(analysis);
            downloadTextFile("word-stats.txt", table);
        },
    };

    return {
        text,
        setText,
        analysis,
        reset,
        clearFormattingAction,
        actions,
    };
}
