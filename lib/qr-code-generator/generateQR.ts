export const handleChange =
    (setState: React.Dispatch<React.SetStateAction<Record<string, string>>>) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setState((prev) => ({ ...prev, [name]: value }));
    };

export const generateQRString = (type: string, data: Record<string, string>): string => {
    switch (type.toUpperCase()) {
        case "URL":
            return data.url || "";

        case "EMAIL":
            const { Address, Subject, Body } = data;

            const qrString = `MATMSG:TO:${Address};SUB:${Subject};BODY:${Body};;`;

            return qrString;

        case "PHONE NUMBER":
            return `tel:${data.phone}`;

        case "SMS":
            return `sms:${data.phone}?body=${encodeURIComponent(data.message || "")}`;

        case "WI-FI CREDENTIALS":
            return `WIFI:T:${data.encryption};S:${data.ssid};P:${data.password};;`;

        case "GEOLOCATION":
            return `geo:${data.latitude},${data.longitude}`;

        case "EVENT":
            return `BEGIN:VEVENT\nSUMMARY:${data.summary}\nDTSTART:${data.start}\nDTEND:${data.end}\nLOCATION:${data.location}\nDESCRIPTION:${data.description}\nEND:VEVENT`;

        case "CONTACT CARD":
            return `BEGIN:VCARD\nVERSION:3.0\nFN:${data.name}\nORG:${data.org}\nTEL:${data.phone}\nEMAIL:${data.email}\nEND:VCARD`;

        case "APP LINK":
            return data.link || "";

        case "PRODUCT INFO":
            return data.productUrl || "";

        case "SURVEY LINK":
            return data.surveyUrl || "";

        case "PAYMENT LINK":
            return data.paymentUrl || "";

        case "PLAIN TEXT":
            return data.text || "";

        default:
            return "";
    }
};
