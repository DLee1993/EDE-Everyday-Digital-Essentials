"use client";

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
        <div className="flex flex-col gap-6">
            {/* Mobile Dropdown */}
            <div className="md:hidden">
                <select
                    value={active}
                    onChange={(e) => setActive(e.target.value)}
                    className="w-full rounded-md border bg-background p-2 text-sm"
                >
                    {topics.map((topic) => (
                        <option key={topic.id} value={topic.id}>
                            {topic.title}
                        </option>
                    ))}
                </select>
            </div>

            {/* Desktop List */}
            <ul className="hidden md:flex gap-4 border-b pb-2">
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

            {/* Content */}
            <div className="mt-4">{content[active]}</div>
        </div>
    );
}
