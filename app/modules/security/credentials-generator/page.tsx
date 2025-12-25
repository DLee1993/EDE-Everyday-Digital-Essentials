"use client";

import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { useCallback, useState } from "react";
import { Copy } from "@/lib/global/copy-to-clipboard";
import { GeneratePassword, GeneratePin } from "@/lib/credentials-generator/generate-credentials";
import SelectLength from "@/components/credentials-generator/SelectLength";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CopyIcon } from "lucide-react";

export default function CredentialsGenerator() {
    const gridLength = 38;
    const [otpInput, setOtpInput] = useState("");
    const [type, setType] = useState("password");
    const [pwLength, setPwLength] = useState<number>(8);
    const [pcLength, setPcLength] = useState<number>(4);

    const toggleType = (type: string | null) => {
        if (!type) return;
        setType(type);
        setOtpInput("");
    };

    const GenerateType = useCallback(() => {
        const value = type === "password" ? GeneratePassword(pwLength) : GeneratePin(pcLength);

        if (value) setOtpInput(value);
    }, [type, pwLength, pcLength]);

    return (
        <section className="space-y-7">
            <section className="w-full max-w-231 flex max-[425px]:justify-between items-center gap-5">
                <ToggleGroup type="single" value={type} onValueChange={(val) => toggleType(val)}>
                    <ToggleGroupItem className="w-24" value="password">
                        Password
                    </ToggleGroupItem>
                    <ToggleGroupItem className="w-24" value="pin">
                        Pin
                    </ToggleGroupItem>
                </ToggleGroup>
                <SelectLength
                    length={type === "password" ? pwLength : pcLength}
                    setLength={type === "password" ? setPwLength : setPcLength}
                />
            </section>
            <InputOTP
                value={otpInput}
                maxLength={gridLength}
                readOnly
                className="select-none cursor-default"
            >
                <InputOTPGroup className="flex flex-wrap max-w-231 justify-center">
                    {Array.from({ length: gridLength }).map((_, index) => (
                        <InputOTPSlot key={index} index={index} className="size-12 text-lg" />
                    ))}
                </InputOTPGroup>
            </InputOTP>
            <section className="w-full flex gap-5 max-w-231">
                <Button
                    onClick={GenerateType}
                    aria-label={`Generate ${type}`}
                    className="flex-1 min-[425px]:max-w-24"
                    type="button"
                >
                    Generate
                </Button>
                <Button
                    variant="outline"
                    onClick={() => Copy({ input: otpInput })}
                    disabled={!otpInput}
                >
                    Copy
                    <CopyIcon />
                </Button>
            </section>
        </section>
    );
}
