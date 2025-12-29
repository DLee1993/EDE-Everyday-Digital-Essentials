import { useCallback, useEffect, useMemo, useState } from "react";

export type FileConverterAction = {
    file: File;
    file_name: string;
    file_size: number;
    from: string;
    to: string | null;
    file_type: string;
    is_converting?: boolean;
    is_converted?: boolean;
    is_error?: boolean;
    url?: string;
    output?: string;
};

export function useActions() {
    const [actions, setActions] = useState<FileConverterAction[]>([]);
    const [isReady, setIsReady] = useState(false);
    const [isDone, setIsDone] = useState(false);
    const [isConverting, setIsConverting] = useState(false);

    // Add new actions (from uploader)
    const addActions = useCallback((newActions: FileConverterAction[]) => {
        setActions((prev) => [...prev, ...newActions]);
    }, []);

    // Update a single action by file_name
    const updateAction = useCallback((fileName: string, patch: Partial<FileConverterAction>) => {
        setActions((prev) => prev.map((a) => (a.file_name === fileName ? { ...a, ...patch } : a)));
    }, []);

    // Delete an action (by file_name, not object identity)
    const deleteAction = useCallback((fileName: string) => {
        setActions((prev) => prev.filter((a) => a.file_name !== fileName));
    }, []);

    // Reset everything
    const reset = useCallback(() => {
        setActions([]);
        setIsReady(false);
        setIsDone(false);
        setIsConverting(false);
    }, []);

    // Compute readiness (all actions must have a "to" value)
    const computeReady = useCallback(() => {
        if (!actions.length) {
            setIsReady(false);
            return;
        }
        setIsReady(actions.every((a) => !!a.to));
    }, [actions]);

    // Recompute readiness whenever actions change (but not while converting)
    useEffect(() => {
        if (!actions.length) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsDone(false);
            setIsReady(false);
            setIsConverting(false);
            return;
        }

        if (!isConverting) {
            computeReady();
        }
    }, [actions, computeReady, isConverting]);

    return useMemo(
        () => ({
            actions,
            isReady,
            isDone,
            isConverting,

            addActions,
            updateAction,
            deleteAction,
            reset,
            computeReady,

            setIsDone,
            setIsConverting,
        }),
        [
            actions,
            isReady,
            isDone,
            isConverting,
            addActions,
            updateAction,
            deleteAction,
            reset,
            computeReady,
        ]
    );
}
