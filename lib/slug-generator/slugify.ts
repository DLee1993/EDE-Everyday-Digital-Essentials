export function slugify(
    input: string,
    options: {
        separator: string;
        maxLength: number | null;
    }
): string {
    let text = input.trim();

    // If separator is empty, default to "-"
    const separator = options.separator === "" ? "-" : options.separator;

    // Escape separator for safe use inside a character class
    const escapeForCharClass = (str: string) => str.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");

    const sep = escapeForCharClass(separator);

    // Unified symbol normalization map
    const SYMBOL_MAP: Record<string, string> = {
        "&": "and",
        "+": "plus",
        "@": "at",
        "%": "percent",
        $: "dollar",
        "£": "pound",
        "€": "euro",
        "#": "number",

        "/": "forward-slash",
        "\\": "back-slash",

        ":": "colon",
        ";": "semicolon",
        "|": "pipe",
        "=": "equals",

        "*": "asterisk",
        "!": "exclamation",
        "?": "question",

        '"': "quote",
        "'": "apostrophe",

        "(": "left-parenthesis",
        ")": "right-parenthesis",
        "[": "left-bracket",
        "]": "right-bracket",
        "{": "left-brace",
        "}": "right-brace",

        "<": "less-than",
        ">": "greater-than",
        "^": "caret",
        "~": "tilde",
        "`": "backtick",
    };

    // Replace only the symbols, not letters
    const symbolRegex = new RegExp(
        `[${Object.keys(SYMBOL_MAP)
            .map((s) => "\\" + s)
            .join("")}]`,
        "g"
    );

    text = text.replace(symbolRegex, (match) => ` ${SYMBOL_MAP[match]} `);

    // Remove emoji
    text = text.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "");

    // Always lowercase
    text = text.toLowerCase();

    // Allow all Unicode letters, numbers, whitespace, and the separator
    const allowed = new RegExp(`[^\\p{L}\\p{N}\\s${sep}]`, "gu");
    text = text.replace(allowed, "");

    // Replace whitespace with separator
    text = text.replace(/\s+/g, separator);

    // Collapse duplicate separators
    const dupes = new RegExp(`${sep}+`, "g");
    text = text.replace(dupes, separator);

    // Trim separators
    const edge = new RegExp(`^${sep}|${sep}$`, "g");
    text = text.replace(edge, "");

    // Enforce max length
    if (options.maxLength !== null) {
        text = text.slice(0, options.maxLength);
    }

    return text;
}
