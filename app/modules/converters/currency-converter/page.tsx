"use client";

import { useEffect, useState, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { SelectCurrency } from "@/components/currency-converter/SelectCurrency";
import { ConvertCurrency } from "@/lib/currency-converter/convertCurrency";
import { Button } from "@/components/ui/button";
import { CircleAlert, CircleX } from "lucide-react";

export default function CurrencyConverter() {
    const [amount, setAmount] = useState("1");
    const [countryCodes, setCountryCodes] = useState<{ [key: string]: number }>({});
    const [result, setResult] = useState<number | null>(null);
    const [error, setError] = useState<string>("");
    const [selectedValue, setSelectedValue] = useState<{ from: string; to: string }>({
        from: "GBP",
        to: "USD",
    });

    const AddPunctuation = (value: string) => {
        const stripped = value.replace(/,/g, "");

        // Allow clearing the field
        if (stripped === "") {
            setAmount("");
            return;
        }

        // Validate numeric input
        if (!isNaN(Number(stripped))) {
            setAmount(Number(stripped).toLocaleString());
        }
    };

    const SubmitConversion = useCallback(() => {
        setError("");

        // Validate before converting
        const numeric = Number(amount.replace(/,/g, ""));
        if (isNaN(numeric)) {
            setError("Enter a valid number");
            return;
        }

        ConvertCurrency({
            amount: amount,
            to: selectedValue.to,
            from: selectedValue.from,
            rates: countryCodes,
            setResult,
            setError,
        });
    }, [amount, selectedValue.to, selectedValue.from, countryCodes, setResult, setError]);

    useEffect(() => {
        async function fetchCurrency() {
            try {
                const exchangeRates = await fetch("https://open.er-api.com/v6/latest/GBP", {
                    method: "GET",
                });
                const data = await exchangeRates.json();

                if (!data?.rates) {
                    setError("Unable to fetch exchange rates");
                    return;
                }

                setCountryCodes(data.rates);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
                setError("Unable to fetch exchange rates");
            }
        }

        fetchCurrency();
    }, []);

    const ClearUnits = () => {
        setSelectedValue({ from: "GBP", to: "USD" });
        setAmount("1");
        setResult(null);
        setError("");
    };

    // Determine if Reset should be disabled
    const resetDisabled =
        amount === "1" &&
        selectedValue.from === "GBP" &&
        selectedValue.to === "USD" &&
        !result &&
        !error;

    return (
        <section className="relative space-y-20 max-w-3xl">
            <section className="w-full flex flex-col md:flex-row gap-10">
                <div className="w-full flex flex-col gap-2">
                    <h2 className="text-sm font-semibold text-muted-foreground">From</h2>
                    <div className="flex gap-2">
                        <SelectCurrency
                            type="from"
                            selectedValue={selectedValue}
                            setSelectedValue={setSelectedValue}
                            countryCodes={countryCodes}
                        />
                        <Input
                            value={amount}
                            id="amount"
                            name="amount"
                            onChange={(e) => AddPunctuation(e.target.value)}
                            placeholder="Enter currency amount"
                            type="text"
                        />
                    </div>
                </div>

                <div className="w-full flex flex-col gap-2">
                    <h2 className="text-sm font-semibold text-muted-foreground">To</h2>
                    <div className="flex gap-2">
                        <SelectCurrency
                            type="to"
                            selectedValue={selectedValue}
                            setSelectedValue={setSelectedValue}
                            countryCodes={countryCodes}
                        />
                        <Input
                            readOnly
                            type="text"
                            id="result"
                            name="result"
                            value={error || (result !== null ? result.toLocaleString() : "")}
                            className={`${error ? "text-red-500 font-medium" : ""}`}
                        />
                    </div>
                </div>

                <p className="min-h-5 text-red-600 text-sm font-medium">
                    {error && (
                        <span className="flex items-center gap-2">
                            <CircleAlert size={15} />
                            {error}
                        </span>
                    )}
                </p>
            </section>

            <div className="w-full flex gap-5">
                <Button onClick={SubmitConversion}>Convert</Button>

                <Button
                    variant="secondary"
                    className="text-sm"
                    onClick={ClearUnits}
                    disabled={resetDisabled}
                >
                    Reset
                    <CircleX />
                </Button>
            </div>

            <p className="text-xs text-muted-foreground absolute bottom-1 left-1/2 -translate-x-1/2">
                Powered by <a href="https://www.exchangerate-api.com">Rates By Exchange Rate API</a>
            </p>
        </section>
    );
}
