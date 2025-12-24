"use client";

import SessionSelector from "@/components/focus-timer/SessionButtons";
import { useMounted } from "@/lib/global/use-mounted";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ChevronDown, SettingsIcon } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

type Props = {
    alarm: boolean;
    sound: boolean;
    toggleAlarm: () => void;
    toggleSound: () => void;
    calculateTime: (newTime: number) => void;
    handleBreakTimeClick: (time: number) => void;
    breakTime: number;
    time: number;
    start: () => void;
    pause: () => void;
    reset: () => void;
    running: boolean;
};

export default function Options({
    alarm,
    toggleAlarm,
    sound,
    toggleSound,
    calculateTime,
    handleBreakTimeClick,
    breakTime,
    time,
}: Props) {
    const mounted = useMounted();
    const presets = [
        { label: "5 minutes", value: 5 },
        { label: "10 minutes", value: 10 },
        { label: "15 minutes", value: 15 },
        { label: "20 minutes", value: 20 },
        { label: "25 minutes", value: 25 },
        { label: "30 minutes", value: 30 },
        { label: "35 minutes", value: 35 },
        { label: "40 minutes", value: 40 },
        { label: "45 minutes", value: 45 },
        { label: "50 minutes", value: 50 },
        { label: "55 minutes", value: 55 },
        { label: "60 minutes", value: 60 },
    ];

    const BreakDurationSelector = (
        <div
            className={`flex justify-between items-center ${
                mounted && alarm
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-25 pointer-events-none"
            }`}
        >
            <p className="text-sm">Select a break duration</p>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="w-36 flex justify-between items-center bg-transparent border-b border-border text-foreground gap-2.5 hover:bg-foreground/10">
                        {`${mounted ? breakTime / 60 : 0} minutes`} <ChevronDown />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40">
                    {presets.map((preset) => (
                        <DropdownMenuItem
                            key={preset.value}
                            onClick={() => handleBreakTimeClick(preset.value)}
                            disabled={mounted && breakTime / 60 === preset.value}
                            className="cursor-pointer focus:bg-foreground/10 focus:text-foreground"
                        >
                            {preset.label}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );

    const AdditionalSettings = (
        <div className="space-y-5">
            <div className="flex-1 flex justify-between items-center">
                <p className="text-sm">Add a Break</p>
                <Checkbox
                    onClick={toggleAlarm}
                    checked={mounted ? alarm : false}
                    className="cursor-pointer"
                />
            </div>
            <div className="flex-1 flex justify-between items-center">
                <p className="text-sm">Add Sound</p>
                <Checkbox
                    onClick={toggleSound}
                    checked={mounted ? sound : false}
                    className="cursor-pointer"
                />
            </div>
        </div>
    );

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="flex-1 rounded-sm">
                    <SettingsIcon /> Settings
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Session Settings</SheetTitle>
                    <SheetDescription className="sr-only">
                        Here you can update the session settings.
                    </SheetDescription>
                </SheetHeader>
                <section className="w-full flex-1 space-y-10 p-2">
                    {<SessionSelector time={time} calculateTime={calculateTime} />}
                    {AdditionalSettings}
                    {BreakDurationSelector}
                </section>
            </SheetContent>
        </Sheet>
    );
}
