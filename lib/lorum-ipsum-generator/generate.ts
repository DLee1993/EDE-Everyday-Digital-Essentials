import { LOREM_WORDS } from "./words";

export function generateLorem(
    paragraphs: number,
    sentences: number,
    minWords: number,
    maxWords: number
): string {
    const result: string[] = [];

    for (let p = 0; p < paragraphs; p++) {
        const sentencesArr: string[] = [];

        for (let s = 0; s < sentences; s++) {
            const length = Math.floor(Math.random() * (maxWords - minWords + 1)) + minWords;

            const sentence = Array.from(
                { length },
                () => LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)]
            ).join(" ");

            sentencesArr.push(sentence.charAt(0).toUpperCase() + sentence.slice(1) + ".");
        }

        result.push(sentencesArr.join(" "));
    }

    return result.join("\n\n");
}
