export default function SQLBasics() {
    return (
        <div className="space-y-10">
            {/* Page Title */}
            <header className="space-y-3 h-fit">
                <h1 className="text-xl font-bold">SQL Basics</h1>
                <p>
                    SQL (Structured Query Language) is used to interact with relational databases.
                    It lets you create tables, insert data, update records, and retrieve information
                    using clear, structured commands.
                </p>
                <p>These basics form the foundation of almost every SQL workflow.</p>
            </header>

            {/* SELECT */}
            <section id="select" className="space-y-3">
                <h2 className="text-xl font-semibold">SELECT</h2>
                <p>
                    <strong>SELECT</strong> retrieves data from a table. It&apos;s the most commonly
                    used SQL command.
                </p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`SELECT * FROM users;`}
                </pre>

                <p>You can select specific columns:</p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`SELECT name, email FROM users;`}
                </pre>
            </section>

            {/* WHERE */}
            <section id="where" className="space-y-3">
                <h2 className="text-xl font-semibold">WHERE</h2>
                <p>
                    <strong>WHERE</strong> filters results based on a condition.
                </p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`SELECT * FROM users
WHERE age > 18;`}
                </pre>
            </section>

            {/* INSERT */}
            <section id="insert" className="space-y-3">
                <h2 className="text-xl font-semibold">INSERT</h2>
                <p>
                    <strong>INSERT</strong> adds a new row to a table.
                </p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`INSERT INTO users (name, email)
VALUES ('Alice', 'alice@example.com');`}
                </pre>
            </section>

            {/* UPDATE */}
            <section id="update" className="space-y-3">
                <h2 className="text-xl font-semibold">UPDATE</h2>
                <p>
                    <strong>UPDATE</strong> modifies existing data in a table.
                </p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`UPDATE users
SET email = 'new@example.com'
WHERE id = 1;`}
                </pre>
            </section>

            {/* DELETE */}
            <section id="delete" className="space-y-3">
                <h2 className="text-xl font-semibold">DELETE</h2>
                <p>
                    <strong>DELETE</strong> removes rows from a table.
                </p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`DELETE FROM users
WHERE id = 1;`}
                </pre>

                <p className="text-muted-foreground">
                    Always use <strong>WHERE</strong> with DELETE — without it, you&apos;ll remove
                    every row in the table.
                </p>
            </section>

            {/* ORDER BY */}
            <section id="order-by" className="space-y-3">
                <h2 className="text-xl font-semibold">ORDER BY</h2>
                <p>
                    <strong>ORDER BY</strong> sorts results by a specific column.
                </p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`SELECT * FROM users
ORDER BY created_at DESC;`}
                </pre>
            </section>

            {/* LIMIT */}
            <section id="limit" className="space-y-3">
                <h2 className="text-xl font-semibold">LIMIT</h2>
                <p>
                    <strong>LIMIT</strong> restricts how many rows are returned.
                </p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`SELECT * FROM users
LIMIT 10;`}
                </pre>
            </section>

            {/* Joins */}
            <section id="joins" className="space-y-3">
                <h2 className="text-xl font-semibold">Joins</h2>
                <p>
                    Joins combine data from multiple tables using shared values. They&apos;re
                    essential for working with relational data.
                </p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`SELECT orders.id, users.name
FROM orders
JOIN users ON orders.user_id = users.id;`}
                </pre>

                <p>This example returns each order along with the user who created it.</p>
            </section>
        </div>
    );
}
