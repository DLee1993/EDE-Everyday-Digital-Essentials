import { useState } from "react";
import { Unit } from "convert-units";
import { ConvertUnits } from "@/lib/unit-converter/convertUnits";

export function useUnitConverter() {
    const [amount, setAmount] = useState("");
    const [selectedValue, setSelectedValue] = useState<{ from: Unit | ""; to: Unit | "" }>({
        from: "",
        to: "",
    });
    const [result, setResult] = useState<number | null>(null);
    const [error, setError] = useState("");

    const convert = () => {
        ConvertUnits({
            amount,
            from: selectedValue.from,
            to: selectedValue.to,
            setResult,
            setError,
        });
    };

    const reset = () => {
        setSelectedValue({ from: "", to: "" });
        setAmount("");
        setResult(null);
        setError("");
    };

    return {
        amount,
        setAmount,
        selectedValue,
        setSelectedValue,
        result,
        error,
        convert,
        reset,
    };
}
