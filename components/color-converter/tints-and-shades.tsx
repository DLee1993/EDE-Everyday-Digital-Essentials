import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ParsedColor } from "@/lib/color-converter/colors";
import { Dispatch, SetStateAction } from "react";

type Props = {
    parsed: ParsedColor | null;
    palette: { label: string; hex: string }[];
    setRawInput: Dispatch<SetStateAction<string>>;
};

export default function TintsSndShades({ parsed, palette, setRawInput }: Props) {
    return (
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

                                <span className="truncate w-full text-center">{entry.label}</span>
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
    );
}
