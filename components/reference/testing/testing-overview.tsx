export default function TestingOverview() {
    return (
        <div className="space-y-10">
            {/* Page Title */}
            <header className="space-y-3 h-fit">
                <h1 className="text-3xl font-bold">Testing Overview</h1>

                <p>
                    Testing ensures your code works as expected and continues to work as your
                    application grows. It helps catch bugs early, improves confidence, and makes
                    refactoring safer.
                </p>
            </header>

            {/* Why Testing Matters */}
            <section id="why-testing-matters" className="space-y-3">
                <h2 className="text-xl font-semibold">Why Testing Matters</h2>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Prevents bugs from reaching users</li>
                    <li>Makes refactoring safer</li>
                    <li>Documents expected behaviour</li>
                    <li>Improves long-term maintainability</li>
                </ul>
            </section>

            {/* Types of Tests */}
            <section id="types-of-tests" className="space-y-3">
                <h2 className="text-xl font-semibold">Types of Tests</h2>
                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        <strong>Unit tests</strong> — test small, isolated pieces of code
                    </li>
                    <li>
                        <strong>Integration tests</strong> — test how parts of the system work
                        together
                    </li>
                    <li>
                        <strong>E2E tests</strong> — simulate real user behaviour
                    </li>
                </ul>
            </section>

            {/* Testing Pyramid */}
            <section id="testing-pyramid" className="space-y-3">
                <h2 className="text-xl font-semibold">The Testing Pyramid</h2>
                <p>
                    A common guideline is to write many unit tests, fewer integration tests, and
                    even fewer E2E tests. This keeps your test suite fast and reliable.
                </p>
            </section>
        </div>
    );
}
