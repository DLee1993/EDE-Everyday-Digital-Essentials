/* eslint-disable @typescript-eslint/no-explicit-any */
// /hooks/currency/useCurrencyConverter.ts

import { useState } from "react";
import { convertCurrency } from "@/lib/currency-converter/convertCurrency";

export function useCurrencyConverter(rates: Record<string, number>, base: string) {
    const [result, setResult] = useState<number | null>(null);
    const [error, setError] = useState("");

    function convert(amount: string, from: string, to: string) {
        setError("");

        const numeric = Number(amount.replace(/,/g, ""));
        if (isNaN(numeric)) {
            setError("Invalid amount");
            return;
        }

        try {
            const value = convertCurrency({
                amount: numeric,
                from,
                to,
                rates,
                base,
            });

            setResult(value);
        } catch (err: any) {
            setError(err.message);
        }
    }

    return { result, error, convert, setResult, setError };
}
