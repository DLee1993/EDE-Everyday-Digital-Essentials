import { useCallback, useState, useMemo } from "react";
import {
    convertCurrency,
    parseAmount,
    RatesMap,
} from "@/lib/currency-converter/convert-currency";


export function useCurrencyConverter(rates: RatesMap, base: string) {
  
    const [amount, setAmount] = useState("1");
    const [selected, setSelected] = useState({ from: "GBP", to: "USD" });
    const [result, setResult] = useState<number | null>(null);
    const [error, setError] = useState("");

   
    const formatAmountInput = useCallback((value: string) => {
        const stripped = value.replace(/,/g, "");

        if (stripped === "") return "";

        if (!isNaN(Number(stripped))) {
            return Number(stripped).toLocaleString();
        }

        return value;
    }, []);

  
    const convert = useCallback(() => {
        setError("");
        setResult(null);

        const parsed = parseAmount(amount);
        if (parsed === null) {
            setError("Invalid amount");
            return;
        }

        const output = convertCurrency(parsed, selected.from, selected.to, rates, base);

        if (output === null) {
            setError("Conversion failed");
            return;
        }

        setResult(output);
    }, [amount, selected, rates, base]);


    const reset = useCallback(() => {
        setAmount("1");
        setSelected({ from: "GBP", to: "USD" });
        setResult(null);
        setError("");
    }, []);

    
    const resetDisabled = useMemo(() => {
        return (
            amount === "1" && selected.from === "GBP" && selected.to === "USD" && !result && !error
        );
    }, [amount, selected, result, error]);

    return {
        amount,
        setAmount,
        selected,
        setSelected,
        result,
        error,
        convert,
        reset,
        resetDisabled,
        formatAmountInput,
        setResult,
        setError,
    };
}
