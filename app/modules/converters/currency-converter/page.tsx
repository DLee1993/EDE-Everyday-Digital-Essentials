"use client";

import { useState } from "react";
import { useCurrencyRates } from "@/hooks/currency-converter/useCurrencyRates";
import { useCurrencyConverter } from "@/hooks/currency-converter/useCurrencyConverter";
import { SelectCurrency } from "@/components/currency-converter/SelectCurrency";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CircleAlert, CircleX } from "lucide-react";

export default function CurrencyConverter() {
    const { rates, base, offline } = useCurrencyRates();
    const { result, error, convert, setResult, setError } = useCurrencyConverter(rates, base);

    const [amount, setAmount] = useState("1");
    const [selected, setSelected] = useState({ from: "GBP", to: "USD" });

    const AddPunctuation = (value: string) => {
        const stripped = value.replace(/,/g, "");

        if (stripped === "") {
            setAmount("");
            return;
        }

        if (!isNaN(Number(stripped))) {
            setAmount(Number(stripped).toLocaleString());
        }
    };

    const handleConvert = () => {
        convert(amount, selected.from, selected.to);
    };

    const handleReset = () => {
        setSelected({ from: "GBP", to: "USD" });
        setAmount("1");
        setResult(null);
        setError("");
    };

    const resetDisabled =
        amount === "1" && selected.from === "GBP" && selected.to === "USD" && !result && !error;

    return (
        <section className="relative space-y-20 max-w-3xl">
            <section className="w-full flex flex-col md:flex-row gap-10">
                <div className="w-full flex flex-col gap-2">
                    <h2 className="text-sm font-semibold text-muted-foreground">From</h2>
                    <fieldset className="flex gap-2">
                        <SelectCurrency
                            type="from"
                            selectedValue={selected}
                            setSelectedValue={setSelected}
                            countryCodes={rates}
                        />
                        <Input
                            value={amount}
                            id="amount"
                            name="amount"
                            onChange={(e) => AddPunctuation(e.target.value)}
                            placeholder="Enter currency amount"
                            type="text"
                        />
                    </fieldset>
                </div>

                <div className="w-full flex flex-col gap-2">
                    <h2 className="text-sm font-semibold text-muted-foreground">To</h2>
                    <fieldset className="flex gap-2">
                        <SelectCurrency
                            type="to"
                            selectedValue={selected}
                            setSelectedValue={setSelected}
                            countryCodes={rates}
                        />
                        <Input
                            readOnly
                            type="text"
                            id="result"
                            name="result"
                            value={error || (result !== null ? result.toLocaleString() : "")}
                            className={`${error ? "text-red-500 font-medium" : ""}`}
                        />
                    </fieldset>
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
                <Button onClick={handleConvert}>Convert</Button>

                <Button
                    variant="secondary"
                    className="text-sm"
                    onClick={handleReset}
                    disabled={resetDisabled}
                >
                    Reset
                    <CircleX />
                </Button>
            </div>

            {offline && (
                <p className="text-xs text-muted-foreground absolute bottom-1 left-1/2 -translate-x-1/2">Offline mode — using fallback rates</p>
            )}
            <p className="text-xs text-muted-foreground absolute bottom-1 left-1/2 -translate-x-1/2">
                Powered by <a href="https://www.exchangerate-api.com">Rates By Exchange Rate API</a>
            </p>
        </section>
    );
}
