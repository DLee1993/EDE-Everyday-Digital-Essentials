// /lib/download.ts

import type { ColorExportData } from "@/lib/color-converter/colors";
import { NotifyUser } from "@/lib/global/notify-user";

/* -------------------------------------------------------
 * Generic download utilities
 * ----------------------------------------------------- */

export function DownloadTextFile(filename: string, text: string) {
    if (!text) {
        NotifyUser({ type: "Error", title: "Error - Nothing to Download" });
        return;
    }

    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();

    URL.revokeObjectURL(url);

    NotifyUser({ type: "Success", title: "Success - Downloaded" });
}

export function DownloadJsonFile(filename: string, data: unknown) {
    if (!data) {
        NotifyUser({ type: "Error", title: "Error - Nothing to Download" });
        return;
    }

    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();

    URL.revokeObjectURL(url);

    NotifyUser({ type: "Success", title: "Success - Downloaded JSON" });
}

export function DownloadBlobUrlFile(url: string, filename: string) {
    if (!url || !url.startsWith("blob:")) {
        NotifyUser({
            type: "Error",
            title: "Error - Invalid file URL",
        });
        return;
    }

    if (!filename) {
        NotifyUser({
            type: "Error",
            title: "Error - Invalid filename",
        });
        return;
    }

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();

    NotifyUser({
        type: "Success",
        title: "Success - File downloaded",
    });
}

/* -------------------------------------------------------
 * Color-specific download helpers (self-contained)
 * ----------------------------------------------------- */

export function DownloadCssVariablesFile(data: ColorExportData) {
    const lines: string[] = [];

    const add = (key: string, value: string | number | null | undefined) => {
        if (value !== null && value !== undefined) {
            lines.push(`--color-${key}: ${value};`);
        }
    };

    // Base values
    add("hex", data.hex);
    add("rgb", data.rgb);
    add("hsl", data.hsl);
    add("luminance", data.luminance);
    add("text-suggestion", data.bestText);

    // Tints & Shades
    data.palette.forEach((p, i) => add(`palette-${i}`, p.hex));

    // Complementary
    data.complementaryHarmonies.forEach((p, i) => add(`complementary-${i}`, p.hex));

    // Triadic
    data.triadicPalette.forEach((p, i) => add(`triadic-${i}`, p.hex));

    // Analogous
    data.analogousPalette.forEach((p, i) => add(`analogous-${i}`, p.hex));

    // Contrast
    if (data.wcag) {
        add("contrast-white", data.wcag.white.ratio);
        add("contrast-black", data.wcag.black.ratio);
    }

    const css = `:root {\n${lines.join("\n")}\n}`;

    DownloadTextFile("color-variables.css", css);
}

export function DownloadTailwindTokensFile(data: ColorExportData) {
    const tokens: Record<string, string> = {};

    // Base color
    if (data.hex) tokens["primary"] = data.hex;

    // Tints & Shades
    data.palette.forEach((p, i) => {
        tokens[`primary-${i}`] = p.hex;
    });

    // Complementary
    data.complementaryHarmonies.forEach((p, i) => {
        tokens[`primary-complementary-${i}`] = p.hex;
    });

    // Triadic
    data.triadicPalette.forEach((p, i) => {
        tokens[`primary-triadic-${i}`] = p.hex;
    });

    // Analogous
    data.analogousPalette.forEach((p, i) => {
        tokens[`primary-analogous-${i}`] = p.hex;
    });

    const tw = JSON.stringify(tokens, null, 2);
    DownloadTextFile("tailwind-colors.json", tw);
}
