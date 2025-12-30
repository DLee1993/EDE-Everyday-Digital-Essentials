// ---------------------------------------------
// Fetch persisted state from localStorage
// ---------------------------------------------

// this fetches and merges persisted state for a given slice, if not data available returns defaultValue you provide when calling it

export function rehydrateSlice<T>(key: string, defaultValue: T): T {
    if (typeof window === "undefined") return defaultValue;

    try {
        const raw = localStorage.getItem(key);
        if (!raw) return defaultValue;

        const parsed = JSON.parse(raw);

        // Merge defaults with stored values
        return { ...defaultValue, ...parsed };
    } catch {
        return defaultValue;
    }
}
