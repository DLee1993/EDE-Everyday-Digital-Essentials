"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Header() {
    return (
        <header className="flex justify-between items-center px-2 md:px-5 z-50">
            <SidebarTrigger className="w-9 h-9 md:hidden cursor-pointer" />
            <h1>hello</h1>
        </header>
    );
}
