import { useState } from "react";
import { usePathname } from "next/navigation";
import { PageIdentifier } from "@/components/global/page-identifier";
import { useSidebarNavigation } from "@/hooks/global/use-sidebar-navigation";
import { sidebarItems } from "@/components/global/app-sidebar-item-list";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
    SidebarGroup,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuBadge,
    SidebarGroupLabel,
} from "@/components/ui/sidebar";

// Flatten the toolbox for search
const allTools = sidebarItems.flatMap((category) =>
    category.items.map((item) => ({
        ...item,
        category: category.title,
        searchTerms: item.searchTerms ?? [],
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
            <mark key={i} className="bg-primary/50 text-foreground px-1 rounded-xs">
                {part}
            </mark>
        ) : (
            part
        )
    );
}

export const MenuSearch = () => {
    const [query, setQuery] = useState("");
    const pathname = usePathname();
    const { closeOnNavigate } = useSidebarNavigation();

    const filteredTools = query
        ? allTools.filter((tool) => {
              const q = query.toLowerCase();

              const inTitle = tool.title.toLowerCase().includes(q);
              const inCategory = tool.category.toLowerCase().includes(q);
              const inTerms = tool.searchTerms.some((term: string) =>
                  term.toLowerCase().includes(q)
              );

              return inTitle || inCategory || inTerms;
          })
        : allTools;

    const groupedResults = groupByCategory(filteredTools);

    return (
        <div>
            <Input
                type="search"
                name="menuSearch"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search tools..."
                className="w-[95%] ml-2 p-2 border border-border focus-visible:border-border focus-visible:ring-1 shadow-none mb-2"
            />
            {query && filteredTools.length === 0 && (
                <p className="text-muted text-sm">No tools found for {query}.</p>
            )}
            {Object.entries(groupedResults).map(([category, tools]) => (
                <SidebarGroup key={`${category} menu group`}>
                    <SidebarGroupLabel className="text-sm text-primary bg-primary/10 min-h-9">
                        {category}
                        <SidebarMenuBadge className="text-primary">{tools.length}</SidebarMenuBadge>
                    </SidebarGroupLabel>
                    <SidebarMenu>
                        {tools.map((item, i) => (
                            <SidebarMenuItem key={`menu-item-${i}`}>
                                <SidebarMenuButton
                                    asChild
                                    isActive={pathname === item.url ? true : false}
                                    className="min-h-9 min-w-9"
                                    onClick={() => closeOnNavigate(item.url)}
                                >
                                    <Link
                                        href={item.url}
                                        className="data-[active=true]:bg-transparent! data-[active=true]:text-background hover:bg-hover! space-x-2 group"
                                    >
                                        {item.icon && (
                                            <item.icon
                                                className={`ml-[3px] ${
                                                    pathname === item.url
                                                        ? "text-primary"
                                                        : "text-foreground/75 group-hover:text-foreground"
                                                }`}
                                            />
                                        )}
                                        <p
                                            className={`min-w-32 ${
                                                pathname === item.url
                                                    ? "text-primary"
                                                    : "text-foreground/75 group-hover:text-foreground"
                                            }`}
                                        >
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
