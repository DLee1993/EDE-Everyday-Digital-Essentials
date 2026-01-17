import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SelectUnit } from "@/components/currencies-units-converter/select-unit";
import { useUnitConverter } from "@/hooks/unit-converter/use-unit-converter";
import { CircleAlert, CircleX } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function UnitsCard() {
    const { amount, setAmount, selectedValue, setSelectedValue, result, error, convert, reset } =
        useUnitConverter();
    return (
        <Card className="h-full relative">
            <CardHeader>
                <CardTitle>Measurements Converter</CardTitle>
                <CardDescription>Convert between global measurements.</CardDescription>
            </CardHeader>

            {error && (
                <Badge variant="destructive" className="text-sm absolute top-4 right-2 z-10">
                    <span className="flex items-center gap-2">
                        <CircleAlert size={15} />
                        {error}
                    </span>
                </Badge>
            )}

            <CardContent className="flex-1 space-y-4 flex justify-evenly items-center flex-col">
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
                            name="amount"
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Enter amount"
                            type="text"
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
                            type="text"
                            id="result"
                            name="result"
                            value={result !== null ? result.toLocaleString() : ""}
                            className={`${error ? "text-red-500 font-medium" : ""}`}
                        />
                    </fieldset>
                </div>
                <div className="w-full flex gap-5">
                    <Button onClick={convert}>Convert</Button>

                    <Button variant="secondary" className="text-sm" onClick={reset} disabled={!result}>
                        Reset
                        <CircleX />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
