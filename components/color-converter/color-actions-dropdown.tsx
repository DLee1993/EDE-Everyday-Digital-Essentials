import { CopyJson } from "@/lib/global/copy-to-clipboard";
import {
    DownloadJsonFile,
    DownloadCssVariablesFile,
    DownloadTailwindTokensFile,
} from "@/lib/global/download";
import { ColorExportData } from "@/lib/color-converter/colors";
import { Copy, Download } from "lucide-react";
import { ActionsMenu } from "@/components/global/ActionsMenu";

export function ColorActionsDropdown({ exportData }: { exportData: ColorExportData }) {
    return (
        <ActionsMenu
            actions={[
                {
                    label: "Copy all",
                    icon: <Copy />,
                    onClick: () => CopyJson({ input: exportData }),
                },
                {
                    label: "Download JSON",
                    icon: <Download />,
                    onClick: () => DownloadJsonFile("color-data.json", exportData),
                },
                {
                    label: "Download CSS Variables",
                    icon: <Download />,
                    onClick: () => DownloadCssVariablesFile(exportData),
                },
                {
                    label: "Download Tailwind Tokens",
                    icon: <Download />,
                    onClick: () => DownloadTailwindTokensFile(exportData),
                },
            ]}
        />
    );
}
