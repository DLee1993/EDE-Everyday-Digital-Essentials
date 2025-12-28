/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { clampValues } from "@/lib/uuid-generator/validation";
import { generateIdentifier } from "@/lib/uuid-generator/identifiers";
import { UuidObject } from "@/types";

export function useUuidGenerator(options: any) {
    const [uuids, setUuids] = useState<UuidObject[]>([]);
    const [error, setError] = useState<string | null>(null);

    const generate = () => {
        const { safeCount, safeLength, safePrefix, safeSuffix, error } = clampValues(
            options.count,
            options.length,
            options.prefix,
            options.suffix
        );

        if (error) {
            setError(error);
            return;
        }

        const newIds = Array.from({ length: safeCount }, () =>
            generateIdentifier({
                format: options.format,
                length: safeLength,
                hyphens: options.hyphens,
                uppercase: options.uppercase,
                prefix: safePrefix,
                suffix: safeSuffix,
            })
        );

        setUuids(newIds);
    };

    const regenerateOne = (index: number) => {
        const { safeLength, safePrefix, safeSuffix } = clampValues(
            options.count,
            options.length,
            options.prefix,
            options.suffix
        );

        setUuids((prev) =>
            prev.map((u, i) => {
                if (i !== index) return u;

                // Generate a *new full identifier* using your existing function
                const newObj = generateIdentifier({
                    format: options.format,
                    length: safeLength,
                    hyphens: options.hyphens,
                    uppercase: options.uppercase,
                    prefix: safePrefix,
                    suffix: safeSuffix,
                });

                return newObj;
            })
        );
    };

    const deleteOne = (index: number) => {
        setUuids((prev) => prev.filter((_, i) => i !== index));
    };

    const deleteAll = () => setUuids([]);

    const downloadAll = () => {
        const fullList = uuids.map((u) => u.full).join("\n");
        const prefixList = uuids.map((u) => u.prefix).join("\n");
        const coreList = uuids.map((u) => u.id).join("\n");
        const suffixList = uuids.map((u) => u.suffix).join("\n");

        const text = [
            "FULL IDENTIFIERS",
            "----------------",
            fullList,
            "",
            "PREFIXES",
            "--------",
            prefixList,
            "",
            "CORES",
            "-----",
            coreList,
            "",
            "SUFFIXES",
            "--------",
            suffixList,
        ].join("\n");

        const blob = new Blob([text], { type: "text/plain" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "identifiers.txt";
        a.click();

        URL.revokeObjectURL(url);
    };

    const downloadJson = () => {
        const json = JSON.stringify(uuids, null, 2); // pretty-printed JSON

        const blob = new Blob([json], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "identifiers.json";
        a.click();

        URL.revokeObjectURL(url);
    };

    return {
        uuids,
        error,
        generate,
        regenerateOne,
        deleteOne,
        deleteAll,
        downloadAll,
        downloadJson
    };
}
