"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon, SunMoonIcon } from "lucide-react";
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
                className="min-h-9 min-w-9 cursor-pointer p-0! md:group-data-[collapsible=icon]:p-0! group"
            >
                {hasMounted ? (
                    <div className="w-full px-0">
                        <div className="relative min-h-9 min-w-9">
                            <MoonIcon
                                size={16}
                                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:text-sidebar-primary-foreground ${
                                    theme === "dark" || theme === "system" ? "scale-100" : "scale-0"
                                }`}
                            />
                            <SunIcon
                                size={18}
                                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:text-sidebar-primary-foreground ${
                                    theme === "light" ? "scale-100" : "scale-0"
                                }`}
                            />
                        </div>

                        <p className="flex items-center w-full min-w-32 group-hover:text-sidebar-primary-foreground">
                            {theme === "dark" ? "Dark mode" : "Light mode"}
                        </p>
                    </div>
                ) : (
                    <div className="w-full min-w-32">
                        <div className="relative min-h-9 min-w-9">
                            <SunMoonIcon
                                size={16}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-sidebar-primary-foreground"
                            />
                        </div>

                        <p className="flex items-center w-full min-w-32 group-hover:text-sidebar-primary-foreground">Theme mode</p>
                    </div>
                )}
            </SidebarMenuButton>
        </SidebarMenuItem>
    );
};

export default ChangeTheme;
