"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CopyIcon } from "lucide-react";
import { Copy } from "@/lib/global/copy-to-clipboard";

type LoremOutputProps = {
    generate: () => void;
    clear: () => void;
    output: string;
};

export function LoremOutput({ generate, clear, output }: LoremOutputProps) {
    return (
        <section className="w-full space-y-10">
            <Textarea
                name="output"
                className="resize-none w-full h-52"
                value={output}
                readOnly
                placeholder="Click generate to create some lorem ipsum text..."
            />

            <div className="w-fit flex justify-between items-center gap-2">
                <Button className="flex-1" onClick={generate}>
                    Generate
                </Button>

                <Button
                    className="flex-1"
                    variant="secondary"
                    onClick={() => Copy({ input: output })}
                >
                    Copy
                    <CopyIcon />
                </Button>

                <Button className="flex-1" variant="secondary" onClick={clear}>
                    Clear
                </Button>
            </div>
        </section>
    );
}
