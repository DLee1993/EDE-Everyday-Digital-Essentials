import ReferenceLayout from "@/components/reference/reference-layout";
import { DocKey } from "@/data/reference";

export default function DeveloperWorkflowPage() {
    const topics = [
        { id: "markdown" as DocKey, title: "Markdown" },
        { id: "terminal" as DocKey, title: "Terminal" },
        { id: "git-workflow" as DocKey, title: "Git Workflow" },
        { id: "debugging" as DocKey, title: "Debugging" },
        { id: "automation" as DocKey, title: "Automation" },
        { id: "project-structure" as DocKey, title: "Project Structure" },
        { id: "code-editors" as DocKey, title: "Editors" },
        { id: "environment-variables" as DocKey, title: "Environment Variables" },
    ];

    return <ReferenceLayout topics={topics} />;
}
