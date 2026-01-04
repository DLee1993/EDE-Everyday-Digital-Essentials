import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ParsedColor } from "@/lib/color-converter/colors";

type Props = {
    hex: string;
    parsed: ParsedColor | null;
    previewTextColor: string;
};

export default function ColorPreview({ hex, previewTextColor, parsed }: Props) {
    return (
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
    );
}
