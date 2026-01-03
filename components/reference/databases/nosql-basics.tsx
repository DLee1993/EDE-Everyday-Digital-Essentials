export default function NoSQLBasics() {
    return (
        <div className="space-y-10">
            {/* Page Title */}
            <h1 className="text-3xl font-bold">NoSQL Basics</h1>

            {/* Overview */}
            <section id="overview" className="space-y-3">
                <p>
                    NoSQL databases store data in flexible, non-relational formats such as
                    documents, key-value pairs, or wide-column structures. They don&apos;t require a
                    fixed schema, making them ideal for rapidly changing or unstructured data.
                </p>
                <p>
                    This page introduces the core concepts behind NoSQL and how it differs from
                    traditional relational databases.
                </p>
            </section>

            {/* Document Databases */}
            <section id="document-databases" className="space-y-3">
                <h2 className="text-xl font-semibold">Document Databases</h2>
                <p>
                    Document databases store data as JSON-like objects. Each document can have its
                    own structure, making this model highly flexible.
                </p>

                <p className="font-medium">Common document databases:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>MongoDB</li>
                    <li>Firebase Firestore</li>
                    <li>CouchDB</li>
                </ul>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`{
  "id": 1,
  "name": "Alice",
  "email": "alice@example.com",
  "preferences": {
    "theme": "dark",
    "notifications": true
  }
}`}
                </pre>
            </section>

            {/* Collections */}
            <section id="collections" className="space-y-3">
                <h2 className="text-xl font-semibold">Collections</h2>
                <p>
                    Documents are grouped into <strong>collections</strong>. Unlike SQL tables,
                    collections don&apos;t enforce a strict schema — each document can have
                    different fields.
                </p>

                <p>
                    This flexibility is useful when your data evolves over time or when different
                    records naturally have different shapes.
                </p>
            </section>

            {/* Querying */}
            <section id="querying" className="space-y-3">
                <h2 className="text-xl font-semibold">Querying Data</h2>
                <p>
                    NoSQL databases use their own query languages. In MongoDB, for example, queries
                    are written using JSON-like syntax.
                </p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`db.users.find({ age: { $gt: 18 } })`}
                </pre>

                <p>
                    Queries are typically fast and efficient, especially when paired with indexes.
                </p>
            </section>

            {/* Updating */}
            <section id="updating" className="space-y-3">
                <h2 className="text-xl font-semibold">Updating Data</h2>
                <p>
                    Updating documents is straightforward and often uses operators to modify
                    specific fields.
                </p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`db.users.updateOne(
  { id: 1 },
  { $set: { email: "new@example.com" } }
)`}
                </pre>
            </section>

            {/* When NoSQL Shines */}
            <section id="when-nosql-shines" className="space-y-3">
                <h2 className="text-xl font-semibold">When NoSQL Shines</h2>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Your data doesn&apos;t fit neatly into tables</li>
                    <li>You need to store nested or complex objects</li>
                    <li>Your data structure changes frequently</li>
                    <li>You need to scale horizontally across many servers</li>
                    <li>You want fast reads and writes</li>
                </ul>
            </section>

            {/* Common Pitfalls */}
            <section id="common-pitfalls" className="space-y-3">
                <h2 className="text-xl font-semibold">Common Pitfalls</h2>
                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        <strong>Inconsistent document shapes:</strong>
                        Flexibility can lead to messy data if not managed carefully.
                    </li>
                    <li>
                        <strong>Limited relational features:</strong>
                        NoSQL isn&apos;t ideal for complex joins or strict relationships.
                    </li>
                    <li>
                        <strong>Over-nesting:</strong>
                        Deeply nested documents can become hard to query and maintain.
                    </li>
                </ul>
            </section>
        </div>
    );
}
