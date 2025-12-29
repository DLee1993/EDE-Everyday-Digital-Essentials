/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { cn } from "@/lib/utils";
import bytesToSize from "@/lib/file-converter/bites-to-size";
import compressFileName from "@/lib/file-converter/compress-filename";

import { ImageSelect } from "@/components/file-converter/ImageSelect";
import { VideoSelect } from "@/components/file-converter/VideoSelect";
import { AudioSelect } from "@/components/file-converter/AudioSelect";
import { Badge } from "@/components/ui/badge";

import { EllipsisVertical, Minus, AlertCircle, Clock, Check, Download, Trash } from "lucide-react";

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { DownloadBlobUrlFile } from "@/lib/global/download";
import { FileConverterAction } from "@/hooks/file-converter/useActions";

type FileConverterTableProps = {
    actions: FileConverterAction[];
    updateAction: (fileName: string, patch: Partial<FileConverterAction>) => void;
    deleteAction: (fileName: string) => void;
};

export default function ConverterTable({
    actions,
    updateAction,
    deleteAction,
}: FileConverterTableProps) {
    const columns: ColumnDef<FileConverterAction>[] = [
        {
            accessorKey: "file_name",
            header: "Filename",
            cell: ({ row }: any) => {
                const action = row.original;
                return (
                    <div className="flex flex-col space-y-2">
                        <span className="font-semibold xl:hidden">{compressFileName(action.file_name)}</span>
                        <span className="font-semibold hidden xl:block">{action.file_name}</span>
                        <sub>{bytesToSize(action.file_size)}</sub>
                    </div>
                );
            },
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }: any) => {
                const a = row.original;

                return (
                    <>
                        {!a.is_error && !a.is_converting && !a.is_converted && (
                            <Badge variant="default" className="w-10 flex gap-2">
                                <Minus />
                            </Badge>
                        )}

                        {a.is_error && (
                            <Badge variant="destructive" className="w-10 flex gap-2">
                                <AlertCircle />
                            </Badge>
                        )}

                        {a.is_converting && !a.is_converted && (
                            <Badge variant="default" className="w-10 flex gap-2">
                                <Clock />
                            </Badge>
                        )}

                        {a.is_converted && (
                            <Badge variant="default" className="w-10 flex gap-2">
                                <Check />
                            </Badge>
                        )}
                    </>
                );
            },
        },
        {
            accessorKey: "convert_to",
            header: "Convert to",
            meta: { className: "w-32" },
            cell: ({ row }: any) => {
                const a = row.original;

                return (
                    <>
                        {a.file_type.includes("image") && (
                            <ImageSelect
                                action={a}
                                updateAction={(to: string) => updateAction(a.file_name, { to })}
                            />
                        )}

                        {a.file_type.includes("video") && (
                            <VideoSelect
                                action={a}
                                updateAction={(to: string) => updateAction(a.file_name, { to })}
                            />
                        )}

                        {a.file_type.includes("audio") && (
                            <AudioSelect
                                action={a}
                                updateAction={(to: string) => updateAction(a.file_name, { to })}
                            />
                        )}
                    </>
                );
            },
        },
        {
            accessorKey: "action",
            header: "",
            meta: { className: "text-right w-10" },
            cell: ({ row }: any) => {
                const a = row.original;

                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger
                            aria-label="open actions"
                            className="w-5 h-5 cursor-pointer grid place-content-center"
                        >
                            <EllipsisVertical size={15} />
                        </DropdownMenuTrigger>

                        <DropdownMenuContent>
                            <DropdownMenuGroup>
                                <DropdownMenuItem
                                    onClick={() => {
                                        if (!a.url) return;
                                        DownloadBlobUrlFile(a.url, a.output || a.file_name);
                                    }}
                                    className="flex justify-between items-center"
                                >
                                    <span>Download file</span>
                                    <Download />
                                </DropdownMenuItem>

                                <DropdownMenuItem
                                    variant="destructive"
                                    onClick={() => deleteAction(a.file_name)}
                                    className="group flex justify-between items-center hover:text-foreground!"
                                >
                                    <span>Delete file</span>
                                    <Trash />
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
        },
    ];

    // eslint-disable-next-line react-hooks/incompatible-library
    const table = useReactTable({
        data: actions,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            pagination: {
                pageIndex: 0,
                pageSize: 5,
            },
        },
    });

    return (
        <Table className="w-full">
            <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id} className="hover:bg-transparent">
                        {headerGroup.headers.map((header) => (
                            <TableHead
                                key={header.id}
                                className={cn(header.column.columnDef.meta, "border-y-0")}
                            >
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                          header.column.columnDef.header,
                                          header.getContext()
                                      )}
                            </TableHead>
                        ))}
                    </TableRow>
                ))}
            </TableHeader>

            <TableBody>
                {table.getRowModel().rows.length ? (
                    table.getRowModel().rows.map((row) => (
                        <TableRow key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <TableCell
                                    key={cell.id}
                                    className={cn(cell.column.columnDef.meta, "p-0 h-16 px-2")}
                                >
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))
                ) : (
                    <TableRow className="hover:bg-transparent">
                        <TableCell colSpan={columns.length} className="text-center h-14">
                            Add a file to start
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
