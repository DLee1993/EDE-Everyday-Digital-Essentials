import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { allTimezones, ITimezone, ITimezoneOption, useTimezoneSelect } from "react-timezone-select";
import { useMediaQuery } from "@/hooks/global/use-media-query";
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
import { ChevronDown } from "lucide-react";

export default function TimezoneSelect({
    tz,
    setTz,
    setCurrentTz,
}: {
    tz: ITimezoneOption | undefined;
    setTz: Dispatch<SetStateAction<ITimezoneOption | undefined>>;
    setCurrentTz: Dispatch<SetStateAction<ITimezoneOption | undefined>>;
}) {
    const [open, setOpen] = useState(false);

    const isDesktop = useMediaQuery("(min-width: 768px)");
    const { options, parseTimezone } = useTimezoneSelect({
        labelStyle: "altName",
        timezones: allTimezones,
    });

    useEffect(() => {
        const guessed = Intl.DateTimeFormat().resolvedOptions().timeZone;

        const match = options.find((o) => o.value === guessed);

        if (match) {
            setCurrentTz(match); // ✔ now correctly typed
        }
    }, [options, setCurrentTz]);

    if (isDesktop) {
        return (
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        className="bg-card! text-card-foreground! w-full max-w-4xl flex justify-between items-center"
                    >
                        <p className="overflow-hidden">{tz ? tz.label : "Select a timezone"}</p>
                        <ChevronDown className={`${open ? "rotate-180" : "rotate-0"}`} />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full h-60 p-0" align="start">
                    <TimezoneList
                        setOpen={setOpen}
                        options={options}
                        setSelectedUnit={setTz}
                        parseTimezone={parseTimezone}
                    />
                </PopoverContent>
            </Popover>
        );
    }

    if (!isDesktop) {
        return (
            <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger asChild>
                    <Button
                        variant="secondary"
                        className="bg-card! text-card-foreground! w-full max-w-4xlflex justify-between items-center"
                    >
                        <p className="overflow-hidden">{tz ? tz.label : "Select a timezone"}</p>
                        <ChevronDown className={`${open ? "rotate-180" : "rotate-0"}`} />
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    <div className="mt-4 border-t">
                        <DrawerHeader>
                            <DrawerTitle>Select a timezone</DrawerTitle>
                            <DrawerDescription>
                                Choose the timezone you want to use.
                            </DrawerDescription>
                        </DrawerHeader>
                        <TimezoneList
                            setOpen={setOpen}
                            options={options}
                            setSelectedUnit={setTz}
                            parseTimezone={parseTimezone}
                        />
                    </div>
                </DrawerContent>
            </Drawer>
        );
    }
}

function TimezoneList({
    setOpen,
    options,
    setSelectedUnit,
    parseTimezone,
}: {
    setOpen: (open: boolean) => void;
    options: ITimezoneOption[];
    setSelectedUnit: Dispatch<SetStateAction<ITimezoneOption | undefined>>;
    parseTimezone: (zone: ITimezone) => ITimezoneOption;
}) {
    return (
        <Command>
            <CommandInput placeholder="Filter timezones..." autoFocus />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                {options.map((option, i) => (
                    <CommandGroup key={i}>
                        <CommandItem
                            key={i}
                            className="cursor-pointer ml-1"
                            value={option.value}
                            onSelect={(value) => {
                                setSelectedUnit(parseTimezone(value));
                                setOpen(false);
                            }}
                        >
                            {option.label}
                        </CommandItem>
                    </CommandGroup>
                ))}
            </CommandList>
        </Command>
    );
}
