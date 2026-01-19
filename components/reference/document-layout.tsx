"use client";

type ContentBlock = {
    type: string;
    text?: string;
    items?: string[];
};

interface Section {
    id: string;
    title: string;
    content: ContentBlock[];
}

interface Doc {
    title: string;
    description: string;
    sections: Section[];
}

export default function DocumentLayout({ doc }: { doc: Doc }) {
    return (
        <article className="space-y-16">
            {/* Header */}
            <header className="space-y-3">
                <h1 className="text-2xl font-bold border-b-2 border-primary">{doc.title}</h1>
                <p className="text-muted-foreground">{doc.description}</p>
            </header>

            {/* Sections */}
            {doc.sections.map((section) => (
                <section key={section.id} id={section.id} className="space-y-4">
                    <h2 className="text-xl font-semibold">{section.title}</h2>

                    {section.content.map((block, i) => {
                        switch (block.type) {
                            case "p":
                                return <p key={i}>{block.text}</p>;

                            case "list":
                                return (
                                    <ul key={i} className="list-disc pl-6 space-y-1">
                                        {block.items?.map((item, j) => (
                                            <li key={j}>{item}</li>
                                        ))}
                                    </ul>
                                );

                            case "code":
                                return (
                                    <pre
                                        key={i}
                                        className="bg-muted p-4 rounded-md overflow-x-auto text-sm"
                                    >
                                        {block.text}
                                    </pre>
                                );

                            case "h3":
                                return (
                                    <h3 key={i} className="font-medium">
                                        {block.text}
                                    </h3>
                                );

                            default:
                                return null;
                        }
                    })}
                </section>
            ))}
        </article>
    );
}
