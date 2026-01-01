// /hooks/currency/useCurrencyRates.ts
import { useEffect, useState } from "react";
import { fetchRates } from "@/lib/currency-converter/fetch-rates";
import { FALLBACK_RATES, FALLBACK_BASE } from "@/lib/currency-converter/fallback-rates";

const CACHE_KEY = "currency_rates_v1";

export function useCurrencyRates() {
    const [rates, setRates] = useState<Record<string, number>>(FALLBACK_RATES);
    const [base, setBase] = useState(FALLBACK_BASE);
    const [offline, setOffline] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            setLoading(true);

            // 1. Try to read cache
            const cachedRaw = localStorage.getItem(CACHE_KEY);
            let cached: { rates: Record<string, number>; base: string } | null = null;

            if (cachedRaw) {
                try {
                    const parsed = JSON.parse(cachedRaw);

                    setRates(parsed.rates);
                    setBase(parsed.base);

                    cached = parsed;
                } catch {
                    cached = null;
                }
            }

            // 2. Try live fetch
            try {
                const live = await fetchRates(base);

                setRates(live.rates);
                setBase(live.base);

                // Save new fallback
                localStorage.setItem(CACHE_KEY, JSON.stringify(live));

                setOffline(false);
                setLoading(false);
                return;
            } catch {
                // Live fetch failed — continue to fallback logic
            }

            // ⭐ 3. Use cached fallback if available
            if (cached !== null) {
                setOffline(true);
                setLoading(false);
                return;
            }

            // ⭐ 4. Use static fallback as last resort
            setRates(FALLBACK_RATES);
            setBase(FALLBACK_BASE);
            setOffline(true);
            setLoading(false);
        }

        load();
    }, [base]);

    return { rates, base, offline, loading };
}
