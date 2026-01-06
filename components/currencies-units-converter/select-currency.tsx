"use client";

import * as React from "react";

import { useMediaQuery } from "@/hooks/global/use-media-query";
import { useMounted } from "@/hooks/global/use-mounted";
import rateNames from "@/data/currency-converter/rateNames.json";
import CurrencyFlag from "react-currency-flags";
import { Button } from "@/components/ui/button";
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronDown } from "lucide-react";

type SelectCurrenyProps = {
    type: "from" | "to";
    selectedValue: { from: string; to: string };
    countryCodes: Record<string, number>;
    setSelectedValue: React.Dispatch<React.SetStateAction<{ from: string; to: string }>>;
    loading?: boolean;
};

export function SelectCurrency({
    type,
    selectedValue,
    setSelectedValue,
    countryCodes,
    loading = false,
}: SelectCurrenyProps) {
    const [open, setOpen] = React.useState(false);
    const mounted = useMounted();
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const current = selectedValue[type];

    // Fixed-size wrapper to prevent layout shift
    const FlagOrSkeleton = (
        <div className="w-5 h-5 flex items-center justify-center">
            {loading ? (
                <Skeleton className="w-5 h-5 rounded-sm" />
            ) : (
                <CurrencyFlag currency={current} />
            )}
        </div>
    );

    if (!mounted) {
        return (
            <Button variant="secondary" className="w-28 flex justify-start items-center gap-2">
                <Skeleton className="w-5 h-5 rounded-sm" />
                <Skeleton className="h-4 w-10" />
            </Button>
        );
    }

    if (isDesktop) {
        return (
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button variant="secondary" className="flex justify-between items-center w-28">
                        {current ? (
                            <div className="flex items-center gap-2">
                                {FlagOrSkeleton}
                                <span className={loading ? "opacity-50" : ""}>{current}</span>
                            </div>
                        ) : (
                            "Select"
                        )}
                        <ChevronDown className={`${open ? "rotate-180" : "rotate-0"}`} />
                    </Button>
                </PopoverTrigger>

                <PopoverContent align="start" className="w-86 h-60 p-1">
                    <CurrencyList
                        setOpen={setOpen}
                        setSelectedUnit={setSelectedValue}
                        type={type}
                        rates={countryCodes}
                    />
                </PopoverContent>
            </Popover>
        );
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="secondary">
                    {current ? (
                        <span className="flex items-center gap-2">
                            {FlagOrSkeleton}
                            <span className={loading ? "opacity-50" : ""}>{current}</span>
                            <ChevronDown className={`${open ? "rotate-180" : "rotate-0"}`} />
                        </span>
                    ) : (
                        "Select currency"
                    )}
                </Button>
            </DrawerTrigger>

            <DrawerContent className="p-1">
                <div className="mt-4 border-t">
                    <DrawerHeader>
                        <DrawerTitle>Select a currency</DrawerTitle>
                        <DrawerDescription>Choose the currency you want to use.</DrawerDescription>
                    </DrawerHeader>

                    <CurrencyList
                        setOpen={setOpen}
                        setSelectedUnit={setSelectedValue}
                        type={type}
                        rates={countryCodes}
                    />
                </div>
            </DrawerContent>
        </Drawer>
    );
}

function CurrencyList({
    setOpen,
    setSelectedUnit,
    type,
    rates,
}: {
    setOpen: (open: boolean) => void;
    setSelectedUnit: React.Dispatch<React.SetStateAction<{ from: string; to: string }>>;
    type: "from" | "to";
    rates: Record<string, number>;
}) {
    return (
        <Command className="w-105">
            <CommandInput placeholder="Filter currencies..." autoFocus />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                    {Object.keys(rates).map((rate) => (
                        <CommandItem
                            key={rate}
                            value={rate}
                            onSelect={(value) => {
                                setSelectedUnit((prev) => ({ ...prev, [type]: value }));
                                setOpen(false);
                            }}
                        >
                            <CurrencyFlag currency={rate} /> {rate} (
                            {rateNames[rate as keyof typeof rateNames]})
                        </CommandItem>
                    ))}
                </CommandGroup>
            </CommandList>
        </Command>
    );
}
