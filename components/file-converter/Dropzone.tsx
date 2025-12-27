"use client";

import ReactDropzone from "react-dropzone";
import { UploadCloud, Send } from "lucide-react";

interface ConverterDropzoneProps {
    isHover: boolean;
    onHover: () => void;
    onExitHover: () => void;
    onUpload: (files: File[]) => void;
}

export default function ConverterDropzone({
    isHover,
    onHover,
    onExitHover,
    onUpload,
}: ConverterDropzoneProps) {
    return (
        <ReactDropzone
            onDrop={onUpload}
            onDragEnter={onHover}
            onDragLeave={onExitHover}
            onError={onExitHover}
            onDropRejected={onExitHover}
            accept={{
                "image/*": [],
                "video/*": [],
                "audio/*": [],
            }}
        >
            {({ getRootProps, getInputProps }) => (
                <div
                    {...getRootProps()}
                    className="h-full min-h-52 w-full flex flex-1 lg:max-w-sm justify-center items-center cursor-pointer border-[1.5px] border-dashed border-border rounded-sm"
                >
                    <input {...getInputProps()} />

                    <article className="h-full flex flex-col justify-evenly items-center">
                        {isHover ? (
                            <div className="flex flex-col items-center gap-2">
                                <Send className="text-2xl" />
                                <h3>Send it</h3>
                            </div>
                        ) : (
                            <div className="space-y-2 flex flex-col justify-center items-center text-center">
                                <h1 className="text-sm flex flex-col justify-center items-center gap-5">
                                    <UploadCloud size={40} />
                                    Drop your files here to start
                                </h1>
                            </div>
                        )}
                    </article>
                </div>
            )}
        </ReactDropzone>
    );
}