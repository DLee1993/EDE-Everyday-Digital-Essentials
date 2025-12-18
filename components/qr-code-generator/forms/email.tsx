import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { generateQRString, handleChange } from "@/lib/qr-code-generator/generateQR";
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
                <fieldset datatype="input" className="relative flex-1">
                    <Input
                        name="Address"
                        id="Address"
                        onChange={handleChange(setEmailData)}
                        className="formField peer"
                        autoComplete="true"
                        placeholder=" "
                    />
                    <Label htmlFor="Address">Email Address</Label>
                </fieldset>
                <fieldset datatype="input" className="relative flex-1">
                    <Input
                        name="Subject"
                        id="Subject"
                        onChange={handleChange(setEmailData)}
                        className="formField peer"
                        autoComplete="true"
                        placeholder=" "
                    />
                    <Label htmlFor="Subject">Subject</Label>
                </fieldset>
            </div>
            <fieldset datatype="textarea" className="relative">
                <Textarea
                    name="Body"
                    id="Body"
                    onChange={handleChange(setEmailData)}
                    className="formField peer resize-none h-32"
                    autoComplete="true"
                    placeholder=" "
                />
                <Label htmlFor="Body">Message</Label>
            </fieldset>
            <Button variant="outline" onClick={ProcessData}>
                Generate QR Code
            </Button>
        </div>
    );
}
