import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction, useState } from "react";
import { GenerateQrCode } from "@/lib/qr-code-generator/generate-qr";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function URL({ setValue }: { setValue: Dispatch<SetStateAction<string>> }) {
    const [url, setUrl] = useState("");

    function ProcessData({ type }: { type: string }) {
        const qrValue = GenerateQrCode({ value: { url }, type });

        setValue(qrValue as string);
    }

    return (
        <div className="space-y-5">
            <fieldset className="relative">
                <Input
                    name="url"
                    id="url"
                    onChange={(e) => setUrl(e.target.value)}
                    className="formField peer"
                    autoComplete="true"
                    placeholder=" "
                />
                <Label
                    htmlFor="url"
                    className={`pointer-events-none absolute text-xs duration-300 transition-[transform, scale] bg-background -translate-y-4 scale-75 top-2 z-10 origin-left px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
                    peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-primary rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
                >
                    Add a url to any external sources
                </Label>
            </fieldset>
            <Button onClick={() => ProcessData({ type: "url" })}>Generate QR Code</Button>
        </div>
    );
}
