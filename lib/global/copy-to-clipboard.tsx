import { NotifyUser } from "./NotifyUser";

const writeToClipboard = async (input: string) => {
    try {
        await navigator.clipboard.writeText(input);
        return true;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const Copy = async ({ input }: { input: string }) => {
    if (input.length === 0) {
        return NotifyUser({ type: "Error", title: "Error - Nothing to copy" });
    }

    const success = await writeToClipboard(input);

    if (success) {
        NotifyUser({ type: "Success", title: "Success - Copied to clipboard" });
    } else {
        NotifyUser({ type: "Error", title: "Error - Failed to copy to clipboard" });
    }
};

export const CopyAll = async ({ inputs }: { inputs: string[] }) => {
    if (!inputs || inputs.length === 0) {
        return NotifyUser({ type: "Error", title: "Error - Nothing to copy" });
    }

    const combined = inputs.join("\n"); // newline-separated
    const success = await writeToClipboard(combined);

    if (success) {
        NotifyUser({ type: "Success", title: "Success - Copied all to clipboard" });
    } else {
        NotifyUser({ type: "Error", title: "Error - Failed to copy all to clipboard" });
    }
};
