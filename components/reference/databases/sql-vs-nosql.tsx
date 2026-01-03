export default function SQLvsNoSQL() {
    return (
        <div className="space-y-10">
            {/* Page Title */}
            <header className="space-y-3 h-fit">
                <h1 className="text-3xl font-bold">SQL vs NoSQL</h1>

                <p>
                    Databases store and organise data so applications can use it efficiently. The
                    two main types are <strong>SQL</strong> (relational) and
                    <strong> NoSQL</strong> (non-relational). Understanding the difference helps you
                    choose the right tool for your project.
                </p>
            </header>

            {/* What is SQL */}
            <section id="what-is-sql" className="space-y-3">
                <h2 className="text-xl font-semibold">What is SQL?</h2>
                <p>
                    SQL databases use a <strong>relational</strong> model. Data is stored in tables
                    with rows and columns, similar to a spreadsheet. Each table has a defined
                    structure called a <strong>schema</strong>.
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Structured and predictable</li>
                    <li>Uses tables, rows, and columns</li>
                    <li>Strong data consistency</li>
                    <li>Great for complex relationships</li>
                </ul>

                <p className="font-medium">Common SQL databases:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                    <li>SQLite</li>
                </ul>
            </section>

            {/* What is NoSQL */}
            <section id="what-is-nosql" className="space-y-3">
                <h2 className="text-xl font-semibold">What is NoSQL?</h2>
                <p>
                    NoSQL databases use a <strong>non-relational</strong> model. Instead of tables,
                    they store data in flexible formats like documents or key-value pairs. They
                    don&apos;t require a fixed schema.
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Flexible and schema-less</li>
                    <li>Stores documents, objects, or key-value data</li>
                    <li>Great for rapidly changing data</li>
                    <li>Scales horizontally very well</li>
                </ul>

                <p className="font-medium">Common NoSQL databases:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>MongoDB</li>
                    <li>Firebase</li>
                    <li>Redis</li>
                </ul>
            </section>

            {/* Key Differences */}
            <section id="key-differences" className="space-y-3">
                <h2 className="text-xl font-semibold">Key Differences</h2>

                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <strong>Structure:</strong>
                        SQL uses tables; NoSQL uses documents or key-value pairs.
                    </li>
                    <li>
                        <strong>Schema:</strong>
                        SQL requires a defined schema; NoSQL is flexible.
                    </li>
                    <li>
                        <strong>Relationships:</strong>
                        SQL handles complex relationships well; NoSQL prefers simpler links.
                    </li>
                    <li>
                        <strong>Scaling:</strong>
                        SQL scales vertically; NoSQL scales horizontally.
                    </li>
                    <li>
                        <strong>Consistency:</strong>
                        SQL prioritises strong consistency; NoSQL often prioritises speed and
                        availability.
                    </li>
                </ul>
            </section>

            {/* When to Use Each */}
            <section id="when-to-use" className="space-y-3">
                <h2 className="text-xl font-semibold">When to Use Each</h2>

                <h3 className="font-semibold">Use SQL when:</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Your data has clear structure</li>
                    <li>You need strong consistency</li>
                    <li>You have complex relationships</li>
                    <li>You&apos;re building financial or transactional systems</li>
                </ul>

                <h3 className="font-semibold">Use NoSQL when:</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Your data changes shape frequently</li>
                    <li>You need fast reads and writes</li>
                    <li>You&apos;re storing documents or objects</li>
                    <li>You need to scale across many servers</li>
                </ul>
            </section>
        </div>
    );
}
