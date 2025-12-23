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
} from "lucide-react";

//! DO NOT REMOVE
export const rawSidebarItems = [
    {
        title: "Converters",
        items: [
            {
                title: "Calculator",
                url: "/modules/conversion/calculator",
                icon: Calculator,
                description: "Perform basic arithmetic and conversion calculations.",
            },
            {
                title: "Files",
                url: "/modules/conversion/file-converter",
                icon: Combine,
                description: "Convert files between different formats.",
            },
            {
                title: "Units",
                url: "/modules/conversion/unit-converter",
                icon: ArrowLeftRight,
                description: "Convert units of measurement.",
            },
            {
                title: "Currencies",
                url: "/modules/conversion/currency-converter",
                icon: DollarSign,
                description: "Convert currencies.",
            },
            {
                title: "Colors",
                url: "/modules/conversion/color-converter",
                icon: Palette,
                description: "Convert between HEX, RGB, HSL, and OKLCH color formats.",
            },
            {
                title: "Number Base",
                url: "/modules/conversion/number-base-converter",
                icon: Hash,
                description: "Convert between binary, decimal, octal, and hexadecimal.",
            },
            {
                title: "Text Case",
                url: "/modules/conversion/text-case-converter",
                icon: Text,
                description: "Convert text between different casing formats.",
            },
            {
                title: "Date Format",
                url: "/modules/conversion/date-format-converter",
                icon: Calendar,
                description: "Convert dates between ISO and human-readable formats.",
            },
            {
                title: "MIME Type Lookup",
                url: "/modules/conversion/mime-type-lookup",
                icon: FileText,
                description: "Look up MIME types for file extensions.",
            },
        ],
    },

    {
        title: "Workspace",
        items: [
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
            {
                title: "Stopwatch",
                url: "/modules/productivity/stopwatch",
                icon: Timer,
                description: "Track elapsed time with precision.",
            },
            {
                title: "Countdown Timer",
                url: "/modules/productivity/countdown-timer",
                icon: Timer,
                description: "Set a countdown for tasks and events.",
            },
            {
                title: "Word Counter",
                url: "/modules/productivity/word-counter",
                icon: Text,
                description: "Count words, characters, and reading time.",
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
            {
                title: "Metadata Stripper",
                url: "/modules/security/metadata-stripper",
                icon: FileText,
                description: "Remove EXIF and metadata from images.",
            },
            {
                title: "HMAC Generator",
                url: "/modules/security/hmac-generator",
                icon: Key,
                description: "Generate HMAC signatures using various algorithms.",
            },
            {
                title: "PEM Inspector",
                url: "/modules/security/pem-inspector",
                icon: FileText,
                description: "Inspect and validate PEM-formatted keys and certificates.",
            },
            {
                title: "Argon2 Playground",
                url: "/modules/security/argon2-playground",
                icon: Lock,
                description: "Experiment with Argon2 password hashing parameters.",
            },
        ],
    },

    {
        title: "Development",
        items: [
            {
                title: "Lorem Ipsum",
                url: "/modules/productivity/lorem-ipsum-generator",
                icon: Text,
                description: "Generate placeholder text for your designs and projects.",
            },
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
            {
                title: "Diff Tool",
                url: "/modules/developer-tools/diff-tool",
                icon: Code2,
                description: "Compare and highlight differences between text or JSON.",
            },
            {
                title: "YAML to JSON",
                url: "/modules/developer-tools/yaml-json-converter",
                icon: Braces,
                description: "Convert between YAML and JSON formats.",
            },
            {
                title: "HTML Formatter",
                url: "/modules/developer-tools/html-formatter",
                icon: FileText,
                description: "Beautify and format HTML code.",
            },
            {
                title: "Git Ignore Generator",
                url: "/modules/developer-tools/gitignore-generator",
                icon: FileText,
                description: "Generate .gitignore files for common environments.",
            },
            {
                title: "Cron Helper",
                url: "/modules/developer-tools/cron-helper",
                icon: Clock,
                description: "Build and understand cron expressions.",
            },
        ],
    },
    {
        title: "System",
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
            {
                title: "URL Encode / Decode",
                url: "/modules/utilities/url-encoder-decoder",
                icon: Code2,
                description: "Encode or decode URL-safe strings.",
            },
            {
                title: "Slug Generator",
                url: "/modules/utilities/slug-generator",
                icon: Text,
                description: "Generate clean, URL-friendly slugs.",
            },
            {
                title: "Text Normalizer",
                url: "/modules/utilities/text-normalizer",
                icon: Text,
                description: "Clean and normalize text for consistent formatting.",
            },
            {
                title: "JWT Encoder",
                url: "/modules/utilities/jwt-encoder",
                icon: LockOpen,
                description: "Encode JSON Web Tokens securely.",
            },
            {
                title: "File Metadata Viewer",
                url: "/modules/utilities/file-metadata-viewer",
                icon: FileText,
                description: "Inspect metadata for uploaded files.",
            },
            {
                title: "CSV Viewer",
                url: "/modules/utilities/csv-viewer",
                icon: Table,
                description: "Upload and view CSV files in a clean, readable table.",
            },
            {
                title: "Data Cleaner",
                url: "/modules/utilities/data-cleaner",
                icon: Filter,
                description: "Clean, normalize, and prepare data for further use.",
            },
            {
                title: "Table Editor",
                url: "/modules/utilities/table-editor",
                icon: Grid,
                description: "Edit, sort, and export tabular data directly in the browser.",
            },
        ],
    },
    {
        title: "Sharing",
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
            {
                title: "URL Shortener",
                url: "/modules/sharing-tools/url-shortener",
                icon: Link,
                description: "Shorten long URLs for easy sharing.",
            },
            {
                title: "vCard Generator",
                url: "/modules/sharing-tools/vcard-generator",
                icon: Contact,
                description: "Generate digital business cards.",
            },
            {
                title: "OpenGraph Preview",
                url: "/modules/sharing-tools/opengraph-preview",
                icon: Image,
                description: "Preview how your link will appear on social media.",
            },
            {
                title: "Social Image",
                url: "/modules/sharing-tools/social-image-generator",
                icon: Image,
                description: "Create shareable images for social platforms.",
            },
        ],
    },

    {
        title: "Reference",
        items: [
            {
                title: "HTML",
                url: "/modules/cheat-sheets/html-cheat-sheet",
                icon: FileText,
                description: "HTML Cheat Sheet for quick reference.",
            },
            {
                title: "CSS",
                url: "/modules/cheat-sheets/css-cheat-sheet",
                icon: FileText,
                description: "CSS Cheat Sheet for quick reference.",
            },
            {
                title: "JavaScript",
                url: "/modules/cheat-sheets/js-cheat-sheet",
                icon: FileText,
                description: "JavaScript Cheat Sheet for quick reference.",
            },
            {
                title: "Git",
                url: "/modules/cheat-sheets/git-cheat-sheet",
                icon: FileText,
                description: "Git commands and workflows.",
            },
            {
                title: "HTTP Status Codes",
                url: "/modules/cheat-sheets/http-status-codes",
                icon: FileText,
                description: "Reference for HTTP status codes.",
            },
            {
                title: "Regex",
                url: "/modules/cheat-sheets/regex-reference",
                icon: FileText,
                description: "Common regex patterns and syntax.",
            },
            {
                title: "Color Theory",
                url: "/modules/cheat-sheets/color-theory",
                icon: Palette,
                description: "OKLCH, WCAG contrast, and color harmony.",
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
