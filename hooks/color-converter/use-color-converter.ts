"use client";

import { useState, useMemo } from "react";
import {
    parseColor,
    generateTintsAndShades,
    getLuminance,
    ParsedColor,
    hslToHex,
    rotateHue,
    contrastRatio,
    ColorExportData
} from "@/lib/color-converter/colors";

export function useColorConverter() {
    const [rawInput, setRawInput] = useState("#1d4ed8");
    const [mode, setMode] = useState<"auto" | "hex" | "rgb" | "hsl">("auto");

    const parsed: ParsedColor | null = useMemo(() => {
        return parseColor(rawInput, mode);
    }, [rawInput, mode]);

    // Tints & Shades
    const palette = useMemo(() => {
        if (!parsed) return [];
        return generateTintsAndShades(parsed.hsl);
    }, [parsed]);

    // Complementary
    const complementary = useMemo(() => {
        if (!parsed) return [];
        const h = rotateHue(parsed.hsl.h, 180);
        return [{ label: "Complementary", hex: hslToHex({ ...parsed.hsl, h }) }];
    }, [parsed]);

    // Triadic
    const triadic = useMemo(() => {
        if (!parsed) return [];
        return [
            { label: "Triad 1", hex: hslToHex({ ...parsed.hsl, h: rotateHue(parsed.hsl.h, 120) }) },
            { label: "Triad 2", hex: hslToHex({ ...parsed.hsl, h: rotateHue(parsed.hsl.h, 240) }) },
        ];
    }, [parsed]);

    // Analogous
    const analogous = useMemo(() => {
        if (!parsed) return [];
        return [
            {
                label: "Analogous -30°",
                hex: hslToHex({ ...parsed.hsl, h: rotateHue(parsed.hsl.h, -30) }),
            },
            {
                label: "Analogous +30°",
                hex: hslToHex({ ...parsed.hsl, h: rotateHue(parsed.hsl.h, 30) }),
            },
        ];
    }, [parsed]);

    // Luminance
    const luminance = parsed ? getLuminance(parsed.rgb) : null;

    // Recommended text color
    const previewTextColor =
        luminance !== null ? (luminance > 0.5 ? "#000000" : "#ffffff") : "#000000";

    // UI strings
    const hex = parsed?.hex ?? "";
    const rgb = parsed ? `rgb(${parsed.rgb.r}, ${parsed.rgb.g}, ${parsed.rgb.b})` : "";
    const hsl = parsed
        ? `hsl(${Math.round(parsed.hsl.h)}, ${Math.round(parsed.hsl.s)}%, ${Math.round(
              parsed.hsl.l
          )}%)`
        : "";

    // WCAG contrast
    const contrast = useMemo(() => {
        if (luminance === null) return null;

        const whiteLum = 1;
        const blackLum = 0;

        const whiteContrast = contrastRatio(whiteLum, luminance);
        const blackContrast = contrastRatio(blackLum, luminance);

        return {
            white: {
                ratio: whiteContrast,
                AA: whiteContrast >= 4.5,
                AAA: whiteContrast >= 7,
            },
            black: {
                ratio: blackContrast,
                AA: blackContrast >= 4.5,
                AAA: blackContrast >= 7,
            },
        };
    }, [luminance]);

    // Unified export object
    const exportData: ColorExportData = useMemo(() => {
        if (!parsed) {
            return {
                input: rawInput,
                hex: null,
                rgb: null,
                hsl: null,
                luminance: null,
                textSuggestion: null,
                palette: [],
                complementary: [],
                triadic: [],
                analogous: [],
                contrast: null,
            };
        }

        return {
            input: rawInput,
            hex,
            rgb,
            hsl,
            luminance,
            textSuggestion:
                luminance !== null
                    ? luminance > 0.5
                        ? "Dark text recommended"
                        : "Light text recommended"
                    : null,
            palette,
            complementary,
            triadic,
            analogous,
            contrast,
        };
    }, [
        rawInput,
        parsed,
        luminance,
        palette,
        complementary,
        triadic,
        analogous,
        contrast,
        hex,
        hsl,
        rgb,
    ]);

    return {
        rawInput,
        setRawInput,
        mode,
        setMode,
        parsed,
        hex,
        rgb,
        hsl,
        palette,
        complementary,
        triadic,
        analogous,
        contrast,
        luminance,
        previewTextColor,
        exportData,
    };
}
