import {
    Key,
    Combine,
    Clock,
    Notebook,
    Network,
    ArrowLeftRight,
    QrCode,
    Calculator,
    Text,
    Calendar,
    ALargeSmall,
    Shield,
    Hash,
    Palette,
    LockOpen,
    FileText,
    Braces,
    Code2,
    Barcode,
    Lock,
    DollarSign,
    Timer,
} from "lucide-react";

//! DO NOT REMOVE
export const rawSidebarItems = [
    {
        title: "Conversion",
        items: [
            {
                title: "Calculator",
                url: "/modules/conversion/calculator",
                icon: Calculator,
                description: "Perform basic arithmetic and conversion calculations.",
            },
            {
                title: "File Converter",
                url: "/modules/conversion/file-converter",
                icon: Combine,
                description: "Convert files between different formats.",
            },
            {
                title: "Unit Converter",
                url: "/modules/conversion/unit-converter",
                icon: ArrowLeftRight,
                description: "Convert units of measurement.",
            },
            {
                title: "Currency Converter",
                url: "/modules/conversion/currency-converter",
                icon: DollarSign,
                description: "Convert currencies.",
            },
            {
                title: "Color Converter",
                url: "/modules/conversion/color-converter",
                icon: Palette,
                description: "Convert between HEX, RGB, HSL, and OKLCH color formats.",
            },
        ],
    },
    {
        title: "Productivity",
        items: [
            {
                title: "Lorem Ipsum",
                url: "/modules/productivity/lorem-ipsum-generator",
                icon: Text,
                description: "Generate placeholder text for your designs and projects.",
            },
            {
                title: "Focus Timer",
                url: "/modules/productivity/focus-timer",
                icon: Timer,
                description: "Stay focused and manage your time effectively.",
            },
            {
                title: "World Clock",
                url: "/modules/productivity/world-clock",
                icon: Clock,
                description: "Check what time it is, anywhere in the world.",
            },
            {
                title: "Notepad",
                url: "/modules/productivity/notepad",
                icon: Notebook,
                description: "Write and save notes easily.",
            },
            {
                title: "Calendar",
                url: "/modules/productivity/calendar",
                icon: Calendar,
                description: "View dates and manage your schedule.",
            },
        ],
    },
    {
        title: "Security",
        items: [
            {
                title: "Generate Credentials",
                url: "/modules/security/credentials-generator",
                icon: Key,
                description: "Generate strong and secure credentials.",
            },
            {
                title: "Test Credentials",
                url: "/modules/security/credentials-tester",
                icon: Shield,
                description: "Check the strength of your passwords and credentials.",
            },
            {
                title: "Hash Generator",
                url: "/modules/security/hash-generator",
                icon: Hash,
                description: "Generate hashes for your data.",
            },
            {
                title: "JWT Decoder",
                url: "/modules/security/jwt-decoder",
                icon: LockOpen,
                description: "Decode and inspect JSON Web Tokens securely.",
            },
            {
                title: "Encryption Sandbox",
                url: "/modules/security/encryption-sandbox",
                icon: Lock,
                description: "Experiment with encryption algorithms and sample inputs.",
            },
        ],
    },
    {
        title: "Developer Tools",
        items: [
            {
                title: "Regex Tester",
                url: "/modules/developer-tools/regex-tester",
                icon: ALargeSmall,
                description: "Test and debug regular expressions with ease.",
            },
            {
                title: "Markdown Previewer",
                url: "/modules/developer-tools/markdown-previewer",
                icon: FileText,
                description: "Live preview and syntax highlighting for Markdown content.",
            },
            {
                title: "JSON Tools",
                url: "/modules/developer-tools/json-formatter",
                icon: Braces,
                description: "Beautify, validate, and debug JSON structures.",
            },
        ],
    },
    {
        title: "Utilities",
        items: [
            {
                title: "Base64 Tools",
                url: "/modules/utilities/base64-encoder-decoder",
                icon: Code2,
                description: "Encode or decode Base64 strings and files.",
            },
            {
                title: "UUID Generator",
                url: "/modules/utilities/uuid-generator",
                icon: Barcode,
                description: "Generate UUIDs for sessions, databases, and more.",
            },
        ],
    },
    {
        title: "Sharing Tools",
        items: [
            {
                title: "Link in Bio Creator",
                url: "/modules/sharing-tools/link-in-bio-creator",
                icon: Network,
                description: "Create a personalized landing page for your links.",
            },
            {
                title: "QR Code Generator",
                url: "/modules/sharing-tools/qr-code-generator",
                icon: QrCode,
                description: "Generate QR codes for any URL.",
            },
        ],
    },
];

function sortSidebarItems(items: typeof rawSidebarItems) {
    return items
        .map((category) => ({
            ...category,
            items: category.items.sort((a, b) => a.title.localeCompare(b.title)),
        }))
        .sort((a, b) => a.title.localeCompare(b.title));
}

export const sidebarItems = sortSidebarItems(rawSidebarItems);
