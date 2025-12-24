"use client";

import { useEffect, useState } from "react";
import { GeneratePassword } from "@/lib/credentials-generator/generate-credentials";
import { Copy } from "@/lib/global/copy-to-clipboard";
import SelectLength from "@/components/credentials-generator/SelectLength";
import { Button } from "@/components/ui/button";
import { CopyIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Password() {
    const [pwLength, setPwLength] = useState<number>(8);
    const [passwordInput, setPasswordInput] = useState<string>("");

    function GenerateCredentials(length: number) {
        const password = GeneratePassword(length);
        if (password) {
            setPasswordInput(password);
        }
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPasswordInput("");
    }, [pwLength]);

    return (
        <section className="min-w-80">
            <div className="flex flex-col space-y-12">
                <div className="space-y-2.5">
                    <p className="text-sm">Select password length</p>
                    <SelectLength type="password" pwLength={pwLength} setPwLength={setPwLength} />
                </div>
                <Label htmlFor="passwordInput" className="sr-only">
                    Read only Password Input
                </Label>
                <Input
                    id="passwordInput"
                    aria-label="Read only password input element"
                    maxLength={pwLength}
                    readOnly
                    value={passwordInput}
                    className="text-xl! h-12 shadow-none border-border tracking-widest rounded-none text-center"
                ></Input>

                {/* Password Controls */}
                <div className="flex gap-4 w-full flex-wrap">
                    <Button
                        id="password"
                        onClick={() => GenerateCredentials(pwLength)}
                        aria-label="click to generate password"
                        className="flex-1 cursor-pointer"
                        type="button"
                    >
                        Generate Password
                    </Button>
                    <Button
                        className="text-foreground flex-1 max-w-80 cursor-pointer"
                        variant="outline"
                        onClick={() => Copy({ input: passwordInput || "" })}
                        aria-label="click to copy password"
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
