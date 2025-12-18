import { Dispatch, SetStateAction } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EMAIL from "@/components/qr-code-generator/forms/email";
// import URL from "@/components/qr-code-generator/forms/url";
// import SMS from "@/components/qr-code-generator/forms/sms";
// import WIFI from "@/components/qr-code-generator/forms/wifi";
// import PLAINTEXT from "@/components/qr-code-generator/forms/plainText";
// import LOCATION from "@/components/qr-code-generator/forms/location";

export default function QRCodeTypes({ setValue }: { setValue: Dispatch<SetStateAction<string>> }) {
    const types = [
        "APP LINK",
        "CONTACT CARD",
        "EMAIL",
        "EVENT",
        "GEOLOCATION",
        "PAYMENT LINK",
        "PHONE NUMBER",
        "PLAIN TEXT",
        "PRODUCT INFO",
        "SMS",
        "SURVEY LINK",
        "URL",
        "WI-FI",
    ];

    return (
        <TabsContent value="Type">
            <Tabs defaultValue="url">
                <TabsList className="w-full h-fit flex flex-wrap gap-2 justify-start bg-transparent">
                    {types.map((type, i) => (
                        <TabsTrigger
                            key={i}
                            value={type.toLowerCase()}
                            className="py-2 px-4 text-xs data-[state=active]:bg-muted cursor-pointer outline outline-primary/25"
                        >
                            {type}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {types.map((type, i) => (
                    <TabsContent key={i} value={type.toLowerCase()} className="py-5 [&_input]:h-12">
                        {/* RUN A CHECK TO RENDER EACH FORM BASED ON TYPE, ALSO PASS ON THE SET VALUE FUNCTION */}
                        {/* {type === "URL" ? <URL setValue={setValue} /> : null} */}
                        {type === "EMAIL" ? <EMAIL setValue={setValue} /> : null}
                        {/* {type === "SMS" ? <SMS setValue={setValue} /> : null}
                        {type === "PLAIN TEXT" ? <PLAINTEXT setValue={setValue} /> : null}
                        {type === "WI-FI" ? <WIFI setValue={setValue} /> : null}
                        {type === "LOCATION" ? <LOCATION setValue={setValue} /> : null} */}
                    </TabsContent>
                ))}
            </Tabs>
        </TabsContent>
    );
}
