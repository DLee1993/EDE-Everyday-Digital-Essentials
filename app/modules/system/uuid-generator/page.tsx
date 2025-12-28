"use client";

import { useUuidOptions } from "@/hooks/uuid-generator/useUuidOptions";
import { useUuidGenerator } from "@/hooks/uuid-generator/useUuidGenerator";

import { UuidOptions } from "@/components/uuid-generator/Options";
import { UuidActions } from "@/components/uuid-generator/Actions";
import { UuidTable } from "@/components/uuid-generator/Table";
import { Copy, CopyAll } from "@/lib/global/copy-to-clipboard";

export default function UUIDGeneratorPage() {
    const options = useUuidOptions();
    const generator = useUuidGenerator(options);

    return (
        <section className="space-y-10">
            <UuidOptions {...options} />

            <div className="w-full max-w-4xl bg-border h-px"></div>

            <div className="w-full max-w-4xl space-y-5">
                <UuidActions
                    generate={generator.generate}
                    uuids={generator.uuids}
                    deleteAll={generator.deleteAll}
                    downloadAll={generator.downloadAll}
                    downloadJson={generator.downloadJson}
                    copyAll={() => CopyAll({ inputs: generator.uuids.map((u) => u.full) })}
                />

                <UuidTable
                    uuids={generator.uuids}
                    regenerateOne={generator.regenerateOne}
                    deleteOne={generator.deleteOne}
                    copyOne={(id: string) => Copy({ input: id })}
                />
            </div>
        </section>
    );
}
