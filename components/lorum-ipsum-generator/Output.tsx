"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Copy } from "@/lib/global/copy-to-clipboard";

type Props = {
    output: string;
    onGenerate: () => void;
    onClear: () => void;
};

export function LoremOutput({ output, onGenerate, onClear }: Props) {
    return (
        <section className="w-full space-y-10">
            <Textarea className="resize-none w-full h-52" value={output} readOnly />

            <div className="w-fit flex justify-between items-center gap-2">
                <Button className="flex-1" onClick={onGenerate}>
                    Generate
                </Button>

                <Button
                    className="flex-1"
                    variant="secondary"
                    onClick={() => Copy({ input: output })}
                >
                    Copy
                </Button>

                <Button className="flex-1" variant="secondary" onClick={onClear}>
                    Clear
                </Button>
            </div>
        </section>
    );
}
