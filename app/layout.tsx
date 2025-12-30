import type { Metadata } from "next";
import { DM_Sans, Courier_Prime } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "next-themes";
import StoreProvider from "@/store/provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/global/Header";
import { AppSidebar } from "@/components/global/App-Sidebar";
import { Toaster } from "@/components/ui/sonner";
import FocusTimerAlarm from "@/components/focus-timer/alarm";
import { ToolEngine } from "@/store/ToolEngines";

const dmSans = DM_Sans({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
});
const courierPrime = Courier_Prime({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-prime",
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
            <body className={`${dmSans.className} ${courierPrime.variable} antialiased`}>
                <StoreProvider>
                    <ToolEngine />
                    <ThemeProvider storageKey="ede-theme">
                        <SidebarProvider defaultOpen={false}>
                            <TooltipProvider>
                                <AppSidebar />
                                <div className="w-full flex flex-col min-h-screen">
                                    <Header />
                                    <main className="flex justify-center items-center flex-1 py-5 px-2.5 [&>section]:flex-1 [&>section]:h-full [&>section]:flex [&>section]:flex-col [&>section]:justify-center [&>section]:items-center">
                                        {children}
                                    </main>
                                </div>
                            </TooltipProvider>
                        </SidebarProvider>
                    </ThemeProvider>
                    <Toaster />
                    <FocusTimerAlarm />
                </StoreProvider>
            </body>
        </html>
    );
}
