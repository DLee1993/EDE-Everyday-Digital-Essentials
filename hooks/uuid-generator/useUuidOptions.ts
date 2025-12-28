"use client";

import { useState } from "react";

export function useUuidOptions() {
    const [count, setCount] = useState(5);
    const [length, setLength] = useState(36);
    const [hyphens, setHyphens] = useState(true);
    const [uppercase, setUppercase] = useState(false);
    const [prefix, setPrefix] = useState("");
    const [suffix, setSuffix] = useState("");
    const [format, setFormat] = useState("uuid");

    return {
        count,
        length,
        hyphens,
        uppercase,
        prefix,
        suffix,
        format,
        setCount,
        setLength,
        setHyphens,
        setUppercase,
        setPrefix,
        setSuffix,
        setFormat,
    };
}
