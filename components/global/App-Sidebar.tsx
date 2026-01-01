"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
// import { sidebarItems } from "@/components/global/app-sidebar-item-list";
import ChangeTheme from "@/components/global/theme-toggle";
import { Home, FolderGit2 } from "lucide-react";
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
import { PageIdentifier } from "@/components/global/page-identifier";
import MenuSearch from "@/components/global/menu-search";

export function AppSidebar() {
    const pathname = usePathname();
    const { openMobile, setOpenMobile } = useSidebar();

    return (
        <Sidebar collapsible="none" variant="sidebar" className="h-screen border-r border-border">
            <SidebarHeader className="overflow-hidden px-3 py-2.5 hidden lg:block border-b border-border">
                <div className="relative">
                    <p className="flex flex-col min-w-52 text-md font-semibold">
                        EDE
                        <span className="text-xs font-normal">
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
                                    className="data-[active=true]:bg-foreground data-[active=true]:text-background group"
                                >
                                    <Home
                                        size={15}
                                        className={`ml-0.5 ${
                                            pathname === "/"
                                                ? "text-sidebar-primary-foreground"
                                                : "group-hover:text-sidebar-primary-foreground"
                                        }`}
                                    />
                                    <p
                                        className={`mx-2 min-w-32 ${
                                            pathname === "/"
                                                ? "text-sidebar-primary-foreground"
                                                : "group-hover:text-sidebar-primary-foreground"
                                        }`}
                                    >
                                        Home
                                    </p>
                                    {pathname === "/" && <PageIdentifier />}
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton asChild className="min-h-9 min-w-9">
                                <Link
                                    href="https://github.com/DLee1993/toolbox"
                                    target="_blank"
                                    className="group"
                                >
                                    <FolderGit2
                                        size={15}
                                        className="ml-0.5 group-hover:text-sidebar-primary-foreground"
                                    />
                                    <p className="mx-2 min-w-32 group-hover:text-sidebar-primary-foreground">
                                        Request a tool
                                    </p>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        {/* Theme */}
                        <ChangeTheme />
                    </SidebarMenu>
                </SidebarGroup>
                <MenuSearch open={openMobile} setOpen={setOpenMobile} />
            </SidebarContent>
        </Sidebar>
    );
}
