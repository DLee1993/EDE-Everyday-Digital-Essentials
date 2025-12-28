export type RatesMap = Record<string, number>;

export function validateCurrency(code: string, rates: RatesMap): boolean {
    return Boolean(code && rates && rates[code] !== undefined);
}

export function parseAmount(input: string): number | null {
    const stripped = input.replace(/,/g, "");
    if (stripped === "") return null;
    const num = Number(stripped);
    return isNaN(num) ? null : num;
}

export function convertCurrency(
    amount: number,
    from: string,
    to: string,
    rates: RatesMap,
    base: string
): number | null {
    if (!validateCurrency(from, rates) || !validateCurrency(to, rates)) return null;

    // Convert amount to base currency
    const inBase = from === base ? amount : amount / rates[from];

    // Convert base → target
    const result = inBase * rates[to];

    return Number.isFinite(result) ? result : null;
}

export function formatNumber(value: number): string {
    return value.toLocaleString(undefined, {
        maximumFractionDigits: 6,
    });
}
