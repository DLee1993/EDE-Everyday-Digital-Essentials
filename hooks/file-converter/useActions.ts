import { Action } from "@/types";
import { useCallback, useEffect, useMemo, useState } from "react";

export function useActions() {
    const [actions, setActions] = useState<Action[]>([]);
    const [isReady, setIsReady] = useState(false);
    const [isDone, setIsDone] = useState(false);
    const [isConverting, setIsConverting] = useState(false);

    // Add new actions (from uploader)
    const addActions = useCallback((newActions: Action[]) => {
        setActions((prev) => [...prev, ...newActions]);
    }, []);

    // Update a single action by file_name
    const updateAction = useCallback((fileName: string, patch: Partial<Action>) => {
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
