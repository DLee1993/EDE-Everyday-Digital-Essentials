import { CopyJson } from "@/lib/global/copy-to-clipboard";
import {
    DownloadJsonFile,
    DownloadCssVariablesFile,
    DownloadTailwindTokensFile,
} from "@/lib/global/download";
import { ColorExportData } from "@/lib/color-converter/colors";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Copy, Download } from "lucide-react";

export function ColorActionsDropdown({ exportData }: { exportData: ColorExportData }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    Actions <ChevronDown />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem
                    className="flex justify-between items-center"
                    onClick={() => DownloadJsonFile("color-data.json", exportData)}
                >
                    Download JSON <Download />
                </DropdownMenuItem>

                <DropdownMenuItem
                    className="flex justify-between items-center"
                    onClick={() => DownloadCssVariablesFile(exportData)}
                >
                    Download CSS Variables <Download />
                </DropdownMenuItem>

                <DropdownMenuItem
                    className="flex justify-between items-center"
                    onClick={() => DownloadTailwindTokensFile(exportData)}
                >
                    Download Tailwind Tokens <Download />
                </DropdownMenuItem>

                <DropdownMenuItem
                    className="flex justify-between items-center"
                    onClick={() => CopyJson({ input: exportData })}
                >
                    Copy All Values <Copy />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
