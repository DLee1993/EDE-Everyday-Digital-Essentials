"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getLocalizedGreeting } from "@/lib/global/GreetUser";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import { PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import HowToUse from "@/components/global/How-to-use";
import { rawSidebarItems } from "@/components/global/app-sidebar-item-list";
import { Greeting } from "@/types";

export default function Header() {
    const pathname = usePathname();
    const [greeting, setGreeting] = useState<Greeting>({
        message: "",
        icon: undefined,
    });

    useEffect(() => {
        try {
            const greeting = getLocalizedGreeting();
            if (greeting) {
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setGreeting({ message: greeting.message, icon: greeting.icon });
            }
        } catch (error) {
            console.error("Greeting error:", error);
        }
    }, []);
    return (
        <header className="sticky top-0 left-0 w-full flex justify-between items-center px-2.5 z-50 border-b border-border bg-background">
            <div className="w-full min-[425px]:w-auto flex justify-between sm:justify-center items-center gap-5">
                <SidebarTrigger variant="secondary" className="lg:hidden cursor-pointer" />
                <div className="hidden min-[425px]:flex items-center gap-2 text-sm">
                    <div>{greeting.icon}</div>
                    <h1>{greeting.message}</h1>
                </div>
            </div>
            <ul className="flex gap-2.5 md:gap-5 text-sm">
                {rawSidebarItems
                    .flatMap((cat) => cat.items)
                    .some((item) => item.url === pathname) && (
                    <li>
                        <HowToUse />
                    </li>
                )}
                <li>
                    <Link href="/contact">
                        <Button variant="link" className="pointer-events-none text-foreground">
                            <PhoneIcon size={15} />
                            <span className="hidden sm:block">Get in touch</span>
                        </Button>
                    </Link>
                </li>
            </ul>
        </header>
    );
}
