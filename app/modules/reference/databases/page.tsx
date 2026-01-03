import NoSQLBasics from "@/components/reference/databases/nosql-basics";
import ORMs from "@/components/reference/databases/orms";
import SQLBasics from "@/components/reference/databases/sql-basics";
import SQLvsNoSQL from "@/components/reference/databases/sql-vs-nosql";
import ReferenceLayout from "@/components/reference/ReferenceLayout";

export default function Databases() {
    const topics = [
        { id: "SQLvNoSQL", title: "SQL V NoSQL" },
        { id: "SQLBasics", title: "Sql-basics" },
        { id: "NoSQLbasivs", title: "Layout" },
        { id: "orms", title: "Spacing" },
    ];

    const content = {
        SQLvNoSQL: <SQLvsNoSQL />,
        SQLBasics: <SQLBasics />,
        NoSQLbasivs: <NoSQLBasics />,
        orms: <ORMs />,
    };

    return <ReferenceLayout topics={topics} content={content} />;
}
