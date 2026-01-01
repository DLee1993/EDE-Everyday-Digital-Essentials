import { useState, useMemo } from "react";
import { slugify } from "@/lib/slug-generator/slugify";

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

    return {
        input,
        setInput,
        slug,
        separator,
        setSeparator,
        maxLength,
        setMaxLength,
    };
}
