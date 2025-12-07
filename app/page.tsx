import Link from "next/link";

export default function Home() {
    return (
        <section className="pt-12 sm:pt-14 md:pt-16 lg:pt-20 space-y-20">
            <article className="text-center space-y-10">
                <sup>Welcome to</sup>
                <h1 className="text-2xl sm:text-3xl md:text-4xl mt-2 font-medium">
                    Your Everyday Digital Essentials
                </h1>
                <p className="max-w-2xl mx-auto">
                    EDE is a versatile minimalist platform designed to simplify and enhance your
                    daily tasks—bringing clarity, and organization to your fingertips.
                </p>
            </article>
            <section>
                <ul className="max-w-7xl flex justify-evenly items-center mx-auto gap-1">
                    <li>No Ads</li>
                    <li>-</li>
                    <li>No personal data sold</li>
                    <li>-</li>
                    <li>No price plan</li>
                </ul>
            </section>
            <section className="px-5 max-w-5xl mx-auto space-y-10">
                <h2 className="text-center text-xl font-semibold tracking-tight">
                    🧰 What&apos;s Inside
                </h2>
                <ul className="grid md:grid-cols-2 gap-6 leading-relaxed">
                    <li className="p-5 rounded border border-border bg-card text-card-foreground">
                        <h3 className="font-medium mb-2">📦 QR Code Generator</h3>
                        <p>
                            Dynamic formatting for Wi-Fi, URLs, contacts, and more. Modular and
                            extensible by design.
                        </p>
                    </li>
                    <li className="p-5 rounded border border-border bg-card text-card-foreground">
                        <h3 className="font-medium mb-2">🎨 OKLCH Palette Harmonizer</h3>
                        <p>
                            Perceptual color conversion for accessible, harmonious design across
                            light and dark themes.
                        </p>
                    </li>
                    <li className="p-5 rounded border border-border bg-card text-card-foreground">
                        <h3 className="font-medium mb-2">🔍 Smart Search & Highlight</h3>
                        <p>
                            Live search with grouped results and intelligent match highlighting for
                            fast, focused discovery.
                        </p>
                    </li>
                    <li className="p-5 rounded border border-border bg-card text-card-foreground">
                        <h3 className="font-medium mb-2">🧰 General-Purpose Utilities</h3>
                        <p>
                            Notepad, password generator, and more—simple, reliable, and ready when
                            you are.
                        </p>
                    </li>
                </ul>
                <p className="text-center">And so much more...</p>
            </section>
            <footer className="w-full h-fit border-t border-border py-7 px-5">
                <section className="flex flex-wrap justify-between items-start gap-12">
                    <article className="space-y-5">
                        <h2 className="text-lg font-semibold">EDE</h2>
                        <p className="max-w-2xl mx-auto">
                            A versatile minimalist platform designed to simplify and enhance your
                            daily tasks—bringing clarity, and organization to your
                            fingertips.
                        </p>
                        <p className="text-muted-foreground">
                            Built with care. Feedback is welcome as we continue to improve the platform.
                        </p>
                    </article>
                    <ul className="w-full flex gap-5">
                        <li>&copy; 2025 EDE. All rights reserved.</li>
                        <li className="ml-auto">
                            <Link href="https://github.com/DLee1993/oryn" target="_blank">
                                Github
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com/in/dev-david-lee" target="_blank">
                                Linkedin
                            </Link>
                        </li>
                    </ul>
                </section>
            </footer>
        </section>
    );
}
