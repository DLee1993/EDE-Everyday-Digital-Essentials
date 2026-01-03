export default function HTML() {
    return (
        <section className="space-y-10">
            {/* 1. Overview */}
            <header className="space-y-3 h-fit">
                <h2 className="text-2xl font-bold">HTML Reference</h2>
                <p className="text-muted-foreground mt-2">
                    A beginner-friendly guide to the fundamentals of HTML.
                </p>
            </header>

            {/* 2. What is HTML */}
            <section id="what-is-html" className="space-y-3">
                <h3 className="text-xl font-semibold">What is HTML?</h3>
                <p>
                    HTML (HyperText Markup Language) is the structure of a webpage. It defines the
                    content, meaning, and layout of elements on the screen.
                </p>
                <p>
                    Think of HTML as the <strong>skeleton</strong> of a website.
                </p>
            </section>

            {/* 3. Basic Document Structure */}
            <section id="basic-document-structure" className="space-y-3">
                <h3 className="text-xl font-semibold">Basic Document Structure</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`}
                </pre>
            </section>

            {/* 4. Head & Metadata */}
            <section id="head-and-metadata" className="space-y-3">
                <h3 className="text-xl font-semibold">Head & Metadata</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`<meta name="description" content="A simple webpage" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" href="styles.css" />`}
                </pre>

                <p>
                    Metadata helps browsers, search engines, and assistive technologies understand
                    your page.
                </p>
            </section>

            {/* 5. Headings & Text */}
            <section id="headings-and-text" className="space-y-3">
                <h3 className="text-xl font-semibold">Headings & Text</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection</h3>

<p>This is a paragraph.</p>
<strong>Bold</strong>
<em>Italic</em>`}
                </pre>
            </section>

            {/* 6. Additional Heading Levels */}
            <section id="additional-heading-levels" className="space-y-3">
                <h3 className="text-xl font-semibold">Additional Heading Levels</h3>
                <p>
                    HTML provides six heading levels. Use deeper levels only when your content
                    structure genuinely requires more nesting.
                </p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`<h4>Sub-subsection</h4>
<h5>Deep subsection</h5>
<h6>Lowest-level heading</h6>`}
                </pre>

                <p>
                    If you find yourself using <code>&lt;h5&gt;</code> or <code>&lt;h6&gt;</code>{" "}
                    often, consider reorganising your content.
                </p>
            </section>

            {/* 7. Links */}
            <section id="links" className="space-y-3">
                <h3 className="text-xl font-semibold">Links</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`<a href="https://example.com">Visit Site</a>
<a href="#section">Jump to Section</a>
<a href="file.pdf" download>Download PDF</a>`}
                </pre>
            </section>

            {/* 8. Images */}
            <section id="images" className="space-y-3">
                <h3 className="text-xl font-semibold">Images</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`<img src="photo.jpg" alt="A mountain at sunrise" />`}
                </pre>

                <p>
                    Always include descriptive <code>alt</code> text for accessibility.
                </p>
            </section>

            {/* 9. Lists */}
            <section id="lists" className="space-y-3">
                <h3 className="text-xl font-semibold">Lists</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`<ul>
  <li>Item</li>
</ul>

<ol>
  <li>First</li>
</ol>`}
                </pre>
            </section>

            {/* 10. Tables */}
            <section id="tables" className="space-y-3">
                <h3 className="text-xl font-semibold">Tables</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Dave</td>
    <td>30</td>
  </tr>
</table>`}
                </pre>
            </section>

            {/* 11. Semantic Layout */}
            <section id="semantic-layout" className="space-y-3">
                <h3 className="text-xl font-semibold">Semantic Layout</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`<header>...</header>
<nav>...</nav>
<main>...</main>
<aside>...</aside>
<footer>...</footer>`}
                </pre>

                <p>
                    Semantic elements improve accessibility and help search engines understand your
                    content.
                </p>
            </section>

            {/* 12. Forms */}
            <section id="forms" className="space-y-3">
                <h3 className="text-xl font-semibold">Forms</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`<form>
  <label for="email">Email</label>
  <input id="email" type="email" required />
  <button type="submit">Submit</button>
</form>`}
                </pre>
            </section>

            {/* 13. Forms API */}
            <section id="forms-api" className="space-y-3">
                <h3 className="text-xl font-semibold">Forms API</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`form.reset();
form.reportValidity();
input.value;
input.validity;
input.setCustomValidity("Message");`}
                </pre>
            </section>

            {/* 14. Accessibility Fundamentals */}
            <section id="accessibility-fundamentals" className="space-y-3">
                <h3 className="text-xl font-semibold">Accessibility Fundamentals</h3>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Use semantic HTML.</li>
                    <li>Ensure keyboard access.</li>
                    <li>Provide descriptive labels.</li>
                    <li>Use ARIA only when necessary.</li>
                </ul>
            </section>

            {/* 15. Accessibility Patterns */}
            <section id="accessibility-patterns" className="space-y-3">
                <h3 className="text-xl font-semibold">Accessibility Patterns</h3>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Visible focus states.</li>
                    <li>
                        Use <code>role=&quote;alert&quote;</code> for announcements.
                    </li>
                    <li>
                        Use <code>aria-live</code> for dynamic updates.
                    </li>
                    <li>Ensure keyboard access for custom widgets.</li>
                </ul>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`<div role="alert">
  Your settings have been saved.
</div>`}
                </pre>
            </section>

            {/* 16. ARIA Patterns */}
            <section id="aria-patterns" className="space-y-3">
                <h3 className="text-xl font-semibold">ARIA Patterns</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`<!-- Tabs -->
<div role="tablist">
  <button role="tab" aria-selected="true" aria-controls="tab-1">Tab 1</button>
  <button role="tab" aria-controls="tab-2">Tab 2</button>
</div>

<div id="tab-1" role="tabpanel">Content 1</div>
<div id="tab-2" role="tabpanel" hidden>Content 2</div>`}
                </pre>
            </section>

            {/* 17. Best Practices */}
            <section id="best-practices" className="space-y-3">
                <h3 className="text-xl font-semibold">Best Practices</h3>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Use semantic elements.</li>
                    <li>Keep headings in order.</li>
                    <li>Always include alt text.</li>
                    <li>Use labels for form inputs.</li>
                    <li>Use ARIA sparingly and correctly.</li>
                </ul>
            </section>
        </section>
    );
}
