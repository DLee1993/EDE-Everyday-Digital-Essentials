import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ParsedColor } from "@/lib/color-converter/colors";
import { Dispatch, SetStateAction } from "react";

type Props = {
    parsed: ParsedColor | null;
    rawInput: string;
    setRawInput: Dispatch<SetStateAction<string>>;
};

export default function ColorInput({ parsed, setRawInput, rawInput }: Props) {
    return (
        <Card className="w-full h-1/3">
            <CardHeader>
                <CardTitle>Color input</CardTitle>
                <CardDescription>
                    {!parsed ? (
                        <p className="text-red-500 h-5">
                            Couldn&apos;t parse this color. Try HEX, RGB, HSL, or a CSS color name.
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
    );
}
