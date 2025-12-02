"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

const ChangeTheme = () => {
    const [hasMounted, setHasMounted] = useState(false); // <-- add this
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setHasMounted(true);
    }, []);

    const toggleTheme = () => {
        if (theme == "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };

    return (
        <SidebarMenuItem onClick={toggleTheme}>
            <SidebarMenuButton
                asChild
                className="min-h-9 min-w-9 cursor-pointer"
            >
                {hasMounted ? (
                    <div className="px-0">
                        <div className="relative min-h-8 min-w-8">
                            <MoonIcon
                                size={16}
                                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ${
                                    theme === "dark" || theme === "system" ? "block" : "hidden"
                                }`}
                            />
                            <SunIcon
                                size={18}
                                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ${
                                    theme === "light" ? "block" : "hidden"
                                }`}
                            />
                        </div>

                        <p className="flex items-center w-full min-w-32">
                            {theme === "dark" ? "Dark mode" : "Light mode"}
                        </p>
                    </div>
                ) : (
                    <div className="px-0">
                        <div className="relative min-h-8 min-w-8">
                            <MoonIcon
                                size={16}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            />
                        </div>
                        <p className="flex items-center w-full min-w-32">Dark mode</p>
                    </div>
                )}
            </SidebarMenuButton>
        </SidebarMenuItem>
    );
};

export default ChangeTheme;
