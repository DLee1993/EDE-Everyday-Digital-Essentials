export default function ProjectStructure() {
    return (
        <div className="space-y-10">
            {/* 1. Overview */}
            <header className="space-y-3 h-fit">
                <h1 className="text-xl font-bold">Project Structure</h1>
                <p className="text-muted-foreground mt-2">
                    Understanding project structure helps you navigate codebases confidently. Most
                    modern projects follow predictable patterns that make it easier to find files,
                    understand architecture, and contribute effectively.
                </p>
            </header>

            {/* 2. Why Structure Matters */}
            <section id="why-structure-matters" className="space-y-3">
                <h2 className="text-lg font-medium">Why Structure Matters</h2>
                <p>A clear structure makes a project easier to maintain, scale, and understand.</p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Improves readability</li>
                    <li>Helps new developers onboard quickly</li>
                    <li>Encourages consistency</li>
                    <li>Supports modular architecture</li>
                </ul>
            </section>

            {/* 3. Common Folders */}
            <section id="common-folders" className="space-y-3">
                <h2 className="text-lg font-medium">Common Folders</h2>
                <p>Most JavaScript and TypeScript projects follow similar folder patterns.</p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        <strong>src/</strong> — main application code
                    </li>
                    <li>
                        <strong>components/</strong> — reusable UI elements
                    </li>
                    <li>
                        <strong>pages/</strong> — route-based pages (Next.js)
                    </li>
                    <li>
                        <strong>utils/</strong> — helper functions
                    </li>
                    <li>
                        <strong>hooks/</strong> — custom React hooks
                    </li>
                    <li>
                        <strong>public/</strong> — static assets
                    </li>
                    <li>
                        <strong>styles/</strong> — global or modular CSS
                    </li>
                </ul>
            </section>

            {/* 4. Configuration Files */}
            <section id="config-files" className="space-y-3">
                <h2 className="text-lg font-medium">Configuration Files</h2>
                <p>Config files control how tools behave in your project.</p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        <strong>package.json</strong> — dependencies and scripts
                    </li>
                    <li>
                        <strong>tsconfig.json</strong> — TypeScript settings
                    </li>
                    <li>
                        <strong>eslint.config.js</strong> — linting rules
                    </li>
                    <li>
                        <strong>next.config.js</strong> — Next.js configuration
                    </li>
                </ul>
            </section>

            {/* 5. Naming Conventions */}
            <section id="naming-conventions" className="space-y-3">
                <h2 className="text-lg font-medium">Naming Conventions</h2>
                <p>Consistent naming makes it easier to find and understand files.</p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Use lowercase for folders</li>
                    <li>Use PascalCase for components</li>
                    <li>Use camelCase for utilities</li>
                    <li>Use clear, descriptive names</li>
                </ul>
            </section>
        </div>
    );
}
