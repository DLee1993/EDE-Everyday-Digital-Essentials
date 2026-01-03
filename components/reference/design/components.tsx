export default function Components() {
    return (
        <div className="space-y-10">
            {/* 1. Overview */}
            <header className="space-y-3 h-fit">
                <h1 className="text-xl font-bold">Components</h1>
                <p className="text-muted-foreground mt-2">
                    Components are reusable building blocks of an interface. They combine
                    typography, colour, spacing, and layout into functional patterns that users
                    interact with every day.
                </p>
            </header>

            {/* 2. What Components Are */}
            <section id="what-are-components" className="space-y-3">
                <h2 className="text-lg font-medium">What Components Are</h2>
                <p>
                    A component is a self‑contained UI element that solves a specific problem.
                    Buttons, inputs, cards, modals, and navigation bars are all components.
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Reusable across pages</li>
                    <li>Consistent in appearance and behaviour</li>
                    <li>Built from smaller design primitives</li>
                    <li>Essential for scalable design systems</li>
                </ul>
            </section>

            {/* 3. Component Anatomy */}
            <section id="component-anatomy" className="space-y-3">
                <h2 className="text-lg font-medium">Component Anatomy</h2>
                <p>
                    Every component has a structure — understanding this helps you design components
                    that are consistent and predictable.
                </p>

                <h3 className="font-medium">Common Parts of a Component</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        <strong>Container</strong> — the outer frame or boundary
                    </li>
                    <li>
                        <strong>Content</strong> — text, icons, or media inside
                    </li>
                    <li>
                        <strong>Spacing</strong> — padding and margins
                    </li>
                    <li>
                        <strong>States</strong> — hover, active, disabled, focus
                    </li>
                    <li>
                        <strong>Behaviour</strong> — what happens when the user interacts
                    </li>
                </ul>
            </section>

            {/* 4. Component States */}
            <section id="component-states" className="space-y-3">
                <h2 className="text-lg font-medium">Component States</h2>
                <p>
                    Components must communicate their state clearly. This helps users understand
                    what they can interact with and what will happen.
                </p>

                <h3 className="font-medium">Common States</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        <strong>Default</strong> — the normal appearance
                    </li>
                    <li>
                        <strong>Hover</strong> — indicates interactivity
                    </li>
                    <li>
                        <strong>Active</strong> — pressed or engaged
                    </li>
                    <li>
                        <strong>Focus</strong> — keyboard accessibility indicator
                    </li>
                    <li>
                        <strong>Disabled</strong> — unavailable or inactive
                    </li>
                </ul>

                <p>
                    Clear states improve usability and accessibility, especially for keyboard and
                    screen reader users.
                </p>
            </section>

            {/* 5. Component Types */}
            <section id="component-types" className="space-y-3">
                <h2 className="text-lg font-medium">Component Types</h2>
                <p>Components come in many forms, but most fall into a few broad categories.</p>

                <h3 className="font-medium">1. Input Components</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Text fields</li>
                    <li>Checkboxes</li>
                    <li>Radio buttons</li>
                    <li>Dropdowns</li>
                    <li>Sliders</li>
                </ul>

                <h3 className="font-medium">2. Action Components</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Buttons</li>
                    <li>Icon buttons</li>
                    <li>Floating action buttons</li>
                </ul>

                <h3 className="font-medium">3. Display Components</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Cards</li>
                    <li>Badges</li>
                    <li>Avatars</li>
                    <li>Tags</li>
                </ul>

                <h3 className="font-medium">4. Structural Components</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Modals</li>
                    <li>Drawers</li>
                    <li>Navigation bars</li>
                    <li>Sidebars</li>
                </ul>
            </section>

            {/* 6. Consistency & Reuse */}
            <section id="consistency-reuse" className="space-y-3">
                <h2 className="text-lg font-medium">Consistency & Reuse</h2>
                <p>
                    Components are the backbone of scalable design. Reusing components ensures
                    consistency across your product and reduces design and development effort.
                </p>

                <h3 className="font-medium">Benefits of Reusable Components</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Faster design and development</li>
                    <li>Consistent user experience</li>
                    <li>Fewer visual inconsistencies</li>
                    <li>Easier maintenance and updates</li>
                </ul>
            </section>

            {/* 7. Component Best Practices */}
            <section id="component-best-practices" className="space-y-3">
                <h2 className="text-lg font-medium">Component Best Practices</h2>
                <p>
                    Designing components well requires clarity, consistency, and attention to
                    detail.
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Use consistent spacing and alignment</li>
                    <li>Ensure clear visual hierarchy inside the component</li>
                    <li>Design for all states, not just the default</li>
                    <li>Keep components simple and focused</li>
                    <li>Document usage rules and variations</li>
                </ul>
            </section>
        </div>
    );
}
