import { useState, useMemo } from "react";
import { slugify } from "@/lib/slug-generator/slugify";
import { downloadTextFile, downloadJsonFile } from "@/lib/global/download";
import { Copy } from "@/lib/global/copy-to-clipboard";

export function useSlugGenerator() {
    const [input, setInput] = useState("");
    const [separator, setSeparator] = useState("-");
    const [maxLength, setMaxLength] = useState<number | null>(null);

    const slug = useMemo(() => {
        return slugify(input, {
            separator,
            maxLength,
        });
    }, [input, separator, maxLength]);

    const copy = () => Copy({ input: slug });

    const download = () => {
        downloadTextFile("slug.txt", slug);
    };

    const downloadJson = () => {
        downloadJsonFile("slug.json", { slug });
    };

    const copyJson = () => {
        Copy({ input: JSON.stringify({ slug }, null, 2) });
    };

    return {
        input,
        setInput,
        slug,
        separator,
        setSeparator,
        maxLength,
        setMaxLength,
        copy,
        download,
        downloadJson,
        copyJson,
    };
}
