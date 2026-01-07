import ReferenceLayout from "@/components/reference/reference-layout";
import { DocKey } from "@/data/reference";

export default function Databases() {
    const topics = [
        { id: "sql-vs-nosql" as DocKey, title: "SQL vs NoSQL" },
        { id: "sql-basics" as DocKey, title: "SQL Basics" },
        { id: "nosql-basics" as DocKey, title: "NoSQL Basics" },
        { id: "orms" as DocKey, title: "ORMs" },
    ];

    return <ReferenceLayout topics={topics} />;
}
