"use client";

import { useUuidOptions } from "@/hooks/uuid-generator/use-uuid-options";
import { useUuidGenerator } from "@/hooks/uuid-generator/use-uuid-generator";

import { UuidOptions } from "@/components/uuid-generator/options";
import { UuidActions } from "@/components/uuid-generator/actions";
import { UuidTable } from "@/components/uuid-generator/table";

export type UuidObject = {
    full: string;
    prefix: string;
    id: string;
    suffix: string;
};

export default function UUIDGeneratorPage() {
    const options = useUuidOptions();
    const generator = useUuidGenerator(options);

    return (
        <section className="space-y-10">
            <UuidOptions {...options} />

            <div className="w-full max-w-4xl bg-border h-px"></div>

            <div className="w-full max-w-4xl space-y-5">
                <UuidActions
                    uuids={generator.uuids}
                    generate={generator.generate}
                    deleteAll={generator.deleteAll}
                    downloadAll={generator.downloadAll}
                />

                <UuidTable uuids={generator.uuids} regenerateOne={generator.regenerateOne} deleteOne={generator.deleteOne} />
            </div>
        </section>
    );
}
