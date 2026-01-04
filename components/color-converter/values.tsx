import { ColorActionsDropdown } from "@/components/color-converter/color-actions-dropdown";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ColorExportData } from "@/lib/color-converter/colors";
import { Copy } from "@/lib/global/copy-to-clipboard";

type Props = {
    exportData: ColorExportData;
    hex: string;
    rgb: string;
    hsl: string;
    luminance: number | null;
};

export default function ColorValues({ exportData, hex, rgb, hsl, luminance }: Props) {
    return (
        <Card className="w-full h-2/3 flex flex-col justify-between">
            <CardHeader>
                <CardTitle className="flex justify-between items-center">
                    Values
                    <ColorActionsDropdown exportData={exportData} />
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
