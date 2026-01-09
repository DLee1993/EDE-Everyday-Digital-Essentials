import { useSidebar } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

export function useSidebarNavigation() {
    const { isMobile, openMobile, setOpenMobile } = useSidebar();
    const pathname = usePathname();

    function closeOnNavigate(targetUrl: string) {
        // Desktop: do nothing
        if (!isMobile) return;

        // Clicking the current page: do nothing
        if (targetUrl === pathname) return;

        // Sidebar already closed: do nothing
        if (!openMobile) return;

        // Close the sidebar (never toggle)
        setOpenMobile(false);
    }

    return { closeOnNavigate };
}
