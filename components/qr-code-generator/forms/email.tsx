import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { generateQRString, handleChange } from "@/lib/qr-code-generator/generate-qr";
import { Dispatch, SetStateAction, useState } from "react";

export default function EMAIL({
    setQrCodeValue,
}: {
    setQrCodeValue: Dispatch<SetStateAction<string>>;
}) {
    const [emailData, setEmailData] = useState({});

    const ProcessData = () => {
        const value = generateQRString("EMAIL", emailData);
        setQrCodeValue(value);
    };

    return (
        <div className="space-y-5">
            <div className="flex justify-between gap-2">
                <fieldset className="flex-1 flex flex-col gap-2">
                    <Label htmlFor="Address">Email Address</Label>
                    <Input
                        name="Address"
                        id="Address"
                        onChange={handleChange(setEmailData)}
                        autoComplete="true"
                        placeholder="johndoe@gmail.com"
                    />
                </fieldset>
                <fieldset className="flex-1 flex flex-col gap-2">
                    <Label htmlFor="Subject">Subject</Label>
                    <Input
                        name="Subject"
                        id="Subject"
                        onChange={handleChange(setEmailData)}
                        autoComplete="true"
                        placeholder="Welcome to my shop"
                    />
                </fieldset>
            </div>
            <fieldset className="flex flex-col gap-2">
                <Label htmlFor="Body">Message</Label>
                <Textarea
                    name="Body"
                    id="Body"
                    onChange={handleChange(setEmailData)}
                    className="resize-none h-32"
                    autoComplete="true"
                    placeholder="Special offer - 50% off"
                />
            </fieldset>
            <Button variant="outline" onClick={ProcessData}>
                Generate QR Code
            </Button>
        </div>
    );
}
