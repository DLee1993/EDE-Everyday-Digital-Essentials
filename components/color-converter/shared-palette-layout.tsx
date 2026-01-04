"use client";

import { CopyPaletteButton } from "@/components/color-converter/copy-palette-button";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Copy } from "@/lib/global/copy-to-clipboard";

interface HarmonyItem {
    label: string;
    hex: string;
}

interface Props {
    title: string;
    description: string;
    colors: HarmonyItem[];
}

function getTextColorForHex(hex: string) {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return lum > 0.5 ? "#000" : "#fff";
}

export function PaletteCard({ title, description, colors }: Props) {
    return (
        <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </div>

                <CopyPaletteButton colors={colors} />
            </CardHeader>

            <CardContent>
                <div
                    className={`grid gap-4 ${
                        colors.length === 3
                            ? "grid-cols-3"
                            : colors.length === 4
                            ? "grid-cols-4"
                            : "grid-cols-5"
                    }`}
                >
                    {colors.map((c) => (
                        <div key={c.label} className="flex flex-col items-center gap-2">
                            <div
                                className="relative w-full h-16 rounded-md border"
                                style={{ backgroundColor: c.hex }}
                            >
                                <span
                                    className="text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
                                    style={{ color: getTextColorForHex(c.hex) }}
                                >
                                    {c.label}
                                </span>
                            </div>

                            <Button
                                variant="secondary"
                                onClick={() => Copy({ input: c.hex })}
                                className="w-full flex justify-between items-center gap-1 text-xs font-mono"
                            >
                                <span>{c.hex}</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-3 h-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                    />
                                </svg>
                            </Button>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
