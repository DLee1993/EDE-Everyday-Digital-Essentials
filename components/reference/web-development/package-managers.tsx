export default function PackageManagers() {
    return (
        <section className="space-y-10">
            {/* 1. Overview */}
            <header className="space-y-3 h-fit">
                <h1 className="text-xl font-bold">Package Managers</h1>
                <p className="text-muted-foreground mt-2">
                    Understanding npm, pnpm, yarn, and how JavaScript dependencies are managed.
                </p>
            </header>

            {/* 2. What is a Package Manager */}
            <section id="what-is-a-package-manager" className="space-y-3">
                <h2 className="text-lg font-medium">What is a Package Manager?</h2>
                <p>
                    A package manager installs, updates, and removes dependencies for your project.
                    It keeps track of versions and nested dependencies.
                </p>
            </section>

            {/* 3. package.json */}
            <section id="package-json" className="space-y-3">
                <h2 className="text-lg font-medium">package.json</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`{
  "name": "my-app",
  "scripts": {
    "dev": "next dev",
    "build": "next build"
  },
  "dependencies": {
    "react": "^18.0.0"
  }
}`}
                </pre>
            </section>

            {/* 4. Installing Packages */}
            <section id="installing-packages" className="space-y-3">
                <h2 className="text-lg font-medium">Installing Packages</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`# npm
npm install react

# pnpm
pnpm add react

# yarn
yarn add react`}
                </pre>
            </section>

            {/* 5. Dev Dependencies */}
            <section id="dev-dependencies" className="space-y-3">
                <h2 className="text-lg font-medium">Dev Dependencies</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`npm install -D typescript
pnpm add -D typescript`}
                </pre>

                <p>
                    Dev dependencies are only needed during development (tools, linters, compilers),
                    not in production runtime.
                </p>
            </section>

            {/* 6. Removing Packages */}
            <section id="removing-packages" className="space-y-3">
                <h2 className="text-lg font-medium">Removing Packages</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`npm uninstall react
pnpm remove react
yarn remove react`}
                </pre>
            </section>

            {/* 7. Updating Packages */}
            <section id="updating-packages" className="space-y-3">
                <h2 className="text-lg font-medium">Updating Packages</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`npm update
pnpm update
yarn upgrade`}
                </pre>
            </section>

            {/* 8. Scripts */}
            <section id="scripts" className="space-y-3">
                <h2 className="text-lg font-medium">Scripts</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}

// Run
npm run dev
pnpm dev
yarn dev`}
                </pre>
            </section>

            {/* 9. Lockfiles */}
            <section id="lockfiles" className="space-y-3">
                <h2 className="text-lg font-medium">Lockfiles</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`package-lock.json   # npm
pnpm-lock.yaml       # pnpm
yarn.lock            # yarn`}
                </pre>

                <p>
                    Lockfiles ensure consistent installs across machines by freezing exact
                    dependency versions.
                </p>
            </section>

            {/* 10. Workspaces */}
            <section id="workspaces" className="space-y-3">
                <h2 className="text-lg font-medium">Workspaces</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`# npm
npm init -w packages/utils

# pnpm
pnpm init -w packages/utils

# yarn
yarn workspace utils add lodash`}
                </pre>

                <p>
                    Workspaces allow managing multiple packages in a monorepo with shared
                    dependencies.
                </p>
            </section>

            {/* 11. Best Practices */}
            <section id="best-practices" className="space-y-3">
                <h2 className="text-lg font-medium">Best Practices</h2>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Commit your lockfile.</li>
                    <li>Use dev dependencies for tooling.</li>
                    <li>Keep dependencies updated regularly.</li>
                    <li>Use workspaces for monorepos.</li>
                    <li>Prefer pnpm for speed and disk efficiency.</li>
                </ul>
            </section>
        </section>
    );
}
