export default function Colour() {
    return (
        <div className="space-y-10">
            {/* 1. Overview */}
            <header className="space-y-3 h-fit">
                <h1 className="text-xl font-bold">Colour</h1>
                <p className="text-muted-foreground mt-2">
                    Colour shapes emotion, hierarchy, accessibility, and brand identity.
                    Understanding how to use colour intentionally is essential for creating
                    interfaces that feel clear, balanced, and trustworthy.
                </p>
            </header>

            {/* 2. Why Colour Matters */}
            <section id="why-colour-matters" className="space-y-3">
                <h2 className="text-lg font-medium">Why Colour Matters</h2>
                <p>
                    Colour is one of the strongest tools in visual communication. It influences how
                    users feel, where they look, and how they interpret meaning.
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Creates visual hierarchy</li>
                    <li>Communicates meaning (success, warning, error)</li>
                    <li>Supports brand identity</li>
                    <li>Affects readability and accessibility</li>
                    <li>Guides user attention</li>
                </ul>
            </section>

            {/* 3. Colour Theory Basics */}
            <section id="colour-theory-basics" className="space-y-3">
                <h2 className="text-lg font-medium">Colour Theory Basics</h2>
                <p>
                    Colour theory helps designers understand how colours relate to each other and
                    how they can be combined effectively.
                </p>

                <h3 className="font-medium">Primary Colours</h3>
                <p>Red, blue, and yellow — the foundation of all other colours.</p>

                <h3 className="font-medium">Secondary Colours</h3>
                <p>Green, orange, and purple — created by mixing primaries.</p>

                <h3 className="font-medium">Tertiary Colours</h3>
                <p>Colours formed by mixing a primary with a secondary.</p>

                <h3 className="font-medium">Colour Relationships</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        <strong>Complementary</strong> — opposite colours (high contrast)
                    </li>
                    <li>
                        <strong>Analogous</strong> — neighbouring colours (harmonious)
                    </li>
                    <li>
                        <strong>Triadic</strong> — evenly spaced colours (balanced)
                    </li>
                    <li>
                        <strong>Monochromatic</strong> — variations of one hue (clean, simple)
                    </li>
                </ul>
            </section>

            {/* 4. Colour in UI Design */}
            <section id="colour-in-ui" className="space-y-3">
                <h2 className="text-lg font-medium">Colour in UI Design</h2>
                <p>
                    In interface design, colour is used less for artistic expression and more for
                    clarity, meaning, and usability.
                </p>

                <h3 className="font-medium">Functional Colour</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        <strong>Primary colour</strong> — main brand or action colour
                    </li>
                    <li>
                        <strong>Secondary colour</strong> — supporting accents
                    </li>
                    <li>
                        <strong>Success</strong> — positive actions or states
                    </li>
                    <li>
                        <strong>Warning</strong> — caution or potential issues
                    </li>
                    <li>
                        <strong>Error</strong> — destructive or invalid actions
                    </li>
                    <li>
                        <strong>Info</strong> — neutral guidance
                    </li>
                </ul>

                <h3 className="font-medium">Neutral Colours</h3>
                <p>
                    Greys, blacks, and whites form the backbone of UI design. They create structure,
                    contrast, and readability.
                </p>
            </section>

            {/* 5. Contrast & Accessibility */}
            <section id="contrast-accessibility" className="space-y-3">
                <h2 className="text-lg font-medium">Contrast & Accessibility</h2>
                <p>
                    Colour must be accessible to all users, including those with low vision or
                    colour vision deficiencies.
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Text should meet WCAG contrast ratios</li>
                    <li>Never rely on colour alone to convey meaning</li>
                    <li>Use patterns, icons, or labels alongside colour</li>
                    <li>Test designs in greyscale to check contrast</li>
                </ul>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`WCAG AA contrast:
- Normal text: 4.5:1
- Large text: 3:1`}
                </pre>
            </section>

            {/* 6. Building a Colour Palette */}
            <section id="building-a-palette" className="space-y-3">
                <h2 className="text-lg font-medium">Building a Colour Palette</h2>
                <p>
                    A good palette is intentional, limited, and consistent. Most design systems use
                    a structured palette with clear roles.
                </p>

                <h3 className="font-medium">A typical palette includes:</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Primary colour</li>
                    <li>Secondary colour</li>
                    <li>Neutral greys</li>
                    <li>Semantic colours (success, warning, error)</li>
                    <li>Background and surface colours</li>
                </ul>

                <h3 className="font-medium">Best Practices</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Limit your palette to avoid visual noise</li>
                    <li>Use tints and shades for depth</li>
                    <li>Ensure consistent contrast across surfaces</li>
                    <li>Document colour usage rules clearly</li>
                </ul>
            </section>
        </div>
    );
}
