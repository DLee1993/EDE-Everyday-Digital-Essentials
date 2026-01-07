import ReferenceLayout from "@/components/reference/reference-layout";
import { DocKey } from "@/data/reference";

export default function WebDevelopmentPage() {
    const topics = [
        { id: "html" as DocKey, title: "HTML" },
        { id: "css" as DocKey, title: "CSS" },
        { id: "js" as DocKey, title: "JavaScript" },
        { id: "dom" as DocKey, title: "Document Object Model" },
        { id: "browser-api" as DocKey, title: "Browser API" },
        { id: "web-architecture" as DocKey, title: "Web Architecture" },
        { id: "accessibility" as DocKey, title: "Accessibility (A11y)" },
        { id: "web-performance" as DocKey, title: "Web Performance" },
        { id: "git-version-control" as DocKey, title: "Git / Version Control" },
        { id: "package-managers" as DocKey, title: "Package Managers" },
        { id: "dev-tools" as DocKey, title: "Developer Tools" },
    ];

    return <ReferenceLayout topics={topics} />;
}
