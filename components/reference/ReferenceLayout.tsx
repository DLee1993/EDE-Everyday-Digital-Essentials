"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, ReactNode } from "react";

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

    return (
        <div className="relative w-full flex flex-col md:flex-row gap-2 md:gap-6">
            {/* Mobile Dropdown */}
            <div className="md:hidden">
                <Select onValueChange={(value) => setActive(value)}>
                    <SelectTrigger className="w-full">
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
            </div>

            <div className="sticky top-20 min-w-32 flex justify-center items-center h-fit">
                {/* Desktop List */}
                <ul className="hidden md:flex md:flex-col w-full gap-4 border-b pb-2">
                    {topics.map((topic) => (
                        <li
                            key={topic.id}
                            onClick={() => setActive(topic.id)}
                            className={`
              cursor-pointer text-sm relative pb-1 transition-colors
              ${
                  active === topic.id
                      ? "font-semibold text-primary"
                      : "text-muted-foreground hover:text-foreground"
              }
            `}
                        >
                            {topic.title}

                            {active === topic.id && (
                                <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-primary rounded-full" />
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Content */}
            <div className="mt-4 md:mt-0">{content[active]}</div>
        </div>
    );
}
