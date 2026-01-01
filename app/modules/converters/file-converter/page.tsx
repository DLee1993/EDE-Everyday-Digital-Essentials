"use client";
import NoSSRWrapper from "@/app/no-ssr-wrapper";

import { useActions } from "@/hooks/file-converter/use-actions";
import { useUploader } from "@/hooks/file-converter/use-uploader";
import { useFFmpeg } from "@/hooks/file-converter/use-ffmpeg";
import ConverterDropzone from "@/components/file-converter/dropzone";
import ConverterToolbar from "@/components/file-converter/toolbar";
import ConverterTable from "@/components/file-converter/table";
import { DownloadBlobUrlFile } from "@/lib/global/download";

export default function Converter() {
    const actions = useActions();
    const uploader = useUploader(actions.addActions);
    const ffmpeg = useFFmpeg();

    const pageIndex = 0;
    const pageCount = Math.ceil(actions.actions.length / 5);
    const canPrev = pageIndex > 0;
    const canNext = pageIndex + 1 < pageCount;

    return (
        <section className="flex! flex-col! md:flex-row! gap-5 h-full">
            {/* Dropzone */}
            <NoSSRWrapper>
                <ConverterDropzone
                    isHover={uploader.isHover}
                    onHover={uploader.handleHover}
                    onExitHover={uploader.handleExitHover}
                    onUpload={uploader.handleUpload}
                />
            </NoSSRWrapper>

            {/* Right side */}
            <div className="w-full h-full flex-1 space-y-5">
                <ConverterToolbar
                    isReady={actions.isReady}
                    isDone={actions.isDone}
                    isConverting={actions.isConverting}
                    onConvert={() =>
                        ffmpeg
                            .convertMany(actions.actions, actions.updateAction)
                            .then(() => actions.setIsDone(true))
                    }
                    onDownloadAll={() => {
                        actions.actions.forEach((a) => {
                            if (a.is_converted && a.url) {
                                DownloadBlobUrlFile(a.url, a.output || a.file_name);
                            }
                        });
                    }}
                    onClear={actions.reset}
                    pageIndex={pageIndex}
                    pageCount={pageCount}
                    canPrev={canPrev}
                    canNext={canNext}
                    onPrev={() => {}}
                    onNext={() => {}}
                />

                <ConverterTable
                    actions={actions.actions}
                    updateAction={actions.updateAction}
                    deleteAction={actions.deleteAction}
                />
            </div>
        </section>
    );
}
