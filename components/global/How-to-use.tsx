"use client";

import { usePathname } from "next/navigation";
import { rawSidebarItems } from "@/components/global/app-sidebar-item-list";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CircleQuestionMark } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HowToUse() {
    const pathname = usePathname();

    return (
        <Popover>
            <PopoverTrigger asChild className="cursor-pointer flex items-center gap-2 text-sm">
                <Button>
                    <span className="hidden md:block">How to use</span> <CircleQuestionMark size={14} />
                    <span className="sr-only">
                        Popover element that describes how to use this feature
                    </span>
                </Button>
            </PopoverTrigger>
            {rawSidebarItems.map((cat) =>
                cat.items
                    .filter((item) => item.url === pathname)
                    .map((item) => (
                        <PopoverContent
                            key={item.title}
                            className="w-fit max-w-2xl border-primary/40"
                            sideOffset={10}
                            align="end"
                        >
                            <p className="text-sm">{item.instructions}</p>
                        </PopoverContent>
                    ))
            )}
        </Popover>
    );
}
