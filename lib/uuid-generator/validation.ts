// lib/validation.ts
export function clampValues(count: number, length: number, prefix: string, suffix: string) {
    const safeCount = Math.min(Math.max(count, 1), 50);
    const safeLength = Math.min(Math.max(length, 1), 36);
    const safePrefix = prefix.slice(0, 20);
    const safeSuffix = suffix.slice(0, 20);

    let error: string | null = null;
    if (count > 50) error = "Maximum allowed is 50 identifiers per batch.";
    else if (length > 36) error = "Maximum length is 36 characters.";
    else if (prefix.length > 20 || suffix.length > 20)
        error = "Prefix and suffix are limited to 20 characters.";

    return { safeCount, safeLength, safePrefix, safeSuffix, error };
}
