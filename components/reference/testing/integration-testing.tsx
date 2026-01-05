export default function IntegrationTesting() {
    return (
        <div className="space-y-10">
            {/* Page Title */}
            <header className="space-y-3 h-fit">
                <h1 className="text-xl font-bold">Integration Testing</h1>

                <p>
                    Integration tests verify how different parts of your system work together. They
                    sit between unit tests and E2E tests in terms of scope and complexity.
                </p>
            </header>

            {/* What is Integration Testing */}
            <section id="what-is-integration-testing" className="space-y-3">
                <h2 className="text-xl font-semibold">What is Integration Testing?</h2>
                <p>
                    Integration tests check interactions between modules, such as a function calling
                    another function, or a component making a request to a mock API.
                </p>
            </section>

            {/* Example */}
            <section id="example" className="space-y-3">
                <h2 className="text-xl font-semibold">Example</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`test("loads user data", async () => {
  mockApi.getUser.mockResolvedValue({ name: "Alice" });

  const user = await loadUser();
  expect(user.name).toBe("Alice");
});`}
                </pre>
            </section>

            {/* When to Use */}
            <section id="when-to-use" className="space-y-3">
                <h2 className="text-xl font-semibold">When to Use Integration Tests</h2>
                <ul className="list-disc pl-6 space-y-1">
                    <li>When testing interactions between modules</li>
                    <li>When mocking external systems</li>
                    <li>When verifying data flow</li>
                </ul>
            </section>
        </div>
    );
}
