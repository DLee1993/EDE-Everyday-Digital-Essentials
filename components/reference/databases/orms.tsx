export default function ORMs() {
    return (
        <div className="space-y-10">
            {/* Page Title */}
            <header className="space-y-3 h-fit">
                <h1 className="text-xl font-bold">ORMs</h1>
                <p>
                    An ORM (Object-Relational Mapping) is a tool that lets you interact with a
                    database using code instead of writing SQL queries manually. ORMs generate the
                    SQL for you, handle migrations, and provide a clean, structured way to work with
                    data.
                </p>
                <p>
                    Modern web development often uses ORMs to simplify database access and keep
                    application code consistent and maintainable.
                </p>
            </header>

            {/* What an ORM Does */}
            <section id="what-an-orm-does" className="space-y-3">
                <h2 className="text-xl font-semibold">What an ORM Does</h2>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Defines your data models in code</li>
                    <li>Generates SQL queries automatically</li>
                    <li>Handles database migrations</li>
                    <li>Validates data before saving</li>
                    <li>Provides a consistent API for reading and writing data</li>
                </ul>
            </section>

            {/* Popular ORMs */}
            <section id="popular-orms" className="space-y-3">
                <h2 className="text-xl font-semibold">Popular ORMs</h2>

                <p className="font-medium">Common ORMs used in modern web development:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        <strong>Prisma</strong> — TypeScript-first ORM for SQL databases
                    </li>
                    <li>
                        <strong>Mongoose</strong> — ODM (Object Document Mapper) for MongoDB
                    </li>
                    <li>
                        <strong>Drizzle ORM</strong> — Lightweight, SQL-focused, schema-safe ORM
                    </li>
                </ul>
            </section>

            {/* Models */}
            <section id="models" className="space-y-3">
                <h2 className="text-xl font-semibold">Models</h2>
                <p>
                    A <strong>model</strong> represents a table (SQL) or collection (NoSQL). It
                    defines the shape of your data and the fields each record contains.
                </p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`model User {
  id        Int     @id @default(autoincrement())
  name      String
  email     String  @unique
  createdAt DateTime @default(now())
}`}
                </pre>

                <p>
                    This Prisma example defines a <code>User</code> model with four fields.
                </p>
            </section>

            {/* Querying */}
            <section id="querying" className="space-y-3">
                <h2 className="text-xl font-semibold">Querying Data</h2>
                <p>
                    ORMs let you query data using code instead of SQL. This improves readability and
                    reduces the chance of syntax errors.
                </p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`const users = await prisma.user.findMany();`}
                </pre>

                <p>This example retrieves all users using Prisma.</p>
            </section>

            {/* Creating Records */}
            <section id="creating-records" className="space-y-3">
                <h2 className="text-xl font-semibold">Creating Records</h2>
                <p>Creating new records is simple and uses the ORM&apos;s API.</p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`await prisma.user.create({
  data: {
    name: "Alice",
    email: "alice@example.com"
  }
});`}
                </pre>
            </section>

            {/* Migrations */}
            <section id="migrations" className="space-y-3">
                <h2 className="text-xl font-semibold">Migrations</h2>
                <p>
                    Migrations update your database structure when your models change. ORMs generate
                    migration files automatically, ensuring your database stays in sync with your
                    code.
                </p>

                <p>
                    For example, adding a new field to a model will generate a migration that
                    updates the database table.
                </p>
            </section>

            {/* Pros and Cons */}
            <section id="pros-and-cons" className="space-y-3">
                <h2 className="text-xl font-semibold">Pros and Cons</h2>

                <h3 className="font-semibold">Pros</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Cleaner, more readable code</li>
                    <li>Automatic SQL generation</li>
                    <li>Built-in validation and type safety</li>
                    <li>Easier migrations</li>
                    <li>Consistent API across databases</li>
                </ul>

                <h3 className="font-semibold">Cons</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Less control over raw SQL</li>
                    <li>Can be slower for very complex queries</li>
                    <li>Learning curve for ORM-specific syntax</li>
                </ul>
            </section>
        </div>
    );
}
