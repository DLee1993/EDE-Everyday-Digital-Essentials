export default function DevTools() {
    return (
        <section className="space-y-10">
            {/* 1. Overview */}
            <header className="space-y-3 h-fit">
                <h2 className="text-2xl font-bold">Browser DevTools</h2>
                <p className="text-muted-foreground mt-2">
                    Using DevTools to inspect, debug, and improve your web pages.
                </p>
            </header>

            {/* 2. Opening DevTools */}
            <section id="opening-devtools" className="space-y-3">
                <h3 className="text-xl font-semibold">Opening DevTools</h3>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Right‑click → Inspect</li>
                    <li>Keyboard shortcuts vary by browser (e.g. F12)</li>
                </ul>
            </section>

            {/* 3. Elements Panel */}
            <section id="elements-panel" className="space-y-3">
                <h3 className="text-xl font-semibold">Elements Panel</h3>
                <p>
                    The Elements panel lets you inspect and edit HTML and CSS in real time. Changes
                    here are temporary but great for experimentation.
                </p>
            </section>

            {/* 4. Console */}
            <section id="console" className="space-y-3">
                <h3 className="text-xl font-semibold">Console</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`console.log("Debug value", value);
console.error("Something went wrong");
console.table(items);`}
                </pre>

                <p>
                    Use the console to log values, inspect objects, and debug logic while your code
                    runs.
                </p>
            </section>

            {/* 5. Network Panel */}
            <section id="network-panel" className="space-y-3">
                <h3 className="text-xl font-semibold">Network Panel</h3>
                <p>
                    The Network panel shows all requests made by your page: HTML, CSS, JS, images,
                    API calls, and more. Use it to check status codes, timings, and payloads.
                </p>
            </section>

            {/* 6. Performance Panel */}
            <section id="performance-panel" className="space-y-3">
                <h3 className="text-xl font-semibold">Performance Panel</h3>
                <p>
                    Record a performance profile to see how long scripting, rendering, and painting
                    take during interactions. Essential for diagnosing jank or slow UI updates.
                </p>
            </section>

            {/* 7. Application & Storage */}
            <section id="application-and-storage" className="space-y-3">
                <h3 className="text-xl font-semibold">Application & Storage</h3>
                <p>
                    Inspect localStorage, sessionStorage, cookies, service workers, and IndexedDB.
                    This is useful when debugging authentication, preferences, and offline
                    behaviour.
                </p>
            </section>

            {/* 8. Sources Panel */}
            <section id="sources-panel" className="space-y-3">
                <h3 className="text-xl font-semibold">Sources Panel</h3>
                <p>
                    The Sources panel lets you set breakpoints, step through code, inspect
                    variables, and debug JavaScript execution flow.
                </p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`// Example breakpoint usage
debugger;`}
                </pre>
            </section>

            {/* 9. Lighthouse */}
            <section id="lighthouse" className="space-y-3">
                <h3 className="text-xl font-semibold">Lighthouse</h3>
                <p>
                    Lighthouse audits your site for performance, accessibility, SEO, and best
                    practices. It provides actionable recommendations for improvement.
                </p>
            </section>

            {/* 10. Best Practices */}
            <section id="best-practices" className="space-y-3">
                <h3 className="text-xl font-semibold">Best Practices</h3>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Use the console for quick debugging.</li>
                    <li>Check the Network panel for slow or failing requests.</li>
                    <li>Use breakpoints instead of console logs for complex debugging.</li>
                    <li>Profile performance when animations or interactions feel slow.</li>
                    <li>Use Lighthouse regularly to catch regressions.</li>
                </ul>
            </section>
        </section>
    );
}
