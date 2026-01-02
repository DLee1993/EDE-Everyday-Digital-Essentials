import ReferenceLayout from "@/components/reference/ReferenceLayout";

import HTML from "@/components/reference/web-development/HTML";
import CSS from "@/components/reference/web-development/CSS";
import JavaScript from "@/components/reference/web-development/JavaScript";

export default function WebDevelopmentPage() {
    const topics = [
        { id: "html", title: "HTML" },
        { id: "css", title: "CSS" },
        { id: "javascript", title: "JavaScript" },
    ];

    const content = {
        html: <HTML />,
        css: <CSS />,
        javascript: <JavaScript />,
    };

    return <ReferenceLayout topics={topics} content={content} />;
}
