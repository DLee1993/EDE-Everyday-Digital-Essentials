import ReferenceLayout from "@/components/reference/ReferenceLayout";

import Markdown from "@/components/reference/developer-workflow/markdown";
import Terminal from "@/components/reference/developer-workflow/terminal";
import GitFlow from "@/components/reference/developer-workflow/git-workflow";
import Debugging from "@/components/reference/developer-workflow/debugging";
import Automation from "@/components/reference/developer-workflow/automation";
import ProjectStructure from "@/components/reference/developer-workflow/project-structure";
import CodeEditors from "@/components/reference/developer-workflow/code-editors";
import EnvironmentVariables from "@/components/reference/developer-workflow/environment-variables";

export default function DeveloperWorkflowPage() {
    const topics = [
        { id: "markdown", title: "Markdown" },
        { id: "terminal", title: "Terminal" },
        { id: "gitFlow", title: "Git Workflow" },
        { id: "debugging", title: "Debugging" },
        { id: "automation", title: "Automation" },
        { id: "structure", title: "Project Structure" },
        { id: "editors", title: "Editors" },
        { id: "env", title: "Environment Variables" },
    ];

    const content = {
        markdown: <Markdown />,
        terminal: <Terminal />,
        gitFlow: <GitFlow />,
        debugging: <Debugging />,
        automation: <Automation />,
        structure: <ProjectStructure />,
        editors: <CodeEditors />,
        env: <EnvironmentVariables />,
    };

    return <ReferenceLayout topics={topics} content={content} />;
}
