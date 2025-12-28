"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Copy } from "@/lib/global/copy-to-clipboard";
import { LorumIpsumOutputProps } from "@/types";
import { CopyIcon } from "lucide-react";

export function LoremOutput({ output, onGenerate, onClear }: LorumIpsumOutputProps) {
    return (
        <section className="w-full space-y-10">
            <Textarea name="output" className="resize-none w-full h-52" value={output} readOnly />

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
                    <CopyIcon/>
                </Button>

                <Button className="flex-1" variant="secondary" onClick={onClear}>
                    Clear
                </Button>
            </div>
        </section>
    );
}
