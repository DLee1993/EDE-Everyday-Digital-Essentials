// lib/identifiers.ts
const base62Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function generateBase62(length: number) {
    return Array.from({ length }, () =>
        base62Chars.charAt(Math.floor(Math.random() * base62Chars.length))
    ).join("");
}

export function generateBase36(length: number) {
    let result = "";
    while (result.length < length) {
        result += Math.random().toString(36).slice(2);
    }
    return result.slice(0, length);
}

export function generateUUIDv4(length: number, hyphens: boolean, uppercase: boolean) {
    let uuid = crypto.randomUUID();
    if (!hyphens) uuid = uuid.replace(/-/g, "");
    if (length > 0) uuid = uuid.slice(0, length);
    if (uppercase) {
        uuid = uuid
            .split("")
            .map((char) =>
                /[a-f]/i.test(char) && Math.random() < 0.5 ? char.toUpperCase() : char.toLowerCase()
            )
            .join("");
    }
    return uuid;
}

export function generateIdentifier({
    format,
    length,
    hyphens,
    uppercase,
    prefix,
    suffix,
}: {
    format: string;
    length: number;
    hyphens: boolean;
    uppercase: boolean;
    prefix: string;
    suffix: string;
}) {
    let id = "";

    switch (format) {
        case "uuid":
            id = generateUUIDv4(length, hyphens, uppercase);
            break;
        case "base36":
            id = generateBase36(length);
            break;
        case "base62":
            id = generateBase62(length);
            break;
        default:
            id = generateUUIDv4(length, hyphens, uppercase);
    }

    const prefixPart = prefix ? `${prefix}-` : "";
    const suffixPart = suffix ? `-${suffix}` : "";

    return {
        full: `${prefixPart}${id}${suffixPart}`,
        prefix,
        id,
        suffix,
    };
}
