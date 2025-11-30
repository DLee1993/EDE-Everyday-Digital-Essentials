import Link from "next/link";

export default function Footer() {
    return (
        <footer className="h-fit min-h-80 border-t border-border py-10 px-5 flex flex-col justify-between gap-10">
            <section className="flex flex-wrap justify-between items-start gap-10">
                <article className="space-y-5">
                    <h2 className="text-lg font-semibold">ORYN</h2>
                    <p className="max-w-md text-sm">
                        A versatile minimalist platform designed to simplify and enhance your daily
                        tasks, bringing efficiency, and organization to your fingertips.
                    </p>
                </article>
                    <ul>
                        <li className="mb-5 font-bold">Digital Spaces</li>
                        <li>
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
            <p className="text-sm">&copy; 2024 ORYN. All rights reserved.</p>
        </footer>
    );
}
