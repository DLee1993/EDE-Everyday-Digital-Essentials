"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
// import { sidebarItems } from "@/components/global/app-sidebar-item-list";
import ChangeTheme from "@/components/global/ThemeToggle";
import { Home, FolderGit2, Settings } from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar";
import { PageIdentifier } from "@/components/global/PageIdentifier";
import MenuSearch from "@/components/global/MenuSearch";

export function AppSidebar() {
    const pathname = usePathname();
    const { openMobile, setOpenMobile } = useSidebar();

    return (
        <Sidebar
            collapsible="none"
            variant="sidebar"
            className="h-screen border-r border-border"
        >
            <SidebarHeader className="overflow-hidden px-3 py-2.5 hidden lg:block border-b border-border">
                <div className="relative">
                    <p className="flex flex-col min-w-52 text-md font-semibold">
                        EDE
                        <span className="text-xs text-muted-foreground font-normal">
                            Your Everyday Digital Essentials.
                        </span>
                    </p>
                </div>
            </SidebarHeader>
            <SidebarContent className="overflow-x-hidden overflow-y-auto">
                <SidebarGroup key={`Dashboard menu group`}>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton
                                asChild
                                isActive={pathname === "/" ? true : false}
                                className="min-h-9 min-w-9"
                                onClick={() => setOpenMobile(!openMobile)}
                            >
                                <Link
                                    href="/"
                                    className="data-[active=true]:bg-foreground data-[active=true]:text-background"
                                >
                                    <Home
                                        size={15}
                                        className={`ml-0.5 ${
                                            pathname === "/" ? "text-accent" : "text-foreground"
                                        }`}
                                    />
                                    <p className="mx-2 min-w-32">Home</p>
                                    {pathname === "/" && <PageIdentifier />}
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton asChild className="min-h-9 min-w-9">
                                <Link href="https://github.com/DLee1993/toolbox" target="_blank">
                                    <FolderGit2 size={15} className="ml-0.5" />
                                    <p className="mx-2 min-w-32">Request a tool</p>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton
                                asChild
                                isActive={pathname === "/settings" ? true : false}
                                className="min-h-9 min-w-9"
                                onClick={() => setOpenMobile(!openMobile)}
                            >
                                <Link href="/settings">
                                    <Settings
                                        size={15}
                                        className={`ml-0.5 ${
                                            pathname === "/settings"
                                                ? "text-accent"
                                                : "text-foreground"
                                        }`}
                                    />
                                    <p className="mx-2 min-w-32">Settings</p>
                                    {pathname === "/settings" && <PageIdentifier />}
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <ChangeTheme />
                    </SidebarMenu>
                </SidebarGroup>
                <MenuSearch open={openMobile} setOpen={setOpenMobile} />
            </SidebarContent>
        </Sidebar>
    );
}
