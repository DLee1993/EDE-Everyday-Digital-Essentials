/* eslint-disable react-hooks/incompatible-library */

"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";

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

import { Copy, RefreshCcw, Trash, EllipsisVertical } from "lucide-react";

import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { UuidObject, UuidTableProps } from "@/types";

export function UuidTable({ uuids, regenerateOne, deleteOne, copyOne }: UuidTableProps) {
    const data = useMemo<UuidObject[]>(() => uuids, [uuids]);

    const columns = useMemo<ColumnDef<UuidObject>[]>(() => {
        return [
            {
                accessorKey: "id",
                header: "Identifier",
                cell: ({ row }) => {
                    const { prefix, id, suffix } = row.original;

                    return (
                        <div className="font-mono text-sm truncate max-w-[400px] flex gap-1">
                            {prefix && (
                                <span className="text-chart-4 font-semibold">{prefix}</span>
                            )}

                            <span className="text-foreground">{id}</span>

                            {suffix && (
                                <span className="text-chart-4 font-semibold">{suffix}</span>
                            )}
                        </div>
                    );
                },
            },
            {
                accessorKey: "actions",
                header: "Actions",
                cell: ({ row }) => {
                    const index = row.index;
                    const value = row.original.full;

                    return (
                        <div className="w-14 flex justify-center">
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
                                            onClick={() => copyOne(value)}
                                            className="flex justify-between items-center"
                                        >
                                            <span>Copy</span>
                                            <Copy size={14} />
                                        </DropdownMenuItem>

                                        <DropdownMenuItem
                                            onClick={() => regenerateOne(index)}
                                            className="flex justify-between items-center"
                                        >
                                            <span>Regenerate</span>
                                            <RefreshCcw size={14} />
                                        </DropdownMenuItem>

                                        <DropdownMenuItem
                                            variant="destructive"
                                            onClick={() => deleteOne(index)}
                                            className="flex justify-between items-center"
                                        >
                                            <span>Delete</span>
                                            <Trash size={14} />
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    );
                },
            },
        ];
    }, [copyOne, regenerateOne, deleteOne]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <Table className="w-full table-fixed">
            <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id} className="hover:bg-transparent">
                        {headerGroup.headers.map((header) => (
                            <TableHead
                                key={header.id}
                                className={cn(
                                    "border-y-0",
                                    header.column.id === "actions" && "w-20"
                                )}
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
                            No identifiers generated yet
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
