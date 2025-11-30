"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { sidebarItems } from "@/components/global/app-sidebar-item-list";
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
    SidebarSeparator,
    useSidebar,
    SidebarTrigger,
    SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { PageIdentifier } from "@/components/global/PageIdentifier";

export function AppSidebar() {
    const pathname = usePathname();
    console.log(pathname)
    const { open, isMobile, setOpen, setOpenMobile } = useSidebar();

    const toggleMenu = (bool: boolean) => {
        setOpen(bool);
        setOpenMobile(bool);
    };

    return (
        <Sidebar collapsible="icon" variant="sidebar">
            <SidebarHeader className="overflow-hidden px-3 py-2.5 hidden md:block">
                <div className="relative hidden md:block">
                    <SidebarTrigger className="absolute top-1/2 -translate-y-1/2 -right-[5.9px] min-w-9 min-h-9 z-50 cursor-pointer hover:bg-foreground/15 hover:text-accent" />

                    <p
                        className={`flex flex-col min-w-52 transition-opacity duration-200 ease-linear text-md font-semibold ${
                            !open && "opacity-0"
                        }`}
                    >
                        EDE
                        <span className="text-xs text-muted-foreground font-normal">
                            Your Everyday Digital Essentials.
                        </span>
                    </p>
                </div>
            </SidebarHeader>
            <SidebarSeparator className="mx-0" />
            <SidebarContent
                className={`overflow-x-hidden ${
                    open ? "overflow-y-auto" : "overflow-y-auto! hiddenScrollbar"
                }`}
            >
                <SidebarGroup key={`Dashboard menu group`}>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton
                                asChild
                                tooltip="Home"
                                isActive={pathname === "/" ? true : false}
                                className="min-h-9 min-w-9"
                                onClick={() => toggleMenu(false)}
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
                                    <p
                                        className={`mx-2 min-w-32 transition-opacity duration-200 ease-linear ${
                                            !open && !isMobile && "opacity-0"
                                        }`}
                                    >
                                        Home
                                    </p>
                                    {pathname === "/" && <PageIdentifier />}
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton
                                asChild
                                tooltip="Request a tool"
                                className="min-h-9 min-w-9"
                                onClick={() => toggleMenu(false)}
                            >
                                <Link href="https://github.com/DLee1993/toolbox" target="_blank">
                                    <FolderGit2 size={15} className="ml-0.5" />
                                    <p
                                        className={`mx-2 min-w-32 transition-opacity duration-200 ease-linear ${
                                            !open && !isMobile && "opacity-0"
                                        }`}
                                    >
                                        Request a tool
                                    </p>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton
                                asChild
                                tooltip="Settings"
                                isActive={pathname === "/settings" ? true : false}
                                className="min-h-9 min-w-9"
                                onClick={() => toggleMenu(false)}
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
                                    <p
                                        className={`mx-2 min-w-32 transition-opacity duration-200 ease-linear ${
                                            !open && !isMobile && "opacity-0"
                                        }`}
                                    >
                                        Settings
                                    </p>
                                    {pathname === "/settings" && <PageIdentifier />}
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <ChangeTheme open={open} isMobile={isMobile} />
                    </SidebarMenu>
                </SidebarGroup>

                <SidebarSeparator className="bg-border" />

                {sidebarItems.map((group) => (
                    <SidebarGroup
                        key={`${group.title} menu group`}
                        className={`${open ? "py-2" : "py-0"} mb-5 md:mb-0`}
                    >
                        <SidebarGroupLabel
                            className={`pointer-events-none text-accent text-[13px] ${
                                isMobile ? "h-8" : "h-5"
                            } mb-2`}
                        >
                            {group.title}
                        </SidebarGroupLabel>
                        <SidebarMenu>
                            {group.items.map((item, i) => (
                                <SidebarMenuItem key={`menu-item-${i}`}>
                                    <SidebarMenuButton
                                        asChild
                                        tooltip={item.title}
                                        isActive={pathname === item.url ? true : false}
                                        className="min-h-9 min-w-9"
                                        onClick={() => toggleMenu(false)}
                                    >
                                        <Link
                                            href={item.url}
                                            className="data-[active=true]:bg-foreground data-[active=true]:text-background space-x-2"
                                        >
                                            {item.icon && (
                                                <item.icon
                                                    className={`ml-0.5 ${
                                                        pathname === item.url
                                                            ? "text-primary"
                                                            : "text-foreground"
                                                    }`}
                                                />
                                            )}
                                            <p
                                                className={`min-w-32 transition-opacity duration-200 ease-linear whitespace-nowrap ${
                                                    !open && !isMobile && "opacity-0"
                                                }`}
                                            >
                                                {item.title}
                                            </p>
                                            {pathname === item.url && <PageIdentifier />}
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroup>
                ))}
            </SidebarContent>
        </Sidebar>
    );
}
