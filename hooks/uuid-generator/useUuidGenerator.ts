/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { clampValues } from "@/lib/uuid-generator/validation";
import { generateIdentifier } from "@/lib/uuid-generator/identifiers";
import { UuidObject } from "@/types";
import { downloadTextFile } from "@/lib/global/download";

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
        const prefix = uuids[0]?.prefix ?? "";
        const suffix = uuids[0]?.suffix ?? "";
        const coreList = uuids.map((u) => u.id).join("\n");

        const text = [
            `PREFIX - ${prefix}`,
            `SUFFIX - ${suffix}`,
            "",
            "",
            "FULL IDENTIFIERS",
            "",
            fullList,
            "",
            "",
            "ID",
            "",
            coreList,
        ].join("\n");

        downloadTextFile("identifiers.txt", text);
    };

    return {
        uuids,
        error,
        generate,
        regenerateOne,
        deleteOne,
        deleteAll,
        downloadAll,
    };
}
