"use client";

import { useEffect, useState } from "react";
import { GeneratePin } from "@/lib/credentials-generator/generate-credentials";
import { Button } from "@/components/ui/button";
import { Copy } from "@/lib/global/copy-to-clipboard";
import SelectLength from "@/components/credentials-generator/SelectLength";
import { CopyIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Pin() {
    const [pcLength, setPcLength] = useState<number>(4);
    const [codeInput, setCodeInput] = useState<string>("");

    function GenerateCredentials(length: number) {
        const pin = GeneratePin(length);
        if (pin) {
            setCodeInput(pin);
        }
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCodeInput("");
    }, [pcLength]);

    return (
        <section className="min-w-80">
            <div className="flex flex-col space-y-12">
                <div className="space-y-2.5">
                    <p className="text-sm">Select pin length</p>
                    <SelectLength type="code" pcLength={pcLength} setPcLength={setPcLength} />
                </div>
                <Input
                    maxLength={pcLength}
                    readOnly
                    value={codeInput}
                    className="text-xl! text-accent-foreground bg-input/25 h-12 shadow-none border-border tracking-widest rounded-none text-center"
                ></Input>

                {/* Password Controls */}
                <div className="flex gap-4 w-full flex-wrap">
                    <Button
                        id="pin"
                        onClick={() => GenerateCredentials(pcLength)}
                        aria-label="click to generate pin"
                        className="flex-1 min-w-40 cursor-pointer"
                        type="button"
                    >
                        Generate Pin
                    </Button>
                    <Button
                        className="text-foreground flex-1 min-w-40 cursor-pointer"
                        variant="outline"
                        onClick={() => Copy({ input: codeInput || "" })}
                        aria-label="click to copy pin"
                        type="button"
                    >
                        Copy to clipboard
                        <CopyIcon size={16} />
                    </Button>
                </div>
            </div>
        </section>
    );
}
