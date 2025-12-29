"use client";

import { UuidObject } from "@/app/modules/system/uuid-generator/page";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { CopyAll } from "@/lib/global/copy-to-clipboard";
import { DownloadJsonFile } from "@/lib/global/download";
import { ChevronDown, CopyIcon, Download, Trash } from "lucide-react";

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
    downloadAll: DownloadAll
}: UuidActionsProps) {
    return (
        <section className="flex flex-wrap gap-2">
            <Button size="sm" onClick={generate}>
                Generate IDs
            </Button>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button size="sm" variant="secondary" className="text-foreground">
                        Actions <ChevronDown />
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem
                        onClick={DeleteAll}
                        disabled={uuids.length === 0}
                        className="text-destructive flex justify-between items-center"
                    >
                        <span>Delete all</span>
                        <Trash size={14} />
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem onClick={() => CopyAll({ inputs: uuids.map((u) => u.full) })} disabled={uuids.length === 0} className="flex justify-between items-center">
                        <span>Copy all</span>
                        <CopyIcon size={14} />
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={DownloadAll} disabled={uuids.length === 0} className="flex justify-between items-center">
                        <span>Download all</span>
                        <Download size={14} />
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={() => DownloadJsonFile("identifiers.json", uuids)} disabled={uuids.length === 0} className="flex justify-between items-center">
                        <span>Download as JSON</span>
                        <Download size={14} />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </section>
    );
}
