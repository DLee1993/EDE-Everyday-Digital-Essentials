import ReferenceLayout from "@/components/reference/reference-layout";
import TestingOverview from "@/components/reference/testing/testing-overview";
import UnitTesting from "@/components/reference/testing/unit-testing";
import IntegrationTesting from "@/components/reference/testing/integration-testing";
import EndToEnd from "@/components/reference/testing/end-to-end-testing";
import TestingTools from "@/components/reference/testing/testing-tools";

export default function Testing() {
    const topics = [
        { id: "testingOverview", title: "Testing Overview" },
        { id: "unitTesting", title: "Unit Testing" },
        { id: "integrationTesting", title: "Itegration Testing" },
        { id: "endToEnd", title: "End to End Testing" },
        { id: "testingTools", title: "Testing tools" },
    ];

    const content = {
        testingOverview: <TestingOverview />,
        unitTesting: <UnitTesting />,
        integrationTesting: <IntegrationTesting />,
        endToEnd: <EndToEnd />,
        testingTools: <TestingTools />,
    };

    return <ReferenceLayout topics={topics} content={content} />;
}
