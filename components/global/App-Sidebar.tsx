"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { sidebarItems } from "@/components/global/app-sidebar-item-list";
import ChangeTheme from "@/components/global/ThemeToggle";
import { Home, FolderGit2, Settings, ChevronRight, XIcon } from "lucide-react";
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
    SidebarGroupLabel,
} from "@/components/ui/sidebar";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { PageIdentifier } from "@/components/global/PageIdentifier";

export function AppSidebar() {
    const pathname = usePathname();
    const { isMobile } = useSidebar();

    if (isMobile) {
        return (
            <Drawer>
                <DrawerTrigger className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-foreground/10 px-6 py-1.5 rounded-md cursor-pointer">
                    Menu
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader className="flex flex-row justify-between items-center">
                        <DrawerTitle>Select a tool</DrawerTitle>
                        <DrawerClose className="w-fit cursor-pointer">
                            <XIcon />
                        </DrawerClose>
                        <DrawerDescription className="sr-only">
                            Select a tool from the list below
                        </DrawerDescription>
                    </DrawerHeader>
                    <div className="space-y-4 min-h-72 overflow-scroll p-2">
                        {sidebarItems.map((category) => (
                            <div key={category.title} className="bg-foreground/5 rounded-md p-4">
                                <h2 className="text-sm font-semibold mb-3 text-accent">
                                    {category.title}
                                </h2>
                                <ul className="space-y-2">
                                    {category.items.map((tool) => (
                                        <li key={tool.url}>
                                            <Link
                                                href={tool.url}
                                                className="flex items-center justify-between gap-2 text-sm p-2 rounded hover:bg-foreground/20"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <tool.icon className="w-4 h-4" />
                                                    <span className="whitespace-nowrap">
                                                        {tool.title}
                                                    </span>
                                                </div>
                                                <ChevronRight className="w-4 h-4 text-muted" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* <DrawerFooter>
                        <DrawerClose>Cancel</DrawerClose>
                    </DrawerFooter> */}
                </DrawerContent>
            </Drawer>
        );
    }

    return (
        <Sidebar collapsible="none" className="h-screen border-r border-border">
            <SidebarHeader className="overflow-hidden px-3 py-2.5 hidden md:block">
                <div className="relative hidden md:block">
                    <p className="flex flex-col min-w-52 transition-opacity duration-200 ease-linear text-md font-semibold">
                        EDE
                        <span className="text-xs text-muted-foreground font-normal">
                            Your Everyday Digital Essentials.
                        </span>
                    </p>
                </div>
            </SidebarHeader>
            <SidebarSeparator className="mx-0 h-[0.5px]!" />
            <SidebarContent>
                <SidebarGroup key={`Dashboard menu group`}>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton
                                asChild
                                isActive={pathname === "/" ? true : false}
                                className="min-h-9 min-w-9"
                            >
                                <Link
                                    href="/"
                                    className="data-[active=true]:bg-foreground data-[active=true]:text-background"
                                >
                                    <Home
                                        size={15}
                                        className={`${
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
                                    <FolderGit2 size={15} />
                                    <p className="mx-2 min-w-32">Request a tool</p>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton
                                asChild
                                isActive={pathname === "/settings" ? true : false}
                                className="min-h-9 min-w-9"
                            >
                                <Link href="/settings">
                                    <Settings
                                        size={15}
                                        className={`${
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
                <SidebarSeparator className="mx-0" />
                {sidebarItems.map((group) => (
                    <SidebarGroup key={`${group.title} menu group`} className="py-2 mb-5 md:mb-0">
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
                                        isActive={pathname === item.url ? true : false}
                                        className="min-h-9 min-w-9"
                                    >
                                        <Link
                                            href={item.url}
                                            className="data-[active=true]:bg-foreground data-[active=true]:text-background space-x-1"
                                        >
                                            {item.icon && (
                                                <item.icon
                                                    className={`${
                                                        pathname === item.url
                                                            ? "text-primary"
                                                            : "text-foreground"
                                                    }`}
                                                />
                                            )}
                                            <p className="min-w-32">{item.title}</p>
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
