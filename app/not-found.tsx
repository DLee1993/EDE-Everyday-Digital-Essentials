import Link from "next/link";

export default function NotFound() {
    return (
        <div className="height flex flex-col justify-center items-center gap-5">
            <h1 className="text-2xl md:text-3xl max-w-xl font-black">
                Oops! Looks like we haven&apos;t created what your looking for.
            </h1>
            <div className="w-full max-w-xl space-y-5">
                <p>
                    If you have a suggestion on what we should build next, get in touch{" "}
                    <Link href="/contact" className="underline">
                        here.
                    </Link>
                </p>
                <p>
                    Please continue to look around the website, we have some really cool modules you
                    can use.
                </p>
                <p className="mt-20 text-sm">&copy; 2025 EDE. All rights reserved.</p>
            </div>
        </div>
    );
}
