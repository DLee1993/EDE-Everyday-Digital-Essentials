"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CircleQuestionMark } from "lucide-react";

export default function HowToUse({ description }: { description?: string }) {
    return (
        <Popover>
            <PopoverTrigger className="absolute top-20 right-5 cursor-pointer flex items-center gap-2 text-sm">
                How to use <CircleQuestionMark size={14}/>
                <span className="sr-only">Popover element that describes how to use this feature</span>
            </PopoverTrigger>
            <PopoverContent className="w-fit bg-primary/5 border-primary/40" sideOffset={10} align="end">
                <p className="text-sm">{description}</p>
            </PopoverContent>
        </Popover>
    );
}
