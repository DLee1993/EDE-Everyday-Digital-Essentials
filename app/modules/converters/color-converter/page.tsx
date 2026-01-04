"use client";

import { Copy } from "@/lib/global/copy-to-clipboard";
import { useColorConverter } from "@/hooks/color-converter/use-color-converter";

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ColorActionsDropdown } from "@/components/color-converter/ColorActionsDropdown";

export default function ColorsTool() {
    const { exportData, rawInput, setRawInput, parsed, palette, luminance, previewTextColor, hex, rgb, hsl } =
        useColorConverter();

    return (
        <section>
            <div className="w-full grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
                {/* Left Column */}
                <div className="h-full flex flex-col justify-between items-center gap-2">
                    {/* Input Card */}
                    <Card className="w-full h-1/3">
                        <CardHeader>
                            <CardTitle>Color input</CardTitle>
                            <CardDescription>
                                {!parsed ? (
                                    <p className="text-red-500 h-5">
                                        Couldn&apos;t parse this color. Try HEX, RGB, HSL, or a CSS
                                        color name.
                                    </p>
                                ) : (
                                    <p className="h-5">Enter HEX, RGB, HSL, or a CSS color name.</p>
                                )}
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="flex gap-2">
                            <Input
                                value={rawInput}
                                onChange={(e) => setRawInput(e.target.value)}
                                placeholder="#1d4ed8 or rgb(37, 99, 235)"
                            />
                            <Input
                                type="color"
                                value={parsed?.hex ?? "#000000"}
                                onChange={(e) => setRawInput(e.target.value)}
                                className="w-16 cursor-pointer"
                            />
                        </CardContent>
                    </Card>

                    {/* Values */}
                    <Card className="w-full h-2/3 flex flex-col justify-between">
                        <CardHeader>
                            <CardTitle className="flex justify-between items-center">
                                Values
                                <ColorActionsDropdown exportData={exportData}/>
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <ValueRow label="HEX" value={hex} />
                            <ValueRow label="RGB" value={rgb} />
                            <ValueRow label="HSL" value={hsl} />
                        </CardContent>
                        <CardFooter className="flex items-center gap-10 min-h-14 text-sm">
                            <div>
                                <p className="font-medium text-foreground">Luminance</p>
                                <p>{luminance !== null ? luminance.toFixed(3) : "-"}</p>
                            </div>
                            <div>
                                <p className="font-medium text-foreground">Text suggestion</p>
                                <p>
                                    {luminance !== null
                                        ? luminance > 0.5
                                            ? "Dark text recommended"
                                            : "Light text recommended"
                                        : "-"}
                                </p>
                            </div>
                        </CardFooter>
                    </Card>
                </div>

                {/* Right Column */}
                <div className="h-full flex flex-col justify-between items-center gap-2">
                    {/* Preview */}
                    <Card className="w-full h-1/2">
                        <CardHeader>
                            <CardTitle>Preview</CardTitle>
                        </CardHeader>

                        <CardContent>
                            <div
                                className="h-40 w-full rounded-md flex items-center justify-center"
                                style={{ backgroundColor: hex || "#ffffff" }}
                            >
                                <span
                                    className="text-sm font-medium px-3 py-1 rounded"
                                    style={{ color: previewTextColor }}
                                >
                                    {parsed ? hex : "Invalid color"}
                                </span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Palette */}
                    <Card className="w-full h-1/2">
                        <CardHeader>
                            <CardTitle>Tints &amp; Shades</CardTitle>
                        </CardHeader>

                        <CardContent>
                            {parsed ? (
                                <div className="grid grid-cols-5 gap-2">
                                    {palette.map((entry) => (
                                        <button
                                            key={entry.label}
                                            type="button"
                                            onClick={() => setRawInput(entry.hex)}
                                            className="group flex flex-col items-center gap-1 text-[10px]"
                                        >
                                            <div
                                                className="h-10 w-full rounded border relative"
                                                style={{ backgroundColor: entry.hex }}
                                            >
                                                {/* Hover overlay */}
                                                <span
                                                    className="absolute inset-0 flex items-center justify-center text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                                                    style={{
                                                        color: "#fff",
                                                        textShadow: "0 0 3px rgba(0,0,0,0.6)",
                                                    }}
                                                >
                                                    {entry.hex}
                                                </span>
                                            </div>

                                            <span className="truncate w-full text-center">
                                                {entry.label}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-xs text-muted-foreground">
                                    Enter a valid color to see related tints and shades.
                                </p>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}

/* -------------------- Value Row -------------------- */

function ValueRow({ label, value }: { label: string; value: string }) {
    const disabled = !value;

    return (
        <div className="flex items-center gap-2">
            <div className="w-14 text-xs font-medium text-muted-foreground">{label}</div>

            <div className="flex-1">
                <Input readOnly value={value} />
            </div>

            <Button
                type="button"
                variant="outline"
                size="icon"
                disabled={disabled}
                onClick={() => !disabled && Copy({ input: value })}
            >
                ⧉
            </Button>
        </div>
    );
}
