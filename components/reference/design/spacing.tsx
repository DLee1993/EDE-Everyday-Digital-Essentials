export default function Spacing() {
    return (
        <div className="space-y-10">
            {/* 1. Overview */}
            <header className="space-y-3 h-fit">
                <h1 className="text-xl font-bold">Spacing</h1>
                <p className="text-muted-foreground mt-2">
                    Spacing creates rhythm, structure, and clarity. It helps users understand
                    relationships between elements and prevents interfaces from feeling cramped or
                    chaotic. Good spacing is one of the fastest ways to make a design feel
                    professional.
                </p>
            </header>

            {/* 2. Why Spacing Matters */}
            <section id="why-spacing-matters" className="space-y-3">
                <h2 className="text-lg font-medium">Why Spacing Matters</h2>
                <p>
                    Spacing isn&apos;t just empty space — it&apos;s an active design tool. It
                    controls how users read, scan, and interpret content.
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Improves readability</li>
                    <li>Creates visual hierarchy</li>
                    <li>Groups related elements</li>
                    <li>Separates unrelated content</li>
                    <li>Makes interfaces feel calm and intentional</li>
                </ul>
            </section>

            {/* 3. Types of Spacing */}
            <section id="types-of-spacing" className="space-y-3">
                <h2 className="text-lg font-medium">Types of Spacing</h2>
                <p>
                    Spacing appears in many forms throughout an interface. Understanding each type
                    helps you apply spacing consistently.
                </p>

                <h3 className="font-medium">1. Internal Spacing</h3>
                <p>Padding inside components — buttons, cards, inputs, containers.</p>

                <h3 className="font-medium">2. External Spacing</h3>
                <p>Margin between components — spacing between cards, sections, or text blocks.</p>

                <h3 className="font-medium">3. Line Spacing</h3>
                <p>Vertical spacing between lines of text (line-height).</p>

                <h3 className="font-medium">4. Section Spacing</h3>
                <p>Larger spacing used to separate major content areas.</p>
            </section>

            {/* 4. Spacing Systems */}
            <section id="spacing-systems" className="space-y-3">
                <h2 className="text-lg font-medium">Spacing Systems</h2>
                <p>
                    A spacing system ensures consistency across your entire interface. Most design
                    systems use a scale based on multiples of 4 or 8.
                </p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`Example 8px scale:
4, 8, 16, 24, 32, 40, 48, 64`}
                </pre>

                <h3 className="font-medium">Why use a scale?</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Creates predictable rhythm</li>
                    <li>Reduces decision fatigue</li>
                    <li>Makes layouts easier to maintain</li>
                    <li>Improves alignment and balance</li>
                </ul>
            </section>

            {/* 5. Grouping & Proximity */}
            <section id="grouping-proximity" className="space-y-3">
                <h2 className="text-lg font-medium">Grouping & Proximity</h2>
                <p>
                    Elements that are close together are perceived as related. Elements that are far
                    apart are perceived as separate. This is one of the most powerful spacing
                    principles in design.
                </p>

                <h3 className="font-medium">Use spacing to:</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Group labels with their inputs</li>
                    <li>Separate sections of content</li>
                    <li>Create clear card boundaries</li>
                    <li>Organize navigation items</li>
                </ul>
            </section>

            {/* 6. Vertical Rhythm */}
            <section id="vertical-rhythm" className="space-y-3">
                <h2 className="text-lg font-medium">Vertical Rhythm</h2>
                <p>
                    Vertical rhythm is the consistent spacing between text blocks, headings, and
                    components. It creates a smooth reading experience and prevents &quote;visual
                    bumps&quote; in the layout.
                </p>

                <h3 className="font-medium">Best Practices</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Use consistent spacing between similar elements</li>
                    <li>Increase spacing before major headings</li>
                    <li>Reduce spacing inside tightly grouped elements</li>
                    <li>Use your spacing scale to maintain rhythm</li>
                </ul>
            </section>

            {/* 7. Common Spacing Mistakes */}
            <section id="spacing-mistakes" className="space-y-3">
                <h2 className="text-lg font-medium">Common Spacing Mistakes</h2>
                <p>
                    Beginners often struggle with spacing because it feels subjective. These
                    mistakes are extremely common — and easy to fix once you know them.
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Inconsistent spacing between similar elements</li>
                    <li>Too little space between sections</li>
                    <li>Too much space inside components</li>
                    <li>Mixing random spacing values (7px, 13px, 22px)</li>
                    <li>Not aligning elements to a grid or baseline</li>
                </ul>
            </section>
        </div>
    );
}
