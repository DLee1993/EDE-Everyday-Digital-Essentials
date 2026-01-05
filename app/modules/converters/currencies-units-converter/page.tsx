"use client";

import CurrencyCard from "@/components/currencies-units-converter/currency-card";
import UnitsCard from "@/components/currencies-units-converter/units-card";

export default function CurrencyAndUnits() {
    return (
        <section className="grid! grid-cols-1 md:grid-cols-2 gap-5">
            <CurrencyCard />
            <UnitsCard />
        </section>
    );
}
