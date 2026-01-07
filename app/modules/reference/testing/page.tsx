import ReferenceLayout from "@/components/reference/reference-layout";
import { DocKey } from "@/data/reference";

export default function Testing() {
    const topics = [
        { id: "testing-overview" as DocKey, title: "Testing Overview" },
        { id: "unit-testing" as DocKey, title: "Unit Testing" },
        { id: "integration-testing" as DocKey, title: "Integration Testing" },
        { id: "e2e-testing" as DocKey, title: "End‑to‑End Testing" },
        { id: "testing-tools" as DocKey, title: "Testing Tools" },
    ];

    return <ReferenceLayout topics={topics} />;
}
