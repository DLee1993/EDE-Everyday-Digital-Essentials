import { useMounted } from "@/hooks/global/use-mounted";

export default function Timer({ remaining }: { remaining: number }) {
    const mounted = useMounted();

    if (!mounted) {
        return <p className="text-8xl sm:text-9xl text-center w-full max-w-xl">00:00</p>;
    }

    return (
        <section className="font-prime flex-1 max-w-xl min-h-40 flex justify-center items-center">
            <p className="text-8xl min-[425px]:text-9xl lg:text-[11rem] text-center w-full">
                {Math.floor(remaining / 60)
                    .toString()
                    .padStart(2, "0")}
                :{(remaining % 60).toString().padStart(2, "0")}
            </p>
        </section>
    );
}
