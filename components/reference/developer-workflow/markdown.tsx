export default function Markdown() {
    return (
        <div className="space-y-10">
            {/* 1. Overview */}
            <header className="space-y-3 h-fit">
                <h1 className="text-xl font-bold">Markdown</h1>
                <p className="text-muted-foreground mt-2">
                    Markdown is a lightweight markup language used for documentation, notes, README
                    files, and static site content. It is simple, readable, and widely supported.
                </p>
            </header>

            {/* 2. Why Markdown Exists */}
            <section id="why-markdown" className="space-y-3">
                <h2 className="text-lg font-medium">Why Markdown Exists</h2>
                <p>
                    Markdown was created to make writing formatted text as easy as writing plain
                    text. It avoids the complexity of HTML while still allowing structure and
                    formatting.
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Easy to write</li>
                    <li>Easy to read in raw form</li>
                    <li>Portable across platforms</li>
                    <li>Perfect for documentation</li>
                </ul>
            </section>

            {/* 3. Basic Syntax */}
            <section id="markdown-syntax" className="space-y-3">
                <h2 className="text-lg font-medium">Basic Syntax</h2>

                <h3 className="font-medium">Headings</h3>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`# Heading 1
## Heading 2
### Heading 3`}
                </pre>

                <h3 className="font-medium">Bold & Italic</h3>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`**Bold text**
*Italic text*`}
                </pre>

                <h3 className="font-medium">Lists</h3>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`- Item one
- Item two
  - Nested item`}
                </pre>

                <h3 className="font-medium">Links</h3>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`[OpenAI](https://openai.com)`}
                </pre>

                <h3 className="font-medium">Images</h3>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`![Alt text](image-url.png)`}
                </pre>

                <h3 className="font-medium">Code Blocks</h3>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`\`\`\`js
console.log("Hello Markdown");
\`\`\``}
                </pre>
            </section>

            {/* 4. GitHub Flavored Markdown */}
            <section id="gfm" className="space-y-3">
                <h2 className="text-lg font-medium">GitHub Flavored Markdown (GFM)</h2>
                <p>
                    GitHub extends Markdown with additional features that make documentation richer
                    and more expressive.
                </p>

                <h3 className="font-medium">Task Lists</h3>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`- [x] Write documentation
- [ ] Add examples`}
                </pre>

                <h3 className="font-medium">Tables</h3>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`| Name | Age |
|------|-----|
| Sam  | 24  |
| Alex | 30  |`}
                </pre>
            </section>

            {/* 5. Best Practices */}
            <section id="markdown-best-practices" className="space-y-3">
                <h2 className="text-lg font-medium">Best Practices</h2>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Keep line lengths short</li>
                    <li>Use headings to structure content</li>
                    <li>Use code blocks for technical examples</li>
                    <li>Use lists to break up dense text</li>
                    <li>Use alt text for images</li>
                </ul>
            </section>
        </div>
    );
}
