"use client";

import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useSectionsNavigation } from "@/hooks/reference/useSectionsNavigation";
import DocumentLayout from "@/components/reference/document-layout";
import { docs, DocKey } from "@/data/reference";

type Topic = {
    id: DocKey; // ensure topic IDs match your docs registry
    title: string;
};

type ReferenceLayoutProps = {
    topics: Topic[];
};

export default function ReferenceLayout({ topics }: ReferenceLayoutProps) {
    const [active, setActive] = useState<DocKey>(topics[0].id);

    const { sections, activeSection, setActiveSection, scrollToSection } =
        useSectionsNavigation(active);

    return (
        <section className="w-full relative flex flex-col gap-10">
            {/* GLOBAL TOOLBAR */}
            <div className="w-full flex justify-start py-4 gap-2 sticky top-15 bg-background border-b border-border">
                {/* TOPICS DROPDOWN */}
                <Select value={active} onValueChange={(value) => setActive(value as DocKey)}>
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
            <div className="w-full">
                <DocumentLayout doc={docs[active]} />
            </div>
        </section>
    );
}
