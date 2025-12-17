import { useMounted } from "@/lib/global/use-mounted";

export default function Timer({ remaining }: { remaining: number }) {
    const mounted = useMounted();

    if (!mounted) {
        return <p className="text-8xl sm:text-9xl text-center w-full max-w-xl">00:00</p>;
    }

    return (
        <section className="flex-1 max-w-xl min-h-40 flex jjustify-center items-center">
            <p className="text-8xl min-[425px]:text-9xl lg:text-[9rem] text-center w-full">
                {Math.floor(remaining / 60)
                    .toString()
                    .padStart(2, "0")}
                :{(remaining % 60).toString().padStart(2, "0")}
            </p>
        </section>
    );
}
