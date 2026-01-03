export default function UnitTesting() {
    return (
        <div className="space-y-10">
            {/* Page Title */}
            <header className="space-y-3 h-fit">
                <h1 className="text-3xl font-bold">Unit Testing</h1>

                <p>
                    Unit tests check small, isolated pieces of logic. They are fast, reliable, and
                    form the foundation of a healthy test suite.
                </p>
            </header>

            {/* What is Unit Testing */}
            <section id="what-is-unit-testing" className="space-y-3">
                <h2 className="text-xl font-semibold">What is Unit Testing?</h2>
                <p>
                    A unit test verifies the behaviour of a single function or component in
                    isolation. It should not depend on external systems like databases or APIs.
                </p>
            </section>

            {/* Example */}
            <section id="example" className="space-y-3">
                <h2 className="text-xl font-semibold">Example</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`function add(a, b) {
  return a + b;
}

test("adds numbers", () => {
  expect(add(2, 3)).toBe(5);
});`}
                </pre>
            </section>

            {/* Good Unit Tests */}
            <section id="good-unit-tests" className="space-y-3">
                <h2 className="text-xl font-semibold">What Makes a Good Unit Test?</h2>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Fast</li>
                    <li>Isolated</li>
                    <li>Deterministic</li>
                    <li>Easy to understand</li>
                </ul>
            </section>
        </div>
    );
}
