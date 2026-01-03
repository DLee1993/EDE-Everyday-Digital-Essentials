export default function Automation() {
    return (
        <div className="space-y-10">
            {/* 1. Overview */}
            <header className="space-y-3 h-fit">
                <h1 className="text-xl font-bold">Automation</h1>
                <p className="text-muted-foreground mt-2">
                    Automation helps developers save time by letting tools handle repetitive tasks.
                    From formatting code to running tests, automation improves consistency and
                    reduces human error.
                </p>
            </header>

            {/* 2. Why Automation Matters */}
            <section id="why-automation-matters" className="space-y-3">
                <h2 className="text-lg font-medium">Why Automation Matters</h2>
                <p>
                    Automation frees you from repetitive work so you can focus on building features
                    and solving problems.
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Improves consistency</li>
                    <li>Reduces mistakes</li>
                    <li>Saves time</li>
                    <li>Supports team collaboration</li>
                </ul>
            </section>

            {/* 3. Common Automation Tools */}
            <section id="automation-tools" className="space-y-3">
                <h2 className="text-lg font-medium">Common Automation Tools</h2>
                <p>Many tools help automate tasks in modern development.</p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        <strong>Prettier</strong> — formats code automatically
                    </li>
                    <li>
                        <strong>ESLint</strong> — checks for errors and style issues
                    </li>
                    <li>
                        <strong>NPM scripts</strong> — run commands like builds and tests
                    </li>
                    <li>
                        <strong>Husky</strong> — run scripts before commits
                    </li>
                    <li>
                        <strong>CI/CD</strong> — automate testing and deployment
                    </li>
                </ul>
            </section>

            {/* 4. NPM Scripts */}
            <section id="npm-scripts" className="space-y-3">
                <h2 className="text-lg font-medium">NPM Scripts</h2>
                <p>
                    NPM scripts let you automate tasks directly from your project&apos;s
                    <code>package.json</code>.
                </p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`"scripts": {
  "dev": "next dev",
  "build": "next build",
  "format": "prettier --write ."
}`}
                </pre>
            </section>

            {/* 5. Pre-commit Hooks */}
            <section id="pre-commit-hooks" className="space-y-3">
                <h2 className="text-lg font-medium">Pre-commit Hooks</h2>
                <p>
                    Pre-commit hooks run scripts before a commit is created. They help keep your
                    codebase clean and error-free.
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Format code automatically</li>
                    <li>Run linters</li>
                    <li>Prevent bad commits</li>
                </ul>
            </section>

            {/* 6. Continuous Integration */}
            <section id="continuous-integration" className="space-y-3">
                <h2 className="text-lg font-medium">Continuous Integration</h2>
                <p>
                    CI tools automatically test and validate your code whenever you push changes to
                    a repository.
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Run tests</li>
                    <li>Check formatting</li>
                    <li>Lint code</li>
                    <li>Build the project</li>
                </ul>
            </section>
        </div>
    );
}
