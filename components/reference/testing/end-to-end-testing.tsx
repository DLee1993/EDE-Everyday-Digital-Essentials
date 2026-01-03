export default function E2ETesting() {
    return (
        <div className="space-y-10">
            {/* Page Title */}
            <header className="space-y-3 h-fit">
                <h1 className="text-3xl font-bold">End-to-End Testing</h1>

                <p>
                    End-to-end (E2E) tests simulate real user behaviour by interacting with your
                    application through the UI. They provide the highest confidence but are slower
                    and more complex than other test types.
                </p>
            </header>

            {/* What is E2E Testing */}
            <section id="what-is-e2e-testing" className="space-y-3">
                <h2 className="text-xl font-semibold">What is E2E Testing?</h2>
                <p>
                    E2E tests run your full application in a browser-like environment and perform
                    actions such as clicking buttons, filling forms, and navigating pages.
                </p>
            </section>

            {/* Example */}
            <section id="example" className="space-y-3">
                <h2 className="text-xl font-semibold">Example</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`test("user can log in", async ({ page }) => {
  await page.goto("/login");
  await page.fill("#email", "alice@example.com");
  await page.fill("#password", "password123");
  await page.click("button[type=submit]");
  await expect(page).toHaveURL("/dashboard");
});`}
                </pre>
            </section>

            {/* When to Use */}
            <section id="when-to-use" className="space-y-3">
                <h2 className="text-xl font-semibold">When to Use E2E Tests</h2>
                <ul className="list-disc pl-6 space-y-1">
                    <li>To verify critical user flows</li>
                    <li>To ensure the whole system works together</li>
                    <li>To catch issues unit/integration tests miss</li>
                </ul>
            </section>
        </div>
    );
}
