import ReferenceLayout from "@/components/reference/reference-layout";

import HTML from "@/components/reference/web-development/html";
import CSS from "@/components/reference/web-development/css";
import JavaScript from "@/components/reference/web-development/js";
import DOM from "@/components/reference/web-development/dom";
import BrowserApi from "@/components/reference/web-development/browser-api";
import WebArchitecture from "@/components/reference/web-development/web-architecture ";
import Accessibility from "@/components/reference/web-development/accessibility";
import WebPerformance from "@/components/reference/web-development/web-performance";
import GitVersionControl from "@/components/reference/web-development/git-version-control";
import PackageManagers from "@/components/reference/web-development/package-managers";
import DevTools from "@/components/reference/web-development/dev-tools";

export default function WebDevelopmentPage() {
    const topics = [
        { id: "html", title: "HTML" },
        { id: "css", title: "CSS" },
        { id: "javascript", title: "JavaScript" },
        { id: "dom", title: "Document Object Modal" },
        { id: "browserAPI", title: "Browser API" },
        { id: "webArchitecture", title: "Web Architecture" },
        { id: "accessibility", title: "Accessibility (A11y)" },
        { id: "webPerformance", title: "Web Performance" },
        { id: "gitVersionControl", title: "Git / Version Control" },
        { id: "packageManagers", title: "Package managers" },
        { id: "devTools", title: "Developer Tools" },
    ];

    const content = {
        html: <HTML />,
        css: <CSS />,
        javascript: <JavaScript />,
        dom: <DOM />,
        browserAPI: <BrowserApi />,
        webArchitecture: <WebArchitecture />,
        accessibility: <Accessibility />,
        webPerformance: <WebPerformance />,
        gitVersionControl: <GitVersionControl />,
        packageManagers: <PackageManagers />,
        devTools: <DevTools />,
    };

    return <ReferenceLayout topics={topics} content={content} />;
}
