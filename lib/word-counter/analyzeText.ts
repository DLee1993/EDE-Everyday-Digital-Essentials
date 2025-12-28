import { TextAnalysis } from "@/types";

export function analyzeText(input: string): TextAnalysis {
    const trimmed = input.trim();

    const words = trimmed ? trimmed.split(/\s+/).length : 0;
    const characters = input.length;
    const charactersNoSpaces = input.replace(/\s+/g, "").length;
    const lines = input === "" ? 0 : input.split(/\n/).length;
    const paragraphs = trimmed ? trimmed.split(/\n\s*\n/).length : 0;

    // reading time (words per minute)
    const readingSpeeds = {
        slow: 150,
        average: 200,
        fast: 250,
    };

    const speakingSpeeds = {
        slow: 110,
        average: 140,
        fast: 170,
    };

    const formatTime = (wpm: number) => {
        if (words === 0) return "0 sec";
        const minutes = words / wpm;
        if (minutes < 1) return `${Math.round(minutes * 60)} sec`;
        return `${minutes.toFixed(1)} min`;
    };

    return {
        words,
        characters,
        charactersNoSpaces,
        lines,
        paragraphs,
        readingTime: {
            slow: formatTime(readingSpeeds.slow),
            average: formatTime(readingSpeeds.average),
            fast: formatTime(readingSpeeds.fast),
        },
        speakingTime: {
            slow: formatTime(speakingSpeeds.slow),
            average: formatTime(speakingSpeeds.average),
            fast: formatTime(speakingSpeeds.fast),
        },
    };
}
