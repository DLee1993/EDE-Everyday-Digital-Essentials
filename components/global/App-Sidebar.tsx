"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSidebarNavigation } from "@/hooks/global/use-sidebar-navigation";

import MenuSearch from "@/components/global/menu-search";
import ChangeTheme from "@/components/global/theme-toggle";
import { PageIdentifier } from "@/components/global/page-identifier";
import { Home, FolderGit2 } from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AppSidebar() {
    const pathname = usePathname();
    const { closeOnNavigate } = useSidebarNavigation();

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
                                onClick={() => closeOnNavigate("/")}
                            >
                                <Link
                                    href="/"
                                    className="data-[active=true]:bg-transparent! data-[active=true]:text-background hover:bg-hover! group"
                                >
                                    <Home
                                        size={15}
                                        className={`ml-0.5 ${
                                            pathname === "/"
                                                ? "text-primary"
                                                : "text-foreground/75 group-hover:text-foreground"
                                        }`}
                                    />
                                    <p
                                        className={`mx-2 min-w-32 ${
                                            pathname === "/"
                                                ? "text-primary"
                                                : "text-foreground/75 group-hover:text-foreground"
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
                                    className="hover:bg-hover! group"
                                >
                                    <FolderGit2
                                        size={15}
                                        className="ml-0.5 text-foreground/75 group-hover:text-foreground"
                                    />
                                    <p className="mx-2 min-w-32 text-foreground/75 group-hover:text-foreground">
                                        Request a tool
                                    </p>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        {/* Theme */}
                        <ChangeTheme />
                    </SidebarMenu>
                </SidebarGroup>
                <MenuSearch />
            </SidebarContent>
        </Sidebar>
    );
}
