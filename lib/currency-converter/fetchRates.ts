// /lib/currency/fetchRates.ts

export async function fetchRates(base: string = "GBP") {
    const url = `https://open.er-api.com/v6/latest/${base}`;

    const res = await fetch(url);
    const data = await res.json();

    if (!data?.rates) {
        throw new Error("Invalid API response");
    }

    return {
        rates: data.rates as Record<string, number>,
        base: data.base_code as string,
        timestamp: Date.now(),
    };
}
