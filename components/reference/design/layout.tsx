export default function Layout() {
    return (
        <div className="space-y-10">
            {/* 1. Overview */}
            <header className="space-y-3 h-fit">
                <h1 className="text-xl font-bold">Layout</h1>
                <p className="text-muted-foreground mt-2">
                    Layout defines how elements are arranged on a page. Good layout creates clarity,
                    hierarchy, rhythm, and a sense of visual order. It helps users understand what
                    matters, what&apos;s related, and where to look next.
                </p>
            </header>

            {/* 2. Why Layout Matters */}
            <section id="why-layout-matters" className="space-y-3">
                <h2 className="text-lg font-medium">Why Layout Matters</h2>
                <p>
                    Layout is the foundation of interface design. Even with perfect typography and
                    colour, a poor layout can make a design feel confusing or overwhelming.
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Creates visual hierarchy</li>
                    <li>Improves readability and scanning</li>
                    <li>Groups related content</li>
                    <li>Guides the user&apos;s eye</li>
                    <li>Supports accessibility and usability</li>
                </ul>
            </section>

            {/* 3. Grids */}
            <section id="grids" className="space-y-3">
                <h2 className="text-lg font-medium">Grids</h2>
                <p>
                    Grids provide structure and consistency. They help align elements, create
                    rhythm, and ensure your layout feels intentional rather than random.
                </p>

                <h3 className="font-medium">Common Grid Types</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        <strong>Column grids</strong> — used for multi-column layouts
                    </li>
                    <li>
                        <strong>Modular grids</strong> — combine columns and rows
                    </li>
                    <li>
                        <strong>Baseline grids</strong> — align text across the page
                    </li>
                </ul>

                <h3 className="font-medium">Best Practices</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Use consistent column widths and gutters</li>
                    <li>Align elements to the grid whenever possible</li>
                    <li>Use whitespace to break the grid intentionally</li>
                </ul>
            </section>

            {/* 4. Visual Hierarchy */}
            <section id="visual-hierarchy" className="space-y-3">
                <h2 className="text-lg font-medium">Visual Hierarchy</h2>
                <p>
                    Visual hierarchy helps users understand what&apos;s important. It&apos;s created
                    through size, spacing, colour, alignment, and placement.
                </p>

                <h3 className="font-medium">Ways to Create Hierarchy</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        <strong>Size</strong> — larger elements attract more attention
                    </li>
                    <li>
                        <strong>Position</strong> — top and left are seen first
                    </li>
                    <li>
                        <strong>Colour</strong> — high contrast draws the eye
                    </li>
                    <li>
                        <strong>Spacing</strong> — more space = more importance
                    </li>
                    <li>
                        <strong>Grouping</strong> — related items should be close together
                    </li>
                </ul>
            </section>

            {/* 5. Alignment */}
            <section id="alignment" className="space-y-3">
                <h2 className="text-lg font-medium">Alignment</h2>
                <p>
                    Alignment creates order and reduces cognitive load. Misaligned elements make a
                    design feel messy, even if everything else is perfect.
                </p>

                <h3 className="font-medium">Common Alignment Types</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        <strong>Left alignment</strong> — most readable for text
                    </li>
                    <li>
                        <strong>Center alignment</strong> — good for short content
                    </li>
                    <li>
                        <strong>Right alignment</strong> — used sparingly for emphasis
                    </li>
                </ul>

                <h3 className="font-medium">Best Practices</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Pick one alignment and stick to it</li>
                    <li>Avoid mixing left and center alignment in the same block</li>
                    <li>Use alignment to create clean vertical lines</li>
                </ul>
            </section>

            {/* 6. Whitespace */}
            <section id="whitespace" className="space-y-3">
                <h2 className="text-lg font-medium">Whitespace</h2>
                <p>
                    Whitespace (or negative space) is the empty space around elements. It&apos;s not
                    wasted space — it&apos;s what makes content readable and interfaces breathable.
                </p>

                <h3 className="font-medium">Why Whitespace Matters</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Improves readability</li>
                    <li>Creates separation between groups</li>
                    <li>Reduces visual noise</li>
                    <li>Helps users focus on what matters</li>
                </ul>

                <h3 className="font-medium">Common Mistakes</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Trying to fill every space</li>
                    <li>Inconsistent spacing between elements</li>
                    <li>Not enough space around text blocks</li>
                </ul>
            </section>

            {/* 7. Layout Patterns */}
            <section id="layout-patterns" className="space-y-3">
                <h2 className="text-lg font-medium">Layout Patterns</h2>
                <p>
                    Many interfaces follow predictable layout patterns. These patterns help users
                    understand your design quickly because they&apos;ve seen them before.
                </p>

                <h3 className="font-medium">Common Patterns</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        <strong>Single column</strong> — simple, linear reading
                    </li>
                    <li>
                        <strong>Two column</strong> — content + sidebar
                    </li>
                    <li>
                        <strong>Card layouts</strong> — modular, scannable content
                    </li>
                    <li>
                        <strong>Grid galleries</strong> — visual content collections
                    </li>
                    <li>
                        <strong>F‑pattern</strong> — common for text‑heavy pages
                    </li>
                    <li>
                        <strong>Z‑pattern</strong> — common for landing pages
                    </li>
                </ul>
            </section>
        </div>
    );
}
