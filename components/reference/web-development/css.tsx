export default function CSS() {
    return (
        <section className="space-y-10">
            {/* 1. Overview */}
            <header className="space-y-3 h-fit">
                <h1 className="text-xl font-bold">CSS Reference</h1>
                <p className="text-muted-foreground mt-2">
                    A beginner-friendly guide to styling and layout with CSS.
                </p>
            </header>

            {/* 2. What is CSS */}
            <section id="what-is-css" className="space-y-3">
                <h2 className="text-lg font-medium">What is CSS?</h2>
                <p>
                    CSS (Cascading Style Sheets) controls the appearance of your webpage. It defines
                    colors, spacing, layout, typography, and responsive behaviour.
                </p>
            </section>

            {/* 3. Selectors */}
            <section id="selectors" className="space-y-3">
                <h2 className="text-lg font-medium">Selectors</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`/* Element selector */
p { color: black; }

/* Class selector */
.button { padding: 1rem; }

/* ID selector */
#header { background: #eee; }

/* Attribute selector */
input[type="email"] { border-color: blue; }`}
                </pre>
            </section>

            {/* 4. Advanced Selectors */}
            <section id="advanced-selectors" className="space-y-3">
                <h2 className="text-lg font-medium">Advanced Selectors</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`/* First child */
ul li:first-child {}

/* Even rows */
tr:nth-child(even) {}

/* NOT selector */
button:not(.primary) {}

/* Adjacent sibling */
h1 + p {}`}
                </pre>
            </section>

            {/* 5. Colors */}
            <section id="colors" className="space-y-3">
                <h2 className="text-lg font-medium">Colors</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`color: red;
color: #ff0000;
color: rgb(255, 0, 0);
color: hsl(0, 100%, 50%);`}
                </pre>
            </section>

            {/* 6. Typography */}
            <section id="typography" className="space-y-3">
                <h2 className="text-lg font-medium">Typography</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`font-size: 1rem;
font-weight: 600;
line-height: 1.5;
font-family: "Inter", sans-serif;`}
                </pre>
            </section>

            {/* 7. Box Model */}
            <section id="box-model" className="space-y-3">
                <h2 className="text-lg font-medium">Box Model</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`padding: 1rem;
margin: 2rem;
border: 1px solid #ccc;
box-sizing: border-box;`}
                </pre>

                <p>
                    <code>box-sizing: border-box</code> makes width calculations more intuitive.
                </p>
            </section>

            {/* 8. Display */}
            <section id="display" className="space-y-3">
                <h2 className="text-lg font-medium">Display</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`display: block;
display: inline;
display: inline-block;
display: flex;
display: grid;`}
                </pre>
            </section>

            {/* 9. Flexbox */}
            <section id="flexbox" className="space-y-3">
                <h2 className="text-lg font-medium">Flexbox</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`display: flex;
justify-content: center;
align-items: center;
gap: 1rem;`}
                </pre>

                <p>Flexbox is ideal for aligning items in one dimension (row or column).</p>
            </section>

            {/* 10. Grid */}
            <section id="grid" className="space-y-3">
                <h2 className="text-lg font-medium">Grid</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 1rem;`}
                </pre>

                <p>Grid is perfect for two-dimensional layouts.</p>
            </section>

            {/* 11. Layout Patterns */}
            <section id="layout-patterns" className="space-y-3">
                <h2 className="text-lg font-medium">Common Layout Patterns</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`/* Centered container */
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}

/* Sidebar layout */
.layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
}

/* Card grid */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}`}
                </pre>
            </section>

            {/* 12. Positioning */}
            <section id="positioning" className="space-y-3">
                <h2 className="text-lg font-medium">Positioning</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`position: static;
position: relative;
position: absolute;
position: fixed;
position: sticky;`}
                </pre>
            </section>

            {/* 13. Z-Index */}
            <section id="z-index" className="space-y-3">
                <h2 className="text-lg font-medium">Z-Index</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`z-index: 10;
z-index: 999;`}
                </pre>

                <p>
                    Z‑index only works on positioned elements (relative, absolute, fixed, sticky).
                </p>
            </section>

            {/* 14. Transitions */}
            <section id="transitions" className="space-y-3">
                <h2 className="text-lg font-medium">Transitions</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`transition: all 0.3s ease;

button:hover {
  transform: scale(1.05);
}`}
                </pre>
            </section>

            {/* 15. Animations */}
            <section id="animations" className="space-y-3">
                <h2 className="text-lg font-medium">Animations</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`@keyframes fade {
  from { opacity: 0; }
  to { opacity: 1; }
}

.element {
  animation: fade 1s ease-in-out;
}`}
                </pre>
            </section>

            {/* 16. Responsive Design */}
            <section id="responsive-design" className="space-y-3">
                <h2 className="text-lg font-medium">Responsive Design</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`@media (max-width: 600px) {
  .container {
    padding: 1rem;
  }
}`}
                </pre>
            </section>

            {/* 17. Modern Responsive Strategies */}
            <section id="modern-responsive-strategies" className="space-y-3">
                <h2 className="text-lg font-medium">Modern Responsive Strategies</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`/* Fluid typography */
h1 {
  font-size: clamp(2rem, 5vw, 4rem);
}

/* Container queries */
@container (min-width: 500px) {
  .card {
    flex-direction: row;
  }
}`}
                </pre>
            </section>

            {/* 18. Variables */}
            <section id="variables" className="space-y-3">
                <h2 className="text-lg font-medium">CSS Variables</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`:root {
  --primary: #4f46e5;
}

button {
  background: var(--primary);
}`}
                </pre>
            </section>

            {/* 19. Best Practices */}
            <section id="best-practices" className="space-y-3">
                <h2 className="text-lg font-medium">Best Practices</h2>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Use classes instead of IDs for styling.</li>
                    <li>Keep selectors short and readable.</li>
                    <li>Use variables for theme consistency.</li>
                    <li>Prefer Flexbox and Grid for layout.</li>
                    <li>
                        Use responsive units like <code>rem</code> and <code>%</code>.
                    </li>
                </ul>
            </section>
        </section>
    );
}
