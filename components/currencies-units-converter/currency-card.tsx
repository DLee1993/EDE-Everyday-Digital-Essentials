import { SelectCurrency } from "@/components/currencies-units-converter/select-currency";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useCurrencyConverter } from "@/hooks/currency-converter/use-currency-converter";
import { useCurrencyRates } from "@/hooks/currency-converter/use-currency-rates";
import { CircleAlert, CircleX, Info } from "lucide-react";

export default function CurrencyCard() {
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
        <Card className="h-full relative">
            <CardHeader>
                <CardTitle>Currency Converter</CardTitle>
                <CardDescription>Convert between global currencies.</CardDescription>
            </CardHeader>

            {/* Error messages go here */}
            {error && (
                <Badge variant="destructive" className="text-sm absolute top-4 right-2 z-10">
                    <span className="flex items-center gap-2">
                        <CircleAlert size={15} />
                        {error}
                    </span>
                </Badge>
            )}
            {offline && (
                <Badge className="text-sm absolute top-4 right-2 z-10">
                    <span className="flex items-center gap-2">
                        <Info size={15} />
                        <span>Offline mode — using fallback rates</span>
                    </span>
                </Badge>
            )}

            <CardContent className="flex-1 space-y-4 flex justify-evenly items-center flex-col">
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
                            placeholder="Enter amount"
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
                            value={result !== null ? result.toLocaleString() : ""}
                        />
                    </fieldset>
                </div>
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
            </CardContent>

            <p className="text-xs text-muted-foreground absolute bottom-1 left-1/2 -translate-x-1/2">
                Powered by <a href="https://www.exchangerate-api.com">Rates By Exchange Rate API</a>
            </p>
        </Card>
    );
}
