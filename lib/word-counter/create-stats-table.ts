import { TextAnalysis } from "@/types";

export function createStatsTable(a: TextAnalysis): string {
    const rows = [
        ["Words", a.words.toString()],
        ["Characters", a.characters.toString()],
        ["Characters (no spaces)", a.charactersNoSpaces.toString()],
        ["Lines", a.lines.toString()],
        ["Paragraphs", a.paragraphs.toString()],
        ["Reading (slow)", a.readingTime.slow],
        ["Reading (average)", a.readingTime.average],
        ["Reading (fast)", a.readingTime.fast],
        ["Speaking (slow)", a.speakingTime.slow],
        ["Speaking (average)", a.speakingTime.average],
        ["Speaking (fast)", a.speakingTime.fast],
    ];

    const col1 = Math.max(...rows.map((r) => r[0].length));
    const col2 = Math.max(...rows.map((r) => r[1].length));

    const header = "METRIC".padEnd(col1) + " | " + "VALUE".padEnd(col2);
    const divider = "-".repeat(col1) + "-+-" + "-".repeat(col2);

    const body = rows.map((r) => r[0].padEnd(col1) + " | " + r[1].padEnd(col2)).join("\n");

    return [header, divider, body].join("\n");
}
