/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef, useState } from "react";
import { QRCode } from "react-qrcode-logo";
import QRCodeSettings from "@/components/qr-code-generator/qr-code-settings";
import EMAIL from "@/components/qr-code-generator/forms/email";
// import URL from "@/components/qr-code-generator/forms/url";
// import SMS from "@/components/qr-code-generator/forms/sms";
// import WIFI from "@/components/qr-code-generator/forms/wifi";
// import PLAINTEXT from "@/components/qr-code-generator/forms/plainText";
// import LOCATION from "@/components/qr-code-generator/forms/location";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";

const types = [
    "app link",
    "contact card",
    "email",
    "event",
    "geolocation",
    "payment link",
    "phone number",
    "plain text",
    "product info",
    "sms",
    "survey link",
    "url",
    "wi-fi",
];

export default function QRCodeGenerator() {
    const ref = useRef<QRCode>(null);
    // set the type to render the correct form
    const [type, setType] = useState("email");
    // set the data to bu used in the qr code
    const [qrcodeValue, setQrCodeValue] = useState("");
    // set the props to be used in the qr code settings
    const [qrProps, setQrProps] = useState<{ [key: string]: any }>({
        logoOpacity: "0.5",
        enableCORS: true,
        ecLevel: "Q",
    });

    const handleChange = ({ target }: any) => {
        setQrProps((prev) => ({ ...prev, [target.name]: target.value }));
    };

    const handleDownload = () => {
        ref.current?.download();
    };

    return (
        <section className="relative flex md:flex-row-reverse! items-start! gap-10 px-5">
            <section className="md:sticky md:top-20 md:left-0 h-80 md:h-115 w-full max-w-xl mx-auto flex flex-col gap-2 justify-center items-center">
                <QRCode
                    ref={ref}
                    value={qrcodeValue}
                    {...{
                        ...qrProps,
                        eyeRadius: [
                            // build eyeRadius manually
                            {
                                outer: [
                                    qrProps.eyeradius_0_outer_0,
                                    qrProps.eyeradius_0_outer_1,
                                    qrProps.eyeradius_0_outer_2,
                                    qrProps.eyeradius_0_outer_3,
                                ],
                                inner: [
                                    qrProps.eyeradius_0_inner_0,
                                    qrProps.eyeradius_0_inner_1,
                                    qrProps.eyeradius_0_inner_2,
                                    qrProps.eyeradius_0_inner_3,
                                ],
                            },
                            {
                                outer: [
                                    qrProps.eyeradius_1_outer_0,
                                    qrProps.eyeradius_1_outer_1,
                                    qrProps.eyeradius_1_outer_2,
                                    qrProps.eyeradius_1_outer_3,
                                ],
                                inner: [
                                    qrProps.eyeradius_1_inner_0,
                                    qrProps.eyeradius_1_inner_1,
                                    qrProps.eyeradius_1_inner_2,
                                    qrProps.eyeradius_1_inner_3,
                                ],
                            },
                            {
                                outer: [
                                    qrProps.eyeradius_2_outer_0,
                                    qrProps.eyeradius_2_outer_1,
                                    qrProps.eyeradius_2_outer_2,
                                    qrProps.eyeradius_2_outer_3,
                                ],
                                inner: [
                                    qrProps.eyeradius_2_inner_0,
                                    qrProps.eyeradius_2_inner_1,
                                    qrProps.eyeradius_2_inner_2,
                                    qrProps.eyeradius_2_inner_3,
                                ],
                            },
                        ],
                        eyeColor: [
                            // build eyeColor manually
                            {
                                outer: qrProps.eyecolor_0_outer ?? qrProps.fgColor ?? "#000000",
                                inner: qrProps.eyecolor_0_inner ?? qrProps.fgColor ?? "#000000",
                            },
                            {
                                outer: qrProps.eyecolor_1_outer ?? qrProps.fgColor ?? "#000000",
                                inner: qrProps.eyecolor_1_inner ?? qrProps.fgColor ?? "#000000",
                            },
                            {
                                outer: qrProps.eyecolor_2_outer ?? qrProps.fgColor ?? "#000000",
                                inner: qrProps.eyecolor_2_inner ?? qrProps.fgColor ?? "#000000",
                            },
                        ],
                    }}
                />
                <Button type="button" onClick={handleDownload}>
                    Download QR Code
                </Button>
            </section>
            <section className="w-full max-w-lg mx-auto h-fit space-y-10">
                <div className="space-y-5">
                    <h2 className="mb-2.5 text-primary">Step 1 - Select a QR Code type</h2>
                    <Select
                        value={type}
                        defaultValue={type}
                        onValueChange={(value) => setType(value.toUpperCase())}
                    >
                        <SelectTrigger className="w-full capitalize bg-transparent! focus-visible:ring-ring/15!">
                            <SelectValue placeholder="Select a type">{type}</SelectValue>
                        </SelectTrigger>
                        <SelectContent className="z-50 bg-background">
                            {types.map((type, i) => (
                                <SelectItem
                                    key={i}
                                    value={type.toLowerCase()}
                                    className="cursor-pointer capitalize"
                                >
                                    {type}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-5">
                    <p className="mb-2.5 text-primary">Step 2 - Fill in the details</p>
                    <section>
                        {/* RUN A CHECK TO RENDER EACH FORM BASED ON TYPE, ALSO PASS ON THE SET VALUE FUNCTION */}
                        {/* {type === "URL" ? <URL setQrCodeValue={setQrCodeValue} /> : null} */}
                        {type === "email" ? <EMAIL setQrCodeValue={setQrCodeValue} /> : null}
                        {/* {type === "SMS" ? <SMS setQrCodeValue={setQrCodeValue} /> : null}
                                        {type === "PLAIN TEXT" ? <PLAINTEXT setQrCodeValue={setQrCodeValue} /> : null}
                                        {type === "WI-FI" ? <WIFI setQrCodeValue={setQrCodeValue} /> : null}
                                        {type === "LOCATION" ? <LOCATION setQrCodeValue={setQrCodeValue} /> : null} */}
                    </section>
                </div>
                <div className="space-y-5">
                    <p className="mb-2.5 text-primary">Step 3 - Create a Custom Design</p>
                    <QRCodeSettings qrProps={qrProps} handleChange={handleChange} />
                </div>
            </section>
        </section>
    );
}
