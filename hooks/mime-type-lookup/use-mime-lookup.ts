import { useState, useMemo } from "react";
import { lookup as extToMime, extension as mimeToExt } from "mime-types";
import rawMimeDirectory from "@/data/mime-type-lookup/extended-mime-directory.json";

// 👇 Add this type (or import it if you already created it)
type MimeMeta = {
    extension: string | null;
    category: string;
    aliases: string[];
    description: string;
};

// 👇 Cast the JSON so TS allows string indexing
const mimeDirectory = rawMimeDirectory as Record<string, MimeMeta>;

export function useMimeLookup() {
    const [query, setQuery] = useState("");

    const result = useMemo(() => {
        if (!query.trim()) return null;

        const input = query.trim().toLowerCase().replace(/^\./, "");

        let mime = "";
        let ext = "";

        // Detect MIME vs extension
        if (input.includes("/")) {
            mime = input;
            ext = mimeToExt(mime) || "";
        } else {
            ext = input;
            mime = extToMime(ext) || "";
        }

        // Pull metadata (or fallback)
        const meta = mimeDirectory[mime] || {
            extension: ext || null,
            category: "Other",
            aliases: [],
            description: "No description available.",
        };

        return {
            extension: meta.extension || ext || null,
            mime: mime || null,
            category: meta.category,
            aliases: meta.aliases,
            description: meta.description,
        };
    }, [query]);

    return {
        query,
        setQuery,
        result,
    };
}
