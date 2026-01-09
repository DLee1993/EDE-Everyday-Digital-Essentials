/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";

export function useSectionsNavigation(activeTopicId: string) {
    const [sections, setSections] = useState<{ id: string; label: string }[]>([]);
    const [activeSection, setActiveSection] = useState<string>("");

    // Extract section IDs + labels whenever the topic changes
    useEffect(() => {
        const sectionNodes = document.querySelectorAll("section[id]");
        const extracted = Array.from(sectionNodes).map((node) => ({
            id: node.id,
            label: node.querySelector("h2")?.textContent || node.id,
        }));

        setSections(extracted);
        setActiveSection(extracted[0]?.id || "");
    }, [activeTopicId]);

    // Track active section on scroll
    useEffect(() => {
        const handler = () => {
            let current = activeSection;

            // NEW: detect if user is at the bottom of the page
            const scrollBottom = window.innerHeight + window.scrollY;
            const pageBottom = document.body.offsetHeight;

            if (scrollBottom >= pageBottom - 50 && sections.length > 0) {
                current = sections[sections.length - 1].id;
                setActiveSection(current);
                return;
            }

            // Existing behaviour
            sections.forEach((sec) => {
                const el = document.getElementById(sec.id);
                if (!el) return;

                const rect = el.getBoundingClientRect();
                if (rect.top <= 200 && rect.bottom >= 120) {
                    current = sec.id;
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, [sections, activeSection]);

    // Smooth scroll
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;

        window.history.replaceState(null, "", `#${id}`);

        window.scrollTo({
            top: el.offsetTop - 80,
            behavior: "smooth",
        });
    };

    return {
        sections,
        activeSection,
        setActiveSection,
        scrollToSection,
    };
}
