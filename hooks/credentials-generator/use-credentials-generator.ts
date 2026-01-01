import { useCallback, useState } from "react";
import { GeneratePassword, GeneratePin } from "@/lib/credentials-generator/generate-credentials";

export function useCredentialsGenerator() {
    const [type, setType] = useState<"password" | "pin">("password");
    const [passwordLength, setPasswordLength] = useState<number>(8);
    const [pinLength, setPinLength] = useState<number>(4);
    const [value, setValue] = useState<string>("");

    const regenerate = useCallback(() => {
        const generated =
            type === "password" ? GeneratePassword(passwordLength) : GeneratePin(pinLength);

        if (generated) setValue(generated);
    }, [type, passwordLength, pinLength]);

    const changeType = useCallback((next: "password" | "pin") => {
        setType(next);
        setValue("");
    }, []);

    return {
        type,
        value,
        passwordLength,
        pinLength,
        regenerate,
        changeType,
        setPasswordLength,
        setPinLength,
    };
}
