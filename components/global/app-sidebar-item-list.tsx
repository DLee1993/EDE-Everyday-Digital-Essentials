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
    Contact,
    Link,
    Grid,
    Filter,
    Table,
    Image,
    Code,
    ToolCase,
    Paintbrush,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export type SidebarItem = {
    title: string;
    url: string;
    icon: LucideIcon;
    instructions?: string;
    searchTerms?: string[]; // ← THIS fixes the error
};

export type SidebarGroup = {
    title: string;
    items: SidebarItem[];
};

//! DO NOT REMOVE
export const rawSidebarItems: SidebarGroup[] = [
    {
        title: "Converters",
        items: [
            {
                title: "Calculator",
                url: "/modules/converters/calculator",
                icon: Calculator,
                instructions:
                    "Enter numbers and operators (+, -, ×, ÷) to quickly solve arithmetic or conversion problems.",
            },
            {
                title: "Files",
                url: "/modules/converters/file-converter",
                icon: Combine,
                instructions:
                    "Upload a file, choose the target format, and convert it instantly for download.",
            },
            {
                title: "Units",
                url: "/modules/converters/unit-converter",
                icon: ArrowLeftRight,
                instructions:
                    "Select a measurement type, input a value, and convert it into another unit.",
            },
            {
                title: "Currencies",
                url: "/modules/converters/currency-converter",
                icon: DollarSign,
                instructions:
                    "Enter an amount and pick currencies to see real-time conversion results.",
            },
            {
                title: "Colors",
                url: "/modules/converters/color-converter",
                icon: Palette,
                instructions:
                    "Paste or pick a color, then convert it between HEX, RGB, HSL, and OKLCH formats.",
            },
            {
                title: "Number Base",
                url: "/modules/converters/number-base-converter",
                icon: Hash,
                instructions:
                    "Type a number and instantly convert it between binary, decimal, octal, or hexadecimal bases.",
            },
            {
                title: "Text Case",
                url: "/modules/converters/text-case-converter",
                icon: Text,
                instructions:
                    "Paste text and switch its casing (uppercase, lowercase, title case, etc.) with one click.",
            },
            {
                title: "Date Format",
                url: "/modules/converters/date-format-converter",
                icon: Calendar,
                instructions:
                    "Enter a date and convert it between ISO format and human-readable styles.",
            },
            {
                title: "MIME Type Lookup",
                url: "/modules/converters/mime-type-lookup",
                icon: FileText,
                instructions: "Enter a file extension to instantly look up its MIME type.",
            },
        ],
    },
    {
        title: "Workspace",
        items: [
            {
                title: "Focus Timer",
                url: "/modules/workspace/focus-timer",
                icon: Timer,
                instructions:
                    "Set a work interval and break schedule to stay focused and manage time effectively.",
            },
            {
                title: "World Clock",
                url: "/modules/workspace/world-clock",
                icon: Clock,
                instructions:
                    "Search or select a city to check the current time anywhere in the world.",
            },
            {
                title: "Notepad",
                url: "/modules/workspace/notepad",
                icon: Notebook,
                instructions:
                    "Write, edit, and save notes directly in the browser for quick reference.",
            },
            {
                title: "Calendar",
                url: "/modules/workspace/calendar",
                icon: Calendar,
                instructions:
                    "Browse dates, add events, and manage your schedule in a simple calendar view.",
            },
            {
                title: "Stopwatch",
                url: "/modules/workspace/stopwatch",
                icon: Timer,
                instructions:
                    "Start, pause, and reset the stopwatch to track elapsed time with precision.",
            },
            {
                title: "Countdown Timer",
                url: "/modules/workspace/countdown-timer",
                icon: Timer,
                instructions:
                    "Set a duration and start the countdown to track deadlines or events.",
            },
            {
                title: "Word Counter",
                url: "/modules/workspace/word-counter",
                icon: Text,
                instructions:
                    "Paste text to count words, characters, and estimate reading time instantly.",
            },
        ],
    },
    {
        title: "Security",
        items: [
            {
                title: "Credentials Generator",
                url: "/modules/security/credentials-generator",
                icon: Key,
                instructions: "Select the type, choose your length. Click generate.",
            },
            {
                title: "Test Credentials",
                url: "/modules/security/credentials-tester",
                icon: Shield,
                instructions: "Enter a password or key to check its strength and security level.",
            },
            {
                title: "Hash Generator",
                url: "/modules/security/hash-generator",
                icon: Hash,
                instructions: "Paste data and generate hashes using algorithms like SHA or MD5.",
            },
            {
                title: "JWT Decoder",
                url: "/modules/security/jwt-decoder",
                icon: LockOpen,
                instructions: "Paste a JSON Web Token to decode and inspect its payload securely.",
            },
            {
                title: "Encryption Sandbox",
                url: "/modules/security/encryption-sandbox",
                icon: Lock,
                instructions:
                    "Experiment with encryption algorithms by entering sample inputs and viewing results.",
            },
            {
                title: "Metadata Stripper",
                url: "/modules/security/metadata-stripper",
                icon: FileText,
                instructions: "Upload an image to remove EXIF and metadata before sharing.",
            },
            {
                title: "HMAC Generator",
                url: "/modules/security/hmac-generator",
                icon: Key,
                instructions:
                    "Enter a message and secret key to generate HMAC signatures with chosen algorithms.",
            },
            {
                title: "PEM Inspector",
                url: "/modules/security/pem-inspector",
                icon: FileText,
                instructions:
                    "Upload or paste PEM-formatted keys/certificates to inspect and validate them.",
            },
            {
                title: "Argon2 Playground",
                url: "/modules/security/argon2-playground",
                icon: Lock,
                instructions:
                    "Adjust Argon2 parameters and test password hashing outputs interactively.",
            },
        ],
    },
    {
        title: "Development",
        items: [
            {
                title: "Lorem Ipsum",
                url: "/modules/development/lorem-ipsum-generator",
                icon: Text,
                instructions:
                    "Click generate to create placeholder text you can copy into designs or drafts.",
            },
            {
                title: "Regex Tester",
                url: "/modules/development/regex-tester",
                icon: ALargeSmall,
                instructions:
                    "Enter a regex pattern and sample text to test matches and debug expressions.",
            },
            {
                title: "Markdown Previewer",
                url: "/modules/development/markdown-previewer",
                icon: FileText,
                instructions:
                    "Type or paste Markdown to see a live preview with syntax highlighting.",
            },
            {
                title: "JSON Tools",
                url: "/modules/development/json-formatter",
                icon: Braces,
                instructions:
                    "Paste JSON to beautify, validate, and debug its structure instantly.",
            },
            {
                title: "Diff Tool",
                url: "/modules/development/diff-tool",
                icon: Code2,
                instructions: "Paste two texts or JSON files to compare and highlight differences.",
            },
            {
                title: "YAML to JSON",
                url: "/modules/development/yaml-json-converter",
                icon: Braces,
                instructions: "Paste YAML or JSON and convert it between formats with one click.",
            },
            {
                title: "HTML Formatter",
                url: "/modules/development/html-formatter",
                icon: FileText,
                instructions: "Paste HTML code to clean up and format it for readability.",
            },
            {
                title: "Git Ignore Generator",
                url: "/modules/development/gitignore-generator",
                icon: FileText,
                instructions: "Select your environment to generate a ready-to-use .gitignore file.",
            },
            {
                title: "Cron Helper",
                url: "/modules/development/cron-helper",
                icon: Clock,
                instructions:
                    "Build or paste a cron expression to understand its schedule instantly.",
            },
        ],
    },
    {
        title: "System",
        items: [
            {
                title: "Base64 Tools",
                url: "/modules/system/base64-encoder-decoder",
                icon: Code2,
                instructions: "Paste text or upload a file to encode or decode Base64.",
            },
            {
                title: "UUID Generator",
                url: "/modules/system/uuid-generator",
                icon: Barcode,
                instructions:
                    "Click generate to create unique UUIDs for sessions, databases, or projects.",
            },
            {
                title: "URL Encode / Decode",
                url: "/modules/system/url-encoder-decoder",
                icon: Code2,
                instructions:
                    "Paste a string to encode it for URLs or decode it back to plain text.",
            },
            {
                title: "Slug Generator",
                url: "/modules/system/slug-generator",
                icon: Text,
                instructions: "Enter text to generate a clean, URL-friendly slug automatically.",
            },
            {
                title: "Text Normalizer",
                url: "/modules/system/text-normalizer",
                icon: Text,
                instructions: "Paste text to clean, normalize, and standardize its formatting.",
            },
            {
                title: "JWT Encoder",
                url: "/modules/system/jwt-encoder",
                icon: LockOpen,
                instructions: "Enter payload and secret to encode a JSON Web Token securely.",
            },
            {
                title: "File Metadata Viewer",
                url: "/modules/system/file-metadata-viewer",
                icon: FileText,
                instructions: "Upload a file to inspect its metadata details.",
            },
            {
                title: "CSV Viewer",
                url: "/modules/system/csv-viewer",
                icon: Table,
                instructions: "Upload a CSV file to view it in a clean, sortable table.",
            },
            {
                title: "Data Cleaner",
                url: "/modules/system/data-cleaner",
                icon: Filter,
                instructions: "Paste or upload data to clean, normalize, and prepare it for reuse.",
            },
            {
                title: "Table Editor",
                url: "/modules/system/table-editor",
                icon: Grid,
                instructions:
                    "Upload or create a table to edit, sort, and export data directly in the browser.",
            },
        ],
    },
    {
        title: "Sharing",
        items: [
            {
                title: "Link in Bio Creator",
                url: "/modules/sharing/link-in-bio-creator",
                icon: Network,
                instructions: "Add your links to build a personalized landing page you can share.",
            },
            {
                title: "QR Code Generator",
                url: "/modules/sharing/qr-code-generator",
                icon: QrCode,
                instructions: "Paste a URL or text to generate a scannable QR code.",
            },
            {
                title: "URL Shortener",
                url: "/modules/sharing/url-shortener",
                icon: Link,
                instructions: "Paste a long URL to shorten it for easier sharing.",
            },
            {
                title: "vCard Generator",
                url: "/modules/sharing/vcard-generator",
                icon: Contact,
                instructions: "Enter your details to generate a digital business card (vCard).",
            },
            {
                title: "OpenGraph Preview",
                url: "/modules/sharing/opengraph-preview",
                icon: Image,
                instructions: "Paste a link to preview how it will appear on social media.",
            },
            {
                title: "Social Image",
                url: "/modules/sharing/social-image-generator",
                icon: Image,
                instructions:
                    "Enter text and choose a style to create shareable images for social platforms.",
            },
        ],
    },
    {
        title: "Reference",
        items: [
            {
                title: "Web Development",
                url: "/modules/reference/web-development",
                icon: Code,
                instructions: "Reference for HTML, CSS, JavaScript, etc.",
                searchTerms: ["html", "css", "javascript", "js", "frontend", "dev"],
            },
            {
                title: "Developer tools",
                url: "/modules/reference/dev-tools",
                icon: ToolCase,
                instructions: "Reference for Git, Markdown, etc.",
                searchTerms: ["git", "markdown", "cli", "tools", "dev"],
            },
            {
                title: "Design",
                url: "/modules/reference/design",
                icon: Paintbrush,
                instructions: "Reference for color theory, typography, etc.",
                searchTerms: ["color", "color theory", "typography", "ui", "ux", "dev", "designer"],
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
