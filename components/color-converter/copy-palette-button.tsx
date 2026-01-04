"use client";

import { Button } from "@/components/ui/button";
import { Copy } from "@/lib/global/copy-to-clipboard";

interface Props {
    colors: { label: string; hex: string }[];
}

export function CopyPaletteButton({ colors }: Props) {
    const formatted = colors.map((c) => `${c.label}: ${c.hex}`).join("\n");

    return (
        <Button variant="ghost" size="sm" onClick={() => Copy({ input: formatted })}>
            Copy All
        </Button>
    );
}
