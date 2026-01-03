export default function Accessibility() {
    return (
        <section className="space-y-10">
            {/* 1. Overview */}
            <header className="space-y-3 h-fit">
                <h1 className="text-xl font-bold">Accessibility (A11y)</h1>
                <p className="text-muted-foreground mt-2">
                    Practical accessibility basics to make your interfaces usable by everyone.
                </p>
            </header>

            {/* 2. Why Accessibility Matters */}
            <section id="why-accessibility-matters" className="space-y-3">
                <h2 className="text-lg font-medium">Why Accessibility Matters</h2>
                <p>
                    Accessibility ensures that people with disabilities can perceive, understand,
                    navigate, and interact with your content.
                </p>
                <p>
                    Many accessibility improvements also benefit everyone: better structure, clearer
                    labels, and more predictable behaviour.
                </p>
            </section>

            {/* 3. Semantic Structure */}
            <section id="semantic-structure" className="space-y-3">
                <h2 className="text-lg font-medium">Semantic Structure</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`<header>...</header>
<nav>...</nav>
<main>...</main>
<footer>...</footer>`}
                </pre>

                <p>
                    Use headings in order and semantic landmarks so screen readers can navigate
                    efficiently.
                </p>
            </section>

            {/* 4. Keyboard Navigation */}
            <section id="keyboard-navigation" className="space-y-3">
                <h2 className="text-lg font-medium">Keyboard Navigation</h2>

                <ul className="list-disc pl-6 space-y-1">
                    <li>All interactive elements must be reachable via keyboard.</li>
                    <li>
                        Use native elements (<code>&lt;button&gt;</code>, <code>&lt;a&gt;</code>,{" "}
                        <code>&lt;input&gt;</code>) where possible.
                    </li>
                    <li>Ensure visible focus styles are never removed.</li>
                </ul>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`button:focus {
  outline: 2px solid #4f46e5;
}`}
                </pre>
            </section>

            {/* 5. Forms & Labels */}
            <section id="forms-and-labels" className="space-y-3">
                <h2 className="text-lg font-medium">Forms & Labels</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`<label for="email">Email address</label>
<input id="email" name="email" type="email" required />`}
                </pre>

                <p>
                    Correctly associated labels are essential for screen readers and help all users
                    understand your forms faster.
                </p>
            </section>

            {/* 6. Color & Contrast */}
            <section id="color-and-contrast" className="space-y-3">
                <h2 className="text-lg font-medium">Color & Contrast</h2>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Do not rely on color alone to convey meaning.</li>
                    <li>Use sufficient contrast between text and background.</li>
                    <li>Provide clear focus and hover states.</li>
                </ul>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`.error {
  color: #b91c1c;
}

.error::before {
  content: "Error: ";
  font-weight: 600;
}`}
                </pre>
            </section>

            {/* 7. ARIA Essentials */}
            <section id="aria-essentials" className="space-y-3">
                <h2 className="text-lg font-medium">ARIA Essentials</h2>
                <p>
                    ARIA (Accessible Rich Internet Applications) describes roles, states, and
                    properties for custom UI components.
                </p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`<button
  aria-expanded="false"
  aria-controls="panel-1"
>
  Toggle details
</button>

<div id="panel-1" hidden>
  Extra information...
</div>`}
                </pre>

                <p>
                    Use ARIA to enhance semantics when native HTML is not enough. Avoid using ARIA
                    to &quote;fix&quote; poorly structured markup.
                </p>
            </section>

            {/* 8. Live Regions */}
            <section id="live-regions" className="space-y-3">
                <h2 className="text-lg font-medium">Live Regions</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`<div aria-live="polite" id="status"></div>

<script>
  document.getElementById("status").textContent = "Settings saved.";
</script>`}
                </pre>

                <p>
                    Live regions announce dynamic changes to screen readers without moving focus,
                    ideal for non-blocking status updates.
                </p>
            </section>

            {/* 9. Reduced Motion */}
            <section id="reduced-motion" className="space-y-3">
                <h2 className="text-lg font-medium">Reduced Motion</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}`}
                </pre>

                <p>
                    Respecting reduced-motion preferences prevents discomfort for users with
                    vestibular disorders.
                </p>
            </section>

            {/* 10. Testing Accessibility */}
            <section id="testing-accessibility" className="space-y-3">
                <h2 className="text-lg font-medium">Testing Accessibility</h2>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Navigate your site using only the keyboard.</li>
                    <li>Use built-in browser accessibility tools or extensions.</li>
                    <li>Test with high contrast modes or reduced motion.</li>
                    <li>Use screen reader testing when possible.</li>
                </ul>
            </section>
        </section>
    );
}
