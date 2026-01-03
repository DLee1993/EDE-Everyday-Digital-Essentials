export default function Typography() {
    return (
        <div className="space-y-10">
            {/* 1. Overview */}
            <header className="space-y-3 h-fit">
                <h1 className="text-xl font-bold">Typography</h1>
                <p className="text-muted-foreground mt-2">
                    Typography shapes how users read, scan, and understand content. Good typography
                    improves clarity, hierarchy, rhythm, and overall user experience.
                </p>
            </header>

            {/* 2. What Typography Is */}
            <section id="what-is-typography" className="space-y-3">
                <h2 className="text-lg font-medium">What Typography Is</h2>
                <p>
                    Typography is the practice of arranging text so it is readable, accessible, and
                    visually appealing. It includes font choice, size, spacing, alignment, and the
                    relationships between text elements.
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Choosing appropriate fonts</li>
                    <li>Establishing hierarchy</li>
                    <li>Managing spacing and rhythm</li>
                    <li>Ensuring readability and accessibility</li>
                </ul>
            </section>

            {/* 3. Choosing Fonts */}
            <section id="choosing-fonts" className="space-y-3">
                <h2 className="text-lg font-medium">Choosing Fonts</h2>
                <p>
                    A font sets the tone of your interface. Choose fonts that match the purpose and
                    personality of your product.
                </p>

                <h3 className="font-medium">Font Categories</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        <strong>Serif</strong> — traditional, trustworthy, editorial
                    </li>
                    <li>
                        <strong>Sans-serif</strong> — modern, clean, highly readable
                    </li>
                    <li>
                        <strong>Monospace</strong> — technical, code-focused
                    </li>
                    <li>
                        <strong>Display</strong> — expressive, decorative, used sparingly
                    </li>
                </ul>

                <h3 className="font-medium">Best Practices</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Use 1-2 fonts per project</li>
                    <li>Ensure good contrast and readability</li>
                    <li>Check how fonts render on different devices</li>
                </ul>
            </section>

            {/* 4. Type Scales */}
            <section id="type-scales" className="space-y-3">
                <h2 className="text-lg font-medium">Type Scales</h2>
                <p>
                    A type scale is a set of font sizes that follow a consistent ratio. This creates
                    predictable hierarchy and visual rhythm.
                </p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`Example scale (1.25 ratio):
12px
15px
19px
24px
30px
38px`}
                </pre>

                <p>
                    Many design systems use modular scales to ensure consistency across headings,
                    body text, and UI elements.
                </p>
            </section>

            {/* 5. Line Height */}
            <section id="line-height" className="space-y-3">
                <h2 className="text-lg font-medium">Line Height</h2>
                <p>
                    Line height controls the vertical spacing between lines of text. Proper line
                    height improves readability and prevents visual crowding.
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Body text: 1.4-1.7</li>
                    <li>Headings: 1.1-1.3</li>
                    <li>Buttons: 1.2-1.4</li>
                </ul>
            </section>

            {/* 6. Readability & Accessibility */}
            <section id="readability-accessibility" className="space-y-3">
                <h2 className="text-lg font-medium">Readability & Accessibility</h2>
                <p>
                    Typography must support all users, including those with visual impairments,
                    dyslexia, or cognitive challenges.
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Use sufficient contrast</li>
                    <li>Avoid long line lengths (45-75 characters)</li>
                    <li>Use real text, not images of text</li>
                    <li>Ensure scalable text (rem/em units)</li>
                </ul>
            </section>
        </div>
    );
}
