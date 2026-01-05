export default function TestingTools() {
    return (
        <div className="space-y-10">
            {/* Page Title */}
            <header className="space-y-3 h-fit">
                <h1 className="text-xl font-bold">Testing Tools</h1>

                <p>
                    Modern JavaScript testing uses a range of tools designed for different types of
                    tests. This page introduces the most common ones.
                </p>
            </header>

            {/* Jest */}
            <section id="jest" className="space-y-3">
                <h2 className="text-xl font-semibold">Jest</h2>
                <p>
                    Jest is a popular testing framework for JavaScript. It includes a test runner,
                    assertion library, and mocking tools.
                </p>
            </section>

            {/* Vitest */}
            <section id="vitest" className="space-y-3">
                <h2 className="text-xl font-semibold">Vitest</h2>
                <p>
                    Vitest is a fast, Vite-native test runner with Jest-compatible APIs. It&apos;s ideal
                    for modern frontend projects.
                </p>
            </section>

            {/* React Testing Library */}
            <section id="react-testing-library" className="space-y-3">
                <h2 className="text-xl font-semibold">React Testing Library</h2>
                <p>
                    React Testing Library focuses on testing components the way users interact with
                    them, rather than testing implementation details.
                </p>
            </section>

            {/* Playwright */}
            <section id="playwright" className="space-y-3">
                <h2 className="text-xl font-semibold">Playwright</h2>
                <p>
                    Playwright is a powerful E2E testing framework that automates real browsers and
                    supports multiple devices and contexts.
                </p>
            </section>

            {/* Cypress */}
            <section id="cypress" className="space-y-3">
                <h2 className="text-xl font-semibold">Cypress</h2>
                <p>
                    Cypress is an E2E testing tool that runs directly in the browser, providing fast
                    feedback and a great developer experience.
                </p>
            </section>
        </div>
    );
}
