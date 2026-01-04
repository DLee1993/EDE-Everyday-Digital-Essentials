"use client";

import { PaletteCard } from "@/components/color-converter/shared-palette-layout";


interface HarmonyItem {
    label: string;
    hex: string;
}

interface Props {
    colors: HarmonyItem[];
}

// -----------------------------
// Complementary
// -----------------------------
export function ComplementaryHarmoniesCard({ colors }: Props) {
    return (
        <PaletteCard
            title="Complementary Harmonies"
            description="Base, complementary, and split‑complementary hues derived from your selected color."
            colors={colors}
        />
    );
}

// -----------------------------
// Analogous
// -----------------------------
export function AnalogousPaletteCard({ colors }: Props) {
    return (
        <PaletteCard
            title="Analogous Palette"
            description="Colors adjacent on the color wheel, ideal for smooth gradients and cohesive UI themes."
            colors={colors}
        />
    );
}

// -----------------------------
// Triadic
// -----------------------------
export function TriadicPaletteCard({ colors }: Props) {
    return (
        <PaletteCard
            title="Triadic Palette"
            description="Three evenly spaced hues forming a balanced and vibrant color scheme."
            colors={colors}
        />
    );
}

// -----------------------------
// Tetradic
// -----------------------------
export function TetradicPaletteCard({ colors }: Props) {
    return (
        <PaletteCard
            title="Tetradic Palette"
            description="Four hues forming a rectangle on the color wheel, offering rich contrast and variety."
            colors={colors}
        />
    );
}

// -----------------------------
// Monochromatic
// -----------------------------
export function MonochromaticPaletteCard({ colors }: Props) {
    return (
        <PaletteCard
            title="Monochromatic Palette"
            description="Lightened and darkened variations of the base color for cohesive UI states."
            colors={colors}
        />
    );
}
