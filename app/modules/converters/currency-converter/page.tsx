"use client";

import { useCurrencyRates } from "@/hooks/currency-converter/use-currency-rates";
import { useCurrencyConverter } from "@/hooks/currency-converter/use-currency-converter";
import { SelectCurrency } from "@/components/currency-converter/select-currency";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CircleAlert, CircleX } from "lucide-react";

export default function CurrencyConverter() {
    const { rates, base, offline } = useCurrencyRates();
    const {
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
    } = useCurrencyConverter(rates, base);

    return (
        <section className="relative space-y-16">
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
                            onChange={(e) => setAmount(formatAmountInput(e.target.value))}
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
                <Button onClick={convert}>Convert</Button>

                <Button
                    variant="secondary"
                    className="text-sm"
                    onClick={reset}
                    disabled={resetDisabled}
                >
                    Reset
                    <CircleX />
                </Button>
            </div>

            {offline && (
                <p className="text-xs text-muted-foreground absolute bottom-1 left-1/2 -translate-x-1/2">
                    Offline mode — using fallback rates
                </p>
            )}
            <p className="text-xs text-muted-foreground absolute bottom-1 left-1/2 -translate-x-1/2">
                Powered by <a href="https://www.exchangerate-api.com">Rates By Exchange Rate API</a>
            </p>
        </section>
    );
}
