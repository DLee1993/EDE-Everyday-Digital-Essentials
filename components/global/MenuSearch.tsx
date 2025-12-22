import { useState } from "react";
import { sidebarItems } from "@/components/global/app-sidebar-item-list";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { PageIdentifier } from "@/components/global/PageIdentifier";

// Flatten the toolbox for search
const allTools = sidebarItems.flatMap((category) =>
    category.items.map((item) => ({
        ...item,
        category: category.title,
    }))
);

// Group results by category
const groupByCategory = (tools: typeof allTools) => {
    return tools.reduce((acc, tool) => {
        acc[tool.category] = acc[tool.category] || [];
        acc[tool.category].push(tool);
        return acc;
    }, {} as Record<string, typeof allTools>);
};

// Highlight matching text
function highlightMatch(text: string, query: string) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.split(regex).map((part, i) =>
        regex.test(part) ? (
            <mark key={i} className="bg-primary px-1 rounded-sm">
                {part}
            </mark>
        ) : (
            part
        )
    );
}

export const MenuSearch = ({
    open,
    setOpen,
}: {
    open: boolean;
    setOpen: (open: boolean) => void;
}) => {
    const [query, setQuery] = useState("");
    const pathname = usePathname();

    const filteredTools = query
        ? allTools.filter((tool) => {
              const q = query.toLowerCase();
              return (
                  tool.title.toLowerCase().includes(q) || tool.category.toLowerCase().includes(q)
              );
          })
        : allTools;

    const groupedResults = groupByCategory(filteredTools);

    return (
        <div className="space-y-2.5">
            <Input
                type="search"
                name="menuSearch"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search tools..."
                className="w-[95%] ml-2 p-2 border-b border-t-0! border-x-0! border border-border focus-visible:border-border focus-visible:ring-1 shadow-none mb-2 rounded-none! bg-transparent"
            />
            {query && filteredTools.length === 0 && (
                <p className="text-muted text-sm">No tools found for {query}.</p>
            )}
            {Object.entries(groupedResults).map(([category, tools]) => (
                <SidebarGroup key={`${category} menu group`}>
                    <SidebarGroupLabel className="pointer-events-none text-accent text-[13px] mb-2 h-5">
                        {category}
                    </SidebarGroupLabel>
                    <SidebarMenu>
                        {tools.map((item, i) => (
                            <SidebarMenuItem key={`menu-item-${i}`}>
                                <SidebarMenuButton
                                    asChild
                                    isActive={pathname === item.url ? true : false}
                                    className="min-h-9 min-w-9"
                                    onClick={() => setOpen(!open)}
                                >
                                    <Link
                                        href={item.url}
                                        className="data-[active=true]:bg-foreground data-[active=true]:text-background space-x-2"
                                    >
                                        {item.icon && <item.icon className="ml-[3px]" />}
                                        <p className="mx-2 min-w-32">
                                            {highlightMatch(item.title, query)}
                                        </p>
                                        {pathname === item.url && <PageIdentifier />}
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            ))}
        </div>
    );
};

export default MenuSearch;
