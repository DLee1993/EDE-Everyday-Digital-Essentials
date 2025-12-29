"use client";

import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import SelectLength from "@/components/credentials-generator/SelectLength";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CopyIcon } from "lucide-react";
import { useCredentialsGenerator } from "@/hooks/credentials-generator/useCredentialsGenerator";
import { Copy } from "@/lib/global/copy-to-clipboard";

export default function CredentialsGenerator() {
    const gridLength = 38;
    const {
        type,
        value: otpInput,
        passwordLength: pwLength,
        pinLength: pcLength,
        setPasswordLength: setPwLength,
        setPinLength: setPcLength,
        changeType,
        regenerate,
    } = useCredentialsGenerator();

    return (
        <section className="space-y-7">
            <section className="w-full max-w-231 flex max-[425px]:justify-between items-center gap-5">
                <ToggleGroup
                    type="single"
                    value={type}
                    onValueChange={(val) => {
                        if (val === "password" || val === "pin") changeType(val);
                    }}
                >
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
                name="one time input"
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
                    onClick={regenerate}
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
