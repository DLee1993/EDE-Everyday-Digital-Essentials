"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type FileConverterToolbarProps = {
    isReady: boolean;
    isDone: boolean;
    isConverting: boolean;

    onConvert: () => void;
    onDownloadAll: () => void;
    onClear: () => void;

    // Pagination
    pageIndex: number;
    pageCount: number;
    canPrev: boolean;
    canNext: boolean;
    onPrev: () => void;
    onNext: () => void;
};

export default function ConverterToolbar({
    isReady,
    isDone,
    isConverting,

    onConvert,
    onDownloadAll,
    onClear,

    pageIndex,
    pageCount,
    canPrev,
    canNext,
    onPrev,
    onNext,
}: FileConverterToolbarProps) {
    return (
        <section className="flex flex-col min-[425px]:flex-row justify-between items-center space-y-2.5 min-[425px]:space-y-0">
            {/* Left side: Convert / Download All / Clear */}
            <div className="w-full min-[425px]:w-auto flex justify-between items-center">
                <Button
                    size="sm"
                    variant="link"
                    disabled={!isReady || isConverting}
                    onClick={onConvert}
                    className="text-foreground"
                >
                    Convert
                </Button>

                <p className="text-foreground/50">|</p>

                <Button
                    size="sm"
                    variant="link"
                    disabled={!isDone}
                    onClick={onDownloadAll}
                    className="text-foreground"
                >
                    Download all
                </Button>

                <p className="text-foreground/50">|</p>

                <Button
                    size="sm"
                    variant="link"
                    onClick={onClear}
                    disabled={pageCount === 0}
                    className="text-foreground"
                >
                    Clear
                </Button>
            </div>

            {/* Right side: Pagination */}
            <div className="w-full min-[425px]:w-auto flex justify-between items-center">
                <Button
                    size="icon"
                    variant="link"
                    onClick={onPrev}
                    disabled={!canPrev}
                    aria-label="previous page"
                >
                    <ChevronLeft />
                </Button>

                <p className="flex text-xs gap-1">
                    <span>{pageCount ? pageIndex + 1 : 0}</span>
                    <span>of</span>
                    <span>{pageCount}</span>
                </p>

                <Button
                    size="icon"
                    variant="link"
                    onClick={onNext}
                    disabled={!canNext}
                    aria-label="next page"
                >
                    <ChevronRight />
                </Button>
            </div>
        </section>
    );
}
