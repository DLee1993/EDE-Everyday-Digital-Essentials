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
    ColorExportData,
} from "@/lib/color-converter/colors";

export function useColorConverter() {
    const [rawInput, setRawInput] = useState("#1d4ed8");
    const [mode, setMode] = useState<"auto" | "hex" | "rgb" | "hsl">("auto");

    const parsed: ParsedColor | null = useMemo(() => {
        return parseColor(rawInput, mode);
    }, [rawInput, mode]);

    // -----------------------------
    // Tints & Shades (Main Card)
    // -----------------------------
    const palette = useMemo(() => {
        if (!parsed) return [];
        return generateTintsAndShades(parsed.hsl);
    }, [parsed]);

    // -----------------------------
    // Complementary Harmonies
    // -----------------------------
    const complementaryHarmonies = useMemo(() => {
        if (!parsed) return [];

        return [
            { label: "Base", hex: parsed.hex },
            {
                label: "Complementary 180°",
                hex: hslToHex({ ...parsed.hsl, h: rotateHue(parsed.hsl.h, 180) }),
            },
            {
                label: "Split -150°",
                hex: hslToHex({ ...parsed.hsl, h: rotateHue(parsed.hsl.h, -150) }),
            },
            {
                label: "Split +150°",
                hex: hslToHex({ ...parsed.hsl, h: rotateHue(parsed.hsl.h, 150) }),
            },
        ];
    }, [parsed]);

    // -----------------------------
    // Analogous Palette
    // -----------------------------
    const analogousPalette = useMemo(() => {
        if (!parsed) return [];

        return [
            { label: "Base", hex: parsed.hex },
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

    // -----------------------------
    // Triadic Palette
    // -----------------------------
    const triadicPalette = useMemo(() => {
        if (!parsed) return [];

        return [
            { label: "Base", hex: parsed.hex },
            {
                label: "Triad +120°",
                hex: hslToHex({ ...parsed.hsl, h: rotateHue(parsed.hsl.h, 120) }),
            },
            {
                label: "Triad +240°",
                hex: hslToHex({ ...parsed.hsl, h: rotateHue(parsed.hsl.h, 240) }),
            },
        ];
    }, [parsed]);

    // -----------------------------
    // Tetradic Palette
    // -----------------------------
    const tetradicPalette = useMemo(() => {
        if (!parsed) return [];

        return [
            { label: "Base", hex: parsed.hex },
            {
                label: "Tetradic +90°",
                hex: hslToHex({ ...parsed.hsl, h: rotateHue(parsed.hsl.h, 90) }),
            },
            {
                label: "Tetradic +180°",
                hex: hslToHex({ ...parsed.hsl, h: rotateHue(parsed.hsl.h, 180) }),
            },
            {
                label: "Tetradic +270°",
                hex: hslToHex({ ...parsed.hsl, h: rotateHue(parsed.hsl.h, 270) }),
            },
        ];
    }, [parsed]);

    // -----------------------------
    // Monochromatic Palette
    // -----------------------------
    const monochromaticPalette = useMemo(() => {
        if (!parsed) return [];
        const { h, s, l } = parsed.hsl;

        return [
            { label: "Base", hex: parsed.hex },
            { label: "Lighten 15%", hex: hslToHex({ h, s, l: Math.min(100, l + 15) }) },
            { label: "Lighten 30%", hex: hslToHex({ h, s, l: Math.min(100, l + 30) }) },
            { label: "Darken 15%", hex: hslToHex({ h, s, l: Math.max(0, l - 15) }) },
            { label: "Darken 30%", hex: hslToHex({ h, s, l: Math.max(0, l - 30) }) },
        ];
    }, [parsed]);

    // -----------------------------
    // Luminance
    // -----------------------------
    const luminance = parsed ? getLuminance(parsed.rgb) : null;

    const previewTextColor =
        luminance !== null ? (luminance > 0.5 ? "#000000" : "#ffffff") : "#000000";

    // -----------------------------
    // UI Strings
    // -----------------------------
    const hex = parsed?.hex ?? "";
    const rgb = parsed ? `rgb(${parsed.rgb.r}, ${parsed.rgb.g}, ${parsed.rgb.b})` : "";
    const hsl = parsed
        ? `hsl(${Math.round(parsed.hsl.h)}, ${Math.round(parsed.hsl.s)}%, ${Math.round(
              parsed.hsl.l
          )}%)`
        : "";

    // -----------------------------
    // WCAG Contrast
    // -----------------------------
    const wcag = useMemo(() => {
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

    // -----------------------------
    // Best Text Color
    // -----------------------------
    const bestText = useMemo<"white" | "black" | null>(() => {
        if (!wcag) return null;
        return wcag.white.ratio > wcag.black.ratio ? "white" : "black";
    }, [wcag]);

    // -----------------------------
    // Color Blindness Simulations
    // -----------------------------
    const simulations = useMemo(
        () =>
            parsed
                ? [
                      { type: "Protanopia", hex: parsed.hex },
                      { type: "Deuteranopia", hex: parsed.hex },
                      { type: "Tritanopia", hex: parsed.hex },
                  ]
                : [],
        [parsed]
    );

    // -----------------------------
    // HSL Object (Hue Wheel)
    // -----------------------------
    const hslObject = parsed?.hsl ?? null;

    // -----------------------------
    // Export Data
    // -----------------------------
    const exportData: ColorExportData = useMemo(() => {
        if (!parsed) {
            return {
                input: rawInput,
                hex: null,
                rgb: null,
                hsl: null,
                luminance: null,
                palette: [],
                complementaryHarmonies: [],
                analogousPalette: [],
                triadicPalette: [],
                tetradicPalette: [],
                monochromaticPalette: [],
                wcag: null,
                bestText: null,
                simulations: [],
                hslObject: null,
            };
        }

        return {
            input: rawInput,
            hex,
            rgb,
            hsl,
            luminance,
            palette,
            complementaryHarmonies,
            analogousPalette,
            triadicPalette,
            tetradicPalette,
            monochromaticPalette,
            wcag,
            bestText,
            simulations,
            hslObject,
        };
    }, [
        rawInput,
        parsed,
        luminance,
        palette,
        complementaryHarmonies,
        analogousPalette,
        triadicPalette,
        tetradicPalette,
        monochromaticPalette,
        wcag,
        bestText,
        simulations,
        hslObject,
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
        complementaryHarmonies,
        analogousPalette,
        triadicPalette,
        tetradicPalette,
        monochromaticPalette,
        wcag,
        bestText,
        simulations,
        hslObject,
        luminance,
        previewTextColor,
        exportData,
    };
}
