export type CaseMode =
    | "lowercase"
    | "uppercase"
    | "sentence"
    | "title"
    | "capitalized"
    | "inverse"
    | "snake"
    | "kebab"
    | "camel"
    | "pascal"
    | "constant";

export function transformTextCase(text: string, mode: CaseMode): string {
    switch (mode) {
        case "lowercase":
            return text.toLowerCase();

        case "uppercase":
            return text.toUpperCase();

        case "sentence":
            return toSentenceCase(text);

        case "title":
            return toTitleCase(text);

        case "capitalized":
            return toCapitalizedCase(text);

        case "inverse":
            return inverseCase(text);

        case "snake":
            return toSnakeCase(text);

        case "kebab":
            return toKebabCase(text);

        case "camel":
            return toCamelCase(text);

        case "pascal":
            return toPascalCase(text);

        case "constant":
            return toConstantCase(text);

        default:
            return text;
    }
}

/* -----------------------------
   CASE TRANSFORM FUNCTIONS
------------------------------ */

function toSentenceCase(text: string): string {
    if (!text.trim()) return text;
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

function toTitleCase(text: string): string {
    const smallWords = new Set([
        "a",
        "an",
        "the",
        "and",
        "or",
        "but",
        "of",
        "in",
        "on",
        "to",
        "for",
        "at",
        "by",
        "from",
        "the"
    ]);

    const words = text.toLowerCase().split(" ");

    return words
        .map((word, index) => {
            if (!word) return word;

            // Always capitalize first and last word
            if (index === 0 || index === words.length - 1) {
                return capitalizeWord(word);
            }

            // Lowercase small words in the middle
            return smallWords.has(word) ? word : capitalizeWord(word);
        })
        .join(" ");
}

function capitalizeWord(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function toCapitalizedCase(text: string): string {
    return text
        .split(" ")
        .map((word) => (word ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : ""))
        .join(" ");
}

function inverseCase(text: string): string {
    return [...text]
        .map((char) => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()))
        .join("");
}

/* -----------------------------
   DEVELOPER CASES
------------------------------ */

function normalizeWords(text: string): string[] {
    return text
        .replace(/[_\-]+/g, " ")
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .split(/\s+/)
        .filter(Boolean);
}

function toSnakeCase(text: string): string {
    return normalizeWords(text)
        .map((w) => w.toLowerCase())
        .join("_");
}

function toKebabCase(text: string): string {
    return normalizeWords(text)
        .map((w) => w.toLowerCase())
        .join("-");
}

function toCamelCase(text: string): string {
    const words = normalizeWords(text);
    if (words.length === 0) return "";
    return (
        words[0].toLowerCase() +
        words
            .slice(1)
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
            .join("")
    );
}

function toPascalCase(text: string): string {
    return normalizeWords(text)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join("");
}

function toConstantCase(text: string): string {
    return normalizeWords(text)
        .map((w) => w.toUpperCase())
        .join("_");
}
