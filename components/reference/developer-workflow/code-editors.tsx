export default function CodeEditors() {
    return (
        <div className="space-y-10">
            {/* 1. Overview */}
            <header className="space-y-3 h-fit">
                <h1 className="text-xl font-bold">Code Editors</h1>
                <p className="text-muted-foreground mt-2">
                    A code editor is where you spend most of your time as a developer. Learning your
                    editor&apos;s features and shortcuts can dramatically improve your productivity
                    and workflow.
                </p>
            </header>

            {/* 2. Why Editors Matter */}
            <section id="why-editors-matter" className="space-y-3">
                <h2 className="text-lg font-medium">Why Editors Matter</h2>
                <p>A good editor helps you write, navigate, and debug code faster.</p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Faster navigation</li>
                    <li>Built-in Git tools</li>
                    <li>Integrated terminal</li>
                    <li>Extensions for every language</li>
                    <li>Powerful search and refactoring tools</li>
                </ul>
            </section>

            {/* 3. VS Code Essentials */}
            <section id="vscode-essentials" className="space-y-3">
                <h2 className="text-lg font-medium">VS Code Essentials</h2>
                <p>Visual Studio Code is the most popular editor for web development.</p>

                <h3 className="font-medium">Useful Features</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Command Palette</li>
                    <li>File Explorer</li>
                    <li>Search and replace</li>
                    <li>Extensions marketplace</li>
                    <li>Built-in Git integration</li>
                </ul>
            </section>

            {/* 4. Keyboard Shortcuts */}
            <section id="keyboard-shortcuts" className="space-y-3">
                <h2 className="text-lg font-medium">Keyboard Shortcuts</h2>
                <p>Shortcuts save time and reduce friction.</p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`Ctrl + P     # Quick file search
Ctrl + Shift + P  # Command palette
Alt + Click   # Multi-cursor
Ctrl + /      # Toggle comment`}
                </pre>
            </section>

            {/* 5. Extensions */}
            <section id="extensions" className="space-y-3">
                <h2 className="text-lg font-medium">Extensions</h2>
                <p>Extensions add new features to your editor.</p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Prettier</li>
                    <li>ESLint</li>
                    <li>GitLens</li>
                    <li>Tailwind CSS IntelliSense</li>
                    <li>Icons and themes</li>
                </ul>
            </section>
        </div>
    );
}
