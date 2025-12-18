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
    if (uppercase) uuid = uuid.toUpperCase();
    return uuid;
}
