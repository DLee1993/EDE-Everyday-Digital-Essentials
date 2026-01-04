/* -------------------------------------------------------
 * Types
 * ----------------------------------------------------- */

export type RGB = { r: number; g: number; b: number };
export type HSL = { h: number; s: number; l: number };

export type ParsedColor = {
    hex: string;
    rgb: RGB;
    hsl: HSL;
};

export type ColorExportData = {
    input: string;
    hex: string | null;
    rgb: string | null;
    hsl: string | null;
    luminance: number | null;
    textSuggestion: string | null;

    palette: { label: string; hex: string }[];
    complementary: { label: string; hex: string }[];
    triadic: { label: string; hex: string }[];
    analogous: { label: string; hex: string }[];

    contrast: {
        white: { ratio: number; AA: boolean; AAA: boolean };
        black: { ratio: number; AA: boolean; AAA: boolean };
    } | null;
};

/* -------------------------------------------------------
 * Public API
 * ----------------------------------------------------- */

export function parseColor(
    input: string,
    mode: "auto" | "hex" | "rgb" | "hsl"
): ParsedColor | null {
    const value = input.trim();
    let rgb: RGB | null = null;

    if (mode === "hex" || (mode === "auto" && isHexLike(value))) {
        rgb = hexToRgb(normalizeHex(value));
    } else if (mode === "rgb" || (mode === "auto" && value.toLowerCase().startsWith("rgb"))) {
        rgb = parseRgb(value);
    } else if (mode === "hsl" || (mode === "auto" && value.toLowerCase().startsWith("hsl"))) {
        const hsl = parseHsl(value);
        if (!hsl) return null;
        rgb = hslToRgb(hsl);
    } else if (mode === "auto") {
        rgb = cssColorNameToRgb(value);
    }

    if (!rgb) return null;

    const hex = rgbToHex(rgb);
    const hsl = rgbToHsl(rgb);

    return { hex, rgb, hsl };
}

export function generateTintsAndShades(hsl: HSL) {
    const results: { label: string; hex: string }[] = [];

    // Shades (darker)
    for (let i = 1; i <= 5; i++) {
        const l = Math.max(0, hsl.l - i * 10);
        results.push({
            label: `Shade ${i}`,
            hex: rgbToHex(hslToRgb({ ...hsl, l })),
        });
    }

    // Tints (lighter)
    for (let i = 1; i <= 5; i++) {
        const l = Math.min(100, hsl.l + i * 10);
        results.push({
            label: `Tint ${i}`,
            hex: rgbToHex(hslToRgb({ ...hsl, l })),
        });
    }

    return results;
}

export function getLuminance({ r, g, b }: RGB) {
    const toLinear = (v: number) => {
        const n = v / 255;
        return n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
    };

    return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

/* -------------------------------------------------------
 * HEX
 * ----------------------------------------------------- */

export function isHexLike(value: string) {
    const v = value.startsWith("#") ? value.slice(1) : value;
    return /^[0-9a-fA-F]{3}$/.test(v) || /^[0-9a-fA-F]{6}$/.test(v);
}

export function normalizeHex(value: string) {
    let v = value.trim();
    if (!v.startsWith("#")) v = `#${v}`;
    if (v.length === 4) {
        const r = v[1];
        const g = v[2];
        const b = v[3];
        return `#${r}${r}${g}${g}${b}${b}`;
    }
    return v.toLowerCase();
}

export function hexToRgb(hex: string): RGB | null {
    const clean = hex.replace("#", "");
    if (clean.length !== 6) return null;

    const r = parseInt(clean.slice(0, 2), 16);
    const g = parseInt(clean.slice(2, 4), 16);
    const b = parseInt(clean.slice(4, 6), 16);

    if ([r, g, b].some((n) => Number.isNaN(n))) return null;

    return { r, g, b };
}

export function rgbToHex({ r, g, b }: RGB) {
    const toHex = (n: number) => n.toString(16).padStart(2, "0");
    return `#${toHex(clamp(r))}${toHex(clamp(g))}${toHex(clamp(b))}`;
}

/* -------------------------------------------------------
 * RGB
 * ----------------------------------------------------- */

export function parseRgb(value: string): RGB | null {
    const match = value.match(/rgb\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/i);
    if (!match) return null;

    const r = Number(match[1]);
    const g = Number(match[2]);
    const b = Number(match[3]);

    if ([r, g, b].some((n) => n < 0 || n > 255)) return null;

    return { r, g, b };
}

/* -------------------------------------------------------
 * HSL
 * ----------------------------------------------------- */

export function parseHsl(value: string): HSL | null {
    const match = value.match(
        /hsl\s*\(\s*(-?\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)%\s*,\s*(\d+(?:\.\d+)?)%\s*\)/i
    );
    if (!match) return null;

    const h = Number(match[1]);
    const s = Number(match[2]);
    const l = Number(match[3]);

    if ([s, l].some((n) => n < 0 || n > 100)) return null;

    return { h, s, l };
}

export function rgbToHsl({ r, g, b }: RGB): HSL {
    const rn = r / 255;
    const gn = g / 255;
    const bn = b / 255;

    const max = Math.max(rn, gn, bn);
    const min = Math.min(rn, gn, bn);
    const delta = max - min;

    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (delta !== 0) {
        s = delta / (1 - Math.abs(2 * l - 1));

        switch (max) {
            case rn:
                h = ((gn - bn) / delta) % 6;
                break;
            case gn:
                h = (bn - rn) / delta + 2;
                break;
            case bn:
                h = (rn - gn) / delta + 4;
                break;
        }

        h *= 60;
        if (h < 0) h += 360;
    }

    return { h, s: s * 100, l: l * 100 };
}

export function hslToRgb({ h, s, l }: HSL): RGB {
    const sN = s / 100;
    const lN = l / 100;

    if (sN === 0) {
        const v = Math.round(lN * 255);
        return { r: v, g: v, b: v };
    }

    const c = (1 - Math.abs(2 * lN - 1)) * sN;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = lN - c / 2;

    let r = 0,
        g = 0,
        b = 0;

    if (h < 60) [r, g, b] = [c, x, 0];
    else if (h < 120) [r, g, b] = [x, c, 0];
    else if (h < 180) [r, g, b] = [0, c, x];
    else if (h < 240) [r, g, b] = [0, x, c];
    else if (h < 300) [r, g, b] = [x, 0, c];
    else [r, g, b] = [c, 0, x];

    return {
        r: Math.round((r + m) * 255),
        g: Math.round((g + m) * 255),
        b: Math.round((b + m) * 255),
    };
}

export function hslToHex({ h, s, l }: HSL) {
    return rgbToHex(hslToRgb({ h, s, l }));
}

/* -------------------------------------------------------
 * CSS Color Names
 * ----------------------------------------------------- */

export function cssColorNameToRgb(name: string): RGB | null {
    if (typeof window === "undefined") return null;

    const el = document.createElement("div");
    el.style.color = name;
    document.body.appendChild(el);

    const computed = getComputedStyle(el).color;
    document.body.removeChild(el);

    return parseRgb(computed);
}

/* -------------------------------------------------------
 * Helpers
 * ----------------------------------------------------- */

function clamp(n: number, min = 0, max = 255) {
    return Math.min(max, Math.max(min, Math.round(n)));
}

export function rotateHue(h: number, amount: number) {
    return (h + amount + 360) % 360;
}

export function contrastRatio(l1: number, l2: number) {
    const a = l1 + 0.05;
    const b = l2 + 0.05;
    return l1 > l2 ? a / b : b / a;
}
