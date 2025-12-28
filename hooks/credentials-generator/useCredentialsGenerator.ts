import { useCallback, useState } from "react";
import { GeneratePassword, GeneratePin } from "@/lib/credentials-generator/generate-credentials";
import { CredentialType, UseCredentialsOptions } from "@/types";

export function useCredentialsGenerator(options: UseCredentialsOptions = {}) {
    const { defaultType = "password", defaultPasswordLength = 8, defaultPinLength = 4 } = options;

    const [type, setType] = useState<CredentialType>(defaultType);
    const [passwordLength, setPasswordLength] = useState(defaultPasswordLength);
    const [pinLength, setPinLength] = useState(defaultPinLength);
    const [value, setValue] = useState("");

    const regenerate = useCallback(() => {
        const generated =
            type === "password" ? GeneratePassword(passwordLength) : GeneratePin(pinLength);

        if (generated) setValue(generated);
    }, [type, passwordLength, pinLength]);

    const changeType = useCallback((next: CredentialType) => {
        setType(next);
        setValue("");
    }, []);

    return {
        type,
        value,
        passwordLength,
        pinLength,
        setPasswordLength,
        setPinLength,
        changeType,
        regenerate,
    };
}
