"use client";

import { UuidActionsProps } from "@/types";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Copy, Download, Trash } from "lucide-react";

export function UuidActions({
    generate,
    uuids,
    deleteAll,
    downloadAll,
    copyAll,
    downloadJson,
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
                        onClick={deleteAll}
                        disabled={uuids.length === 0}
                        className="text-destructive flex justify-between items-center"
                    >
                        <span>Delete all</span>
                        <Trash size={14} />
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem onClick={copyAll} disabled={uuids.length === 0} className="flex justify-between items-center">
                        <span>Copy all</span>
                        <Copy size={14} />
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={downloadAll} disabled={uuids.length === 0} className="flex justify-between items-center">
                        <span>Download all</span>
                        <Download size={14} />
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={downloadJson} disabled={uuids.length === 0} className="flex justify-between items-center">
                        <span>Download as JSON</span>
                        <Download size={14} />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </section>
    );
}
