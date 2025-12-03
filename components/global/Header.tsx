"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Header() {
    return (
        <header className="flex justify-between items-center px-2 md:px-5 z-50 border-b border-border">
            <div className="flex justify-center items-center gap-5">
                <SidebarTrigger variant="secondary" className="lg:hidden cursor-pointer" />
                <h1>hello</h1>
            </div>
        </header>
    );
}
