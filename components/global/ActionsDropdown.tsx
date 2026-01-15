import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Copy, Download, Trash } from "lucide-react";

import { Copy as CopyFn } from "@/lib/global/copy-to-clipboard";
import { DownloadTextFile, DownloadJsonFile } from "@/lib/global/download";
import React from "react";

type ActionItem = {
    label: string;
    icon?: React.ReactNode;
    group?: string;
    onClick: () => void;
    disabled?: boolean;
};

type ActionsMenuProps = {
    // Explicit data for each action
    copyText?: string;
    copyJson?: unknown;
    downloadText?: string;
    downloadJson?: unknown;

    // Custom tool actions
    deleteAction?: () => void;
    updateAction?: () => void;
};

export function ActionsMenu({
    copyText,
    copyJson,
    downloadText,
    downloadJson,
    deleteAction,
    updateAction,
}: ActionsMenuProps) {
    const actions: ActionItem[] = [];

    // Copy text
    if (copyText !== undefined) {
        actions.push({
            label: "Copy text",
            icon: <Copy />,
            group: "copy",
            onClick: () => CopyFn({ input: copyText }),
        });
    }

    // Copy JSON
    if (copyJson) {
        actions.push({
            label: "Copy JSON",
            icon: <Copy />,
            group: "copy",
            onClick: () =>
                CopyFn({
                    input: JSON.stringify(copyJson, null, 2),
                }),
        });
    }

    // Download text
    if (downloadText !== undefined) {
        actions.push({
            label: "Download text",
            icon: <Download />,
            group: "download",
            onClick: () => DownloadTextFile("data.txt", downloadText),
        });
    }

    // Download JSON
    if (downloadJson) {
        actions.push({
            label: "Download JSON",
            icon: <Download />,
            group: "download",
            onClick: () => DownloadJsonFile("data.json", downloadJson),
        });
    }

    // Update action
    if (updateAction) {
        actions.push({
            label: "Update",
            icon: <ChevronDown />,
            group: "custom",
            onClick: updateAction,
        });
    }

    // Delete action
    if (deleteAction) {
        actions.push({
            label: "Delete",
            icon: <Trash />,
            group: "delete",
            onClick: deleteAction,
        });
    }

    // Group actions by category
    const groups = actions.reduce<Record<string, ActionItem[]>>((acc, action) => {
        const key = action.group ?? "default";
        if (!acc[key]) acc[key] = [];
        acc[key].push(action);
        return acc;
    }, {});

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="secondary">
                    Actions <ChevronDown />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48">
                {Object.entries(groups).map(([group, items], index) => (
                    <div key={group}>
                        {index > 0 && <DropdownMenuSeparator />}
                        {items.map((item) => (
                            <DropdownMenuItem
                                key={item.label}
                                onClick={item.onClick}
                                className="flex justify-between items-center"
                            >
                                {item.label}
                                {item.icon}
                            </DropdownMenuItem>
                        ))}
                    </div>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
