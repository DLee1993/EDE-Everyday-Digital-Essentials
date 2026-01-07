import ReferenceLayout from "@/components/reference/reference-layout";
import { DocKey } from "@/data/reference";

export default function DesignPage() {
    const topics = [
        { id: "typography" as DocKey, title: "Typography" },
        { id: "colour" as DocKey, title: "Colour" },
        { id: "design-layout" as DocKey, title: "Layout" },
        { id: "design-spacing" as DocKey, title: "Spacing" },
        { id: "design-components" as DocKey, title: "Components" },
    ];

    return <ReferenceLayout topics={topics} />;
}
