import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
// import Header from "@/components/global/Header";
// import { AppSidebar } from "@/components/global/App-Sidebar";

const dmSans = DM_Sans({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "EDE - Everyday Digital Essentials",
    description:
        "EDE: Everyday Digital Essentials is your all-in-one utility hub designed to make daily digital tasks simple, fast, and stress free. Instead of juggling multiple apps, EDE brings together over 20 powerful tools in one sleek package. Whether you're managing your schedule, converting files, generating secure passwords, or jotting down quick notes, EDE is built to be the toolbox you can rely on",
    icons: {
        icon: "/images/logo.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${dmSans.className} antialiased`}>
                <ThemeProvider storageKey="ede-theme">
                    <SidebarProvider defaultOpen={false}>
                        <TooltipProvider>
                            {/* <AppSidebar /> */}
                            <div>
                                {/* <Header /> */}
                                <main>
                                    {children}
                                </main>
                            </div>
                        </TooltipProvider>
                    </SidebarProvider>
                </ThemeProvider>
                <Toaster />
            </body>
        </html>
    );
}
