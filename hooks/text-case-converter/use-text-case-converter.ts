"use client";

import { useState, useMemo } from "react";
import { transformTextCase, CaseMode } from "@/lib/text-case-converter/transform";

export function useTextCase() {
    const [input, setInput] = useState("");
    const [mode, setMode] = useState<CaseMode>("lowercase");

    const output = useMemo(() => {
        return transformTextCase(input, mode);
    }, [input, mode]);

    return {
        input,
        setInput,
        mode,
        setMode,
        output,
    };
}

export const caseOptions: { label: string; example: string; value: CaseMode }[] = [
    { label: "Lowercase", example: "cc", value: "lowercase" },
    { label: "Uppercase", example: "CC", value: "uppercase" },
    { label: "Sentence Case", example: "Cc", value: "sentence" },
    { label: "Title Case", example: "Tt", value: "title" },
    { label: "Capitalized Case", example: "Cc", value: "capitalized" },
    { label: "Inverse Case", example: "cC", value: "inverse" },
    { label: "Snake Case", example: "c_c", value: "snake" },
    { label: "Kebab Case", example: "c-c", value: "kebab" },
    { label: "Camel Case", example: "cC", value: "camel" },
    { label: "Pascal Case", example: "Cc", value: "pascal" },
    { label: "Constant Case", example: "C_C", value: "constant" },
] as const;
