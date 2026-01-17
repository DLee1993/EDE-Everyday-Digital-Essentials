"use client";

import * as React from "react";
import { Unit } from "convert-units";
import { MeasurementTypes } from "@/lib/unit-converter/convert-units";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/global/use-media-query";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

type SelectUnitProps = {
    type: "from" | "to";
    selectedValue: {
        from: Unit | "";
        to: Unit | "";
    };
    setSelectedValue: React.Dispatch<
        React.SetStateAction<{
            from: Unit | "";
            to: Unit | "";
        }>
    >;
};

export function SelectUnit({ type, selectedValue, setSelectedValue }: SelectUnitProps) {
    const [open, setOpen] = React.useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const placeholder = selectedValue[type] || `Select unit`;

    const triggerRef = React.useRef<HTMLButtonElement>(null);

    const handleSelect = (value: Unit) => {
        setSelectedValue((prev) => ({ ...prev, [type]: value }));
        setOpen(false);

        triggerRef.current?.focus();
    };

    const triggerButton = (
        <Button
            ref={triggerRef}
            variant="outline"
            className="min-w-20 flex justify-between items-center"
        >
            {placeholder}
            <ChevronDown className={`${open ? "rotate-180" : "rotate-0"} transition-transform`} />
        </Button>
    );

    if (isDesktop) {
        return (
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>{triggerButton}</PopoverTrigger>
                <PopoverContent className="w-[200px] h-60 p-0" align="start">
                    <UnitList onSelect={handleSelect} selected={selectedValue[type]} />
                </PopoverContent>
            </Popover>
        );
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>{triggerButton}</DrawerTrigger>
            <DrawerContent>
                <div className="mt-4 border-t">
                    <DrawerHeader>
                        <DrawerTitle>Select a unit</DrawerTitle>
                        <DrawerDescription>Choose the unit you want to use.</DrawerDescription>
                    </DrawerHeader>
                    <UnitList onSelect={handleSelect} selected={selectedValue[type]} />
                </div>
            </DrawerContent>
        </Drawer>
    );
}

function UnitList({ onSelect, selected }: { onSelect: (unit: Unit) => void; selected: Unit | "" }) {
    return (
        <Command className="w-105">
            <CommandInput placeholder="Filter units..." autoFocus />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>

                {MeasurementTypes.map((group) => (
                    <div key={group.measurement}>
                        <h4 className="text-sm font-semibold p-2 capitalize border-b-4 border-border! bg-primary-foreground/5">
                            {group.measurement}
                        </h4>
                        <CommandGroup key={group.measurement}>
                            {group.units.map((unit) => {
                                const isSelected = selected === unit;

                                return (
                                    <CommandItem
                                        key={unit}
                                        value={unit}
                                        onSelect={() => onSelect(unit)}
                                        className={cn(
                                            "cursor-pointer flex items-center justify-between",
                                            isSelected && "bg-accent text-accent-foreground"
                                        )}
                                    >
                                        <span>{unit}</span>

                                        {isSelected && <Check className="h-4 w-4 opacity-100" />}
                                    </CommandItem>
                                );
                            })}
                        </CommandGroup>
                    </div>
                ))}
            </CommandList>
        </Command>
    );
}
