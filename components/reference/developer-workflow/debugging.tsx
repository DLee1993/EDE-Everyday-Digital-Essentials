export default function Debugging() {
    return (
        <div className="space-y-10">
            {/* 1. Overview */}
            <header className="space-y-3 h-fit">
                <h1 className="text-xl font-bold">Debugging</h1>
                <p className="text-muted-foreground mt-2">
                    Debugging is the process of finding and fixing problems in your code. It&apos;s
                    one of the most important skills a developer can learn, and it becomes easier
                    with the right tools and mindset.
                </p>
            </header>

            {/* 2. Why Debugging Matters */}
            <section id="why-debugging-matters" className="space-y-3">
                <h2 className="text-lg font-medium">Why Debugging Matters</h2>
                <p>
                    Bugs are a normal part of development. Debugging helps you understand what went
                    wrong and how to fix it without guessing.
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Improves code quality</li>
                    <li>Builds problem-solving skills</li>
                    <li>Reduces time spent fixing issues</li>
                    <li>Helps you understand how your code actually works</li>
                </ul>
            </section>

            {/* 3. Reading Error Messages */}
            <section id="reading-errors" className="space-y-3">
                <h2 className="text-lg font-medium">Reading Error Messages</h2>
                <p>
                    Error messages are your best friend. They tell you what went wrong and often
                    where to look.
                </p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`TypeError: Cannot read properties of undefined
    at App.js:12`}
                </pre>

                <p>
                    Learn to read the stack trace — it points to the exact file and line where the
                    issue occurred.
                </p>
            </section>

            {/* 4. Console Logging */}
            <section id="console-logging" className="space-y-3">
                <h2 className="text-lg font-medium">Console Logging</h2>
                <p>
                    <code>console.log()</code> is the simplest and most common debugging tool.
                </p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`console.log("value:", value)`}
                </pre>

                <p>Use logs to inspect variables, check function flow, and confirm assumptions.</p>
            </section>

            {/* 5. Browser DevTools */}
            <section id="browser-devtools" className="space-y-3">
                <h2 className="text-lg font-medium">Browser DevTools</h2>
                <p>
                    DevTools provide powerful debugging features built directly into your browser.
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Inspect elements</li>
                    <li>View network requests</li>
                    <li>Check console errors</li>
                    <li>Set breakpoints</li>
                    <li>Monitor performance</li>
                </ul>
            </section>

            {/* 6. Breakpoints */}
            <section id="breakpoints" className="space-y-3">
                <h2 className="text-lg font-medium">Breakpoints</h2>
                <p>
                    Breakpoints pause your code at a specific line so you can inspect variables and
                    step through execution.
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Pause at a line of code</li>
                    <li>Step through functions</li>
                    <li>Inspect variable values</li>
                    <li>Watch expressions change over time</li>
                </ul>
            </section>

            {/* 7. Debugging Mindset */}
            <section id="debugging-mindset" className="space-y-3">
                <h2 className="text-lg font-medium">Debugging Mindset</h2>
                <p>Debugging is as much about thinking as it is about tools.</p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Reproduce the bug consistently</li>
                    <li>Start from the error message</li>
                    <li>Test assumptions one by one</li>
                    <li>Change one thing at a time</li>
                    <li>Stay calm — bugs are normal</li>
                </ul>
            </section>
        </div>
    );
}
