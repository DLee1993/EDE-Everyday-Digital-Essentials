"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SelectUnit } from "@/components/unit-converter/select-unit";
import { CircleAlert, CircleX } from "lucide-react";
import { useUnitConverter } from "@/hooks/unit-converter/use-unit-converter";

export default function UnitConverter() {
    const { amount, setAmount, selectedValue, setSelectedValue, result, error, convert, reset } =
        useUnitConverter();

        

    return (
        <section className="relative space-y-16">
            <section className="w-full flex flex-col md:flex-row gap-10">
                <div className="w-full flex flex-col gap-2">
                    <h2 className="text-sm font-semibold text-muted-foreground">From</h2>
                    <fieldset className="flex gap-2">
                        <SelectUnit
                            type="from"
                            selectedValue={selectedValue}
                            setSelectedValue={setSelectedValue}
                        />
                        <Input
                            value={amount}
                            id="amount"
                            onChange={(e) => setAmount(e.target.value)}
                            className="text-center"
                            placeholder="Amount"
                            type="number"
                        />
                    </fieldset>
                </div>

                <div className="w-full flex flex-col gap-2">
                    <h2 className="text-sm font-semibold text-muted-foreground">To</h2>
                    <fieldset className="flex gap-2">
                        <SelectUnit
                            type="to"
                            selectedValue={selectedValue}
                            setSelectedValue={setSelectedValue}
                        />
                        <Input
                            readOnly
                            id="result"
                            value={result !== null ? Number(result).toLocaleString() : ""}
                            className="text-center"
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
                    disabled={!selectedValue.from}
                >
                    Reset
                    <CircleX />
                </Button>
            </div>
        </section>
    );
}
