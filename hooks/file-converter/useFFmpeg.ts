import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { toBlobURL } from "@ffmpeg/util";
import convertFile from "@/lib/file-converter/convert";
import { Action } from "@/types";

export function useFFmpeg() {
    const ffmpegRef = useRef<FFmpeg | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isConverting, setIsConverting] = useState(false);

    // Load FFmpeg once
    const load = useCallback(async () => {
        if (isLoaded || ffmpegRef.current) return;

        const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.2/dist/umd";
        const ffmpeg = new FFmpeg();

        ffmpeg.on("log", ({ message }) => console.log(message));

        await ffmpeg.load({
            coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
            wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, "application/wasm"),
        });

        ffmpegRef.current = ffmpeg;
        setIsLoaded(true);
    }, [isLoaded]);

    // Convert a single file
    const convertOne = useCallback(async (action: Action) => {
        if (!ffmpegRef.current) throw new Error("FFmpeg not loaded");
        return await convertFile(ffmpegRef.current, action);
    }, []);

    // Convert many files sequentially
    const convertMany = useCallback(
        async (actions: Action[], update: (fileName: string, patch: Partial<Action>) => void) => {
            setIsConverting(true);

            for (const action of actions) {
                try {
                    const { url, output } = await convertOne(action);

                    update(action.file_name, {
                        is_converted: true,
                        is_converting: false,
                        url,
                        output,
                    });
                } catch (err) {
                    console.error(err);

                    update(action.file_name, {
                        is_converted: false,
                        is_converting: false,
                        is_error: true,
                    });
                }
            }

            setIsConverting(false);
        },
        [convertOne]
    );

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        load();
    }, [load]);

    return useMemo(
        () => ({
            isLoaded,
            isConverting,
            convertOne,
            convertMany,
        }),
        [isLoaded, isConverting, convertOne, convertMany]
    );
}
