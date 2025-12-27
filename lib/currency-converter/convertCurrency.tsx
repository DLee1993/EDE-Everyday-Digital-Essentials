export function convertCurrency({
    amount,
    from,
    to,
    rates,
}: {
    amount: number;
    from: string;
    to: string;
    rates: Record<string, number>;
    base: string; // e.g., "GBP" or "EUR"
}) {
    if (isNaN(amount)) {
        throw new Error("Invalid amount");
    }

    if (!rates[from]) {
        throw new Error(`Exchange rate for ${from} not found`);
    }

    if (!rates[to]) {
        throw new Error(`Exchange rate for ${to} not found`);
    }

    if (from === to) {
        return amount;
    }

    const fromRate = rates[from];
    const toRate = rates[to];

    // Convert from → base → target
    const baseAmount = amount / fromRate;
    return baseAmount * toRate;
}
