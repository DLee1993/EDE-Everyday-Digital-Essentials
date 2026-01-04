import ReferenceLayout from "@/components/reference/reference-layout";

import Typography from "@/components/reference/design/typography";
import Colour from "@/components/reference/design/colour";
import Layout from "@/components/reference/design/layout";
import Spacing from "@/components/reference/design/spacing";
import Components from "@/components/reference/design/components";

export default function DesignPage() {
    const topics = [
        { id: "typography", title: "Typography" },
        { id: "colour", title: "Colour" },
        { id: "layout", title: "Layout" },
        { id: "spacing", title: "Spacing" },
        { id: "components", title: "Components" },
    ];

    const content = {
        typography: <Typography />,
        colour: <Colour />,
        layout: <Layout />,
        spacing: <Spacing />,
        components: <Components />,
    };

    return <ReferenceLayout topics={topics} content={content} />;
}
