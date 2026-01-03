"use client";

import { useState, ReactNode } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useSectionsNavigation } from "@/hooks/reference/useSectionsNavigation";

type Topic = {
    id: string;
    title: string;
};

type ReferenceLayoutProps = {
    topics: Topic[];
    content: Record<string, ReactNode>;
};

export default function ReferenceLayout({ topics, content }: ReferenceLayoutProps) {
    const [active, setActive] = useState(topics[0].id);

    const { sections, activeSection, setActiveSection, scrollToSection } =
        useSectionsNavigation(active);

    return (
        <section className="w-full relative flex flex-col gap-6">
            {/* GLOBAL TOOLBAR */}
            <div className="w-full flex justify-start py-4 gap-2 sticky top-15 bg-background">
                {/* TOPICS DROPDOWN */}
                <Select value={active} onValueChange={(value) => setActive(value)}>
                    <SelectTrigger className="flex-1 max-w-xs">
                        <SelectValue placeholder="Topic" />
                    </SelectTrigger>
                    <SelectContent>
                        {topics.map((topic) => (
                            <SelectItem value={topic.id} key={topic.id}>
                                {topic.title}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                {/* SECTIONS DROPDOWN */}
                <Select
                    value={activeSection}
                    onValueChange={(value) => {
                        setActiveSection(value);
                        scrollToSection(value);
                    }}
                >
                    <SelectTrigger className="flex-1 max-w-xs">
                        <SelectValue placeholder="Section" />
                    </SelectTrigger>
                    <SelectContent>
                        {sections.map((sec) => (
                            <SelectItem value={sec.id} key={sec.id}>
                                {sec.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* ACTIVE PAGE CONTENT */}
            <div className="w-full [&_h2]:bg-primary [&_h2]:pl-1 [&_h2]:text-primary-foreground [&_p]:text-muted-foreground">
                {content[active]}
            </div>
        </section>
    );
}
