import { useCallback, useMemo, useState } from "react";
import { NotifyUser } from "@/lib/global/NotifyUser";
import { FileConverterAction } from "@/hooks/file-converter/useActions";

// Accepted MIME roots
const VALID_TYPES = ["image/", "video/", "audio/"];

export function useUploader(addActions: (actions: FileConverterAction[]) => void) {
    const [isHover, setIsHover] = useState(false);

    // Validate MIME type
    const isValidFile = useCallback((file: File) => {
        return VALID_TYPES.some((prefix) => file.type.startsWith(prefix));
    }, []);

    // Extract extension safely
    const getExtension = useCallback((name: string) => {
        return name.split(".").pop()?.toLowerCase() || "";
    }, []);

    // Handle file drop
    const handleUpload = useCallback(
        (files: File[]) => {
            setIsHover(false);

            const validFiles = files.filter((file) => {
                const ok = isValidFile(file);
                if (!ok) {
                    NotifyUser({
                        type: "destructive",
                        title: `Unsupported file: ${file.name}`,
                    });
                }
                return ok;
            });

            if (validFiles.length === 0) return;

            const newActions: FileConverterAction[] = validFiles.map((file) => ({
                file_name: file.name,
                file_size: file.size,
                from: getExtension(file.name),
                to: null,
                file_type: file.type,
                file,
                is_converted: false,
                is_converting: false,
                is_error: false,
            }));

            addActions(newActions);
        },
        [addActions, getExtension, isValidFile]
    );

    // Hover handlers
    const handleHover = useCallback(() => setIsHover(true), []);
    const handleExitHover = useCallback(() => setIsHover(false), []);

    return useMemo(
        () => ({
            isHover,
            handleHover,
            handleExitHover,
            handleUpload,
        }),
        [isHover, handleHover, handleExitHover, handleUpload]
    );
}
