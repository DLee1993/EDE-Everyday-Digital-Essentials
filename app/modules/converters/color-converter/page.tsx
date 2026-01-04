"use client";

import { useColorConverter } from "@/hooks/color-converter/use-color-converter";
import ColorInput from "@/components/color-converter/color-input";
import ColorValues from "@/components/color-converter/values";
import ColorPreview from "@/components/color-converter/color-preview";
import TintsSndShades from "@/components/color-converter/tints-and-shades";
import {
    ComplementaryHarmoniesCard,
    AnalogousPaletteCard,
    TriadicPaletteCard,
    TetradicPaletteCard,
    MonochromaticPaletteCard,
} from "@/components/color-converter/advanced-color-palettes";

export default function ColorsTool() {
    const {
        rawInput,
        setRawInput,
        parsed,
        palette,
        luminance,
        previewTextColor,
        hex,
        rgb,
        hsl,
        exportData,
    } = useColorConverter();

    return (
        <section className="space-y-10">
            <div className="w-full grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
                {/* Left Column */}
                <div className="space-y-5">
                    <ColorInput parsed={parsed} rawInput={rawInput} setRawInput={setRawInput} />
                    <ColorValues
                        exportData={exportData}
                        rgb={rgb}
                        hex={hex}
                        hsl={hsl}
                        luminance={luminance}
                    />
                </div>

                {/* Right Column */}
                <div className="space-y-5">
                    <ColorPreview hex={hex} parsed={parsed} previewTextColor={previewTextColor} />
                    <TintsSndShades palette={palette} parsed={parsed} setRawInput={setRawInput} />
                </div>
            </div>
            <section className="w-full space-y-5">
                <h2 className="text-lg font-semibold">Advanced</h2>
                {/* Advanced Features */}
                <ComplementaryHarmoniesCard colors={exportData.complementaryHarmonies} />
                <AnalogousPaletteCard colors={exportData.analogousPalette} />
                <TriadicPaletteCard colors={exportData.triadicPalette} />
                <TetradicPaletteCard colors={exportData.tetradicPalette} />
                <MonochromaticPaletteCard colors={exportData.monochromaticPalette} />
            </section>
        </section>
    );
}
