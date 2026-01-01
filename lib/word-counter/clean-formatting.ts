export function cleanFormatting(input: string): string {
    return input
        .replace(/\t+/g, " ") // tabs → spaces
        .replace(/ +/g, " ") // collapse multiple spaces
        .replace(/\r\n/g, "\n") // normalize CRLF → LF
        .replace(/\n{3,}/g, "\n\n") // collapse 3+ blank lines → 2
        .trim(); // remove leading/trailing whitespace
}
