"use client";

import { UuidObject } from "@/app/modules/system/uuid-generator/page";
import { ActionsMenu } from "@/components/global/ActionsMenu";
import { Button } from "@/components/ui/button";
import { CopyAll } from "@/lib/global/copy-to-clipboard";
import { DownloadJsonFile } from "@/lib/global/download";
import { Copy, Download, Trash } from "lucide-react";

type UuidActionsProps = {
    uuids: UuidObject[];
    generate: () => void;
    deleteAll: () => void;
    downloadAll: () => void;
};

export function UuidActions({
    uuids,
    generate,
    deleteAll: DeleteAll,
    downloadAll: DownloadAll,
}: UuidActionsProps) {
    return (
        <section className="flex flex-wrap gap-2">
            <Button size="sm" onClick={generate}>
                Generate IDs
            </Button>

            <ActionsMenu
                actions={[
                    {
                        label: "Copy all",
                        icon: <Copy />,
                        onClick: () => CopyAll({ inputs: uuids.map((u) => u.full) }),
                    },
                    {
                        label: "Download JSON",
                        icon: <Download />,
                        onClick: () => DownloadJsonFile("identifiers.json", uuids),
                    },
                    { label: "Download all", icon: <Download />, onClick: DownloadAll },
                    { label: "Delete", icon: <Trash />, onClick: DeleteAll, isDelete: true },
                ]}
                disabled={uuids.length === 0}
            />
        </section>
    );
}
