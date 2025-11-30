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
    Timer
} from "lucide-react";

//! DO NOT REMOVE
export const rawSidebarItems = [
    {
        title: "Conversion",
        items: [
            {
                title: "Calculator",
                url: "/tools/calculator",
                icon: Calculator,
                description: "Perform basic arithmetic and conversion calculations.",
            },
            {
                title: "File Converter",
                url: "/tools/file-converter",
                icon: Combine,
                description: "Convert files between different formats.",
            },
            {
                title: "Unit Converter",
                url: "/tools/unit-converter",
                icon: ArrowLeftRight,
                description: "Convert units of measurement.",
            },
            {
                title: "Currency Converter",
                url: "/tools/currency-converter",
                icon: DollarSign,
                description: "Convert currencies.",
            },
            {
                title: "Color Converter",
                url: "/tools/color-converter",
                icon: Palette,
                description: "Convert between HEX, RGB, HSL, and OKLCH color formats.",
            },
        ],
    },
    {
        title: "Productivity",
        items: [
            {
                title: "Lorem Ipsum Generator",
                url: "/tools/lorem-ipsum-generator",
                icon: Text,
                description: "Generate placeholder text for your designs and projects.",
            },
            {
                title: "Focus Timer",
                url: "/tools/focus-timer",
                icon: Timer,
                description: "Stay focused and manage your time effectively.",
            },
            {
                title: "World Clock",
                url: "/tools/world-clock",
                icon: Clock,
                description: "Check what time it is, anywhere in the world.",
            },
            {
                title: "Notepad",
                url: "/tools/notepad",
                icon: Notebook,
                description: "Write and save notes easily.",
            },
            {
                title: "Calendar",
                url: "/tools/calendar",
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
                url: "/tools/credentials-generator",
                icon: Key,
                description: "Generate strong and secure credentials.",
            },
            {
                title: "Test Credentials",
                url: "/tools/credentials-tester",
                icon: Shield,
                description: "Check the strength of your passwords and credentials.",
            },
            {
                title: "Hash Generator",
                url: "/tools/hash-generator",
                icon: Hash,
                description: "Generate hashes for your data.",
            },
            {
                title: "JWT Decoder",
                url: "/tools/jwt-decoder",
                icon: LockOpen,
                description: "Decode and inspect JSON Web Tokens securely.",
            },
            {
                title: "Encryption Sandbox",
                url: "/tools/encryption-sandbox",
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
                url: "/tools/regex-tester",
                icon: ALargeSmall,
                description: "Test and debug regular expressions with ease.",
            },
            {
                title: "Markdown Previewer",
                url: "/tools/markdown-previewer",
                icon: FileText,
                description: "Live preview and syntax highlighting for Markdown content.",
            },
            {
                title: "JSON Formatter & Validator",
                url: "/tools/json-formatter",
                icon: Braces,
                description: "Beautify, validate, and debug JSON structures.",
            },
        ],
    },
    {
        title: "Utilities",
        items: [
            {
                title: "Base64 Encoder/Decoder",
                url: "/tools/base64-encoder-decoder",
                icon: Code2,
                description: "Encode or decode Base64 strings and files.",
            },
            {
                title: "UUID Generator",
                url: "/tools/uuid-generator",
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
                url: "/tools/link-in-bio-creator",
                icon: Network,
                description: "Create a personalized landing page for your links.",
            },
            {
                title: "QR Code Generator",
                url: "/tools/qr-code-generator",
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
