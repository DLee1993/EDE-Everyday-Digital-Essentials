export default function EnvironmentVariables() {
    return (
        <div className="space-y-10">
            {/* 1. Overview */}
            <header className="space-y-3 h-fit">
                <h1 className="text-xl font-bold">Environment Variables</h1>
                <p className="text-muted-foreground mt-2">
                    Environment variables store configuration values outside your code. They help
                    keep secrets safe and allow your app to behave differently in development,
                    testing, and production environments.
                </p>
            </header>

            {/* 2. Why environment variables matter */}
            <section id="why-env-vars-matter" className="space-y-3">
                <h2 className="text-lg font-medium">Why environment variables matter</h2>
                <p>
                    Environment variables let you configure your app without hard-coding sensitive
                    or environment-specific values into the codebase.
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Keep API keys and secrets out of source control</li>
                    <li>Use different values for development and production</li>
                    <li>Change configuration without redeploying code</li>
                    <li>Share a codebase across multiple environments safely</li>
                </ul>
            </section>

            {/* 3. Common env files */}
            <section id="env-files" className="space-y-3">
                <h2 className="text-lg font-medium">Common env files</h2>
                <p>
                    Many frameworks use special <code>.env</code> files that are loaded at build or
                    runtime.
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        <strong>.env</strong> — base configuration
                    </li>
                    <li>
                        <strong>.env.local</strong> — local development overrides
                    </li>
                    <li>
                        <strong>.env.development</strong> — development environment
                    </li>
                    <li>
                        <strong>.env.production</strong> — production environment
                    </li>
                </ul>

                <p>
                    These files are usually plain <code>KEY=VALUE</code> pairs, one per line.
                </p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`API_URL=https://api.example.com
API_KEY=super-secret-key`}
                </pre>
            </section>

            {/* 4. Using environment variables */}
            <section id="using-env-vars" className="space-y-3">
                <h2 className="text-lg font-medium">Using environment variables</h2>
                <p>
                    How you access environment variables depends on your runtime and framework, but
                    the idea is the same: read values from the environment instead of hard‑coding
                    them.
                </p>

                <h3 className="font-medium">Node.js example</h3>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`const apiKey = process.env.API_KEY;`}
                </pre>

                <h3 className="font-medium">Next.js example</h3>
                <p>
                    In Next.js, variables must start with <code>NEXT_PUBLIC_</code> to be available
                    in the browser.
                </p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`NEXT_PUBLIC_API_URL=https://api.example.com

// In your code:
const url = process.env.NEXT_PUBLIC_API_URL;`}
                </pre>
            </section>

            {/* 5. Keeping secrets safe */}
            <section id="keeping-secrets-safe" className="space-y-3">
                <h2 className="text-lg font-medium">Keeping secrets safe</h2>
                <p>
                    Environment variables are often used for secrets, but they only stay secret if
                    you handle them carefully.
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        Never commit <code>.env</code> files to version control
                    </li>
                    <li>
                        Add <code>.env*</code> to your <code>.gitignore</code>
                    </li>
                    <li>Use different secrets for development and production</li>
                    <li>Rotate keys if they are ever exposed</li>
                    <li>Use your hosting platform&apos;s secret management tools</li>
                </ul>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`# .gitignore
.env
.env.local
.env.*.local`}
                </pre>
            </section>

            {/* 6. Environment variables best practices */}
            <section id="env-vars-best-practices" className="space-y-3">
                <h2 className="text-lg font-medium">Environment variables best practices</h2>
                <p>
                    A few simple habits make working with environment variables much safer and more
                    predictable.
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        Use clear, descriptive names like <code>API_URL</code> or{" "}
                        <code>DB_HOST</code>
                    </li>
                    <li>Document required environment variables for the project</li>
                    <li>
                        Provide example values in a <code>.env.example</code> file
                    </li>
                    <li>
                        Avoid exposing secrets to the browser — only use public prefixes when needed
                    </li>
                    <li>Keep environment-specific logic out of your core business logic</li>
                </ul>
            </section>
        </div>
    );
}
