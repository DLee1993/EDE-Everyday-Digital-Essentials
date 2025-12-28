# Contributing to EDE

_A guide for building tools the EDE way_

Thank you for contributing to EDE.  
This project is built on clarity, consistency, and long‑term resilience.  
This guide explains how to work inside the codebase and how to add new tools without breaking the architecture.

---

# 🗂️ Folder Structure

src/ components/ → Reusable UI components (client) hooks/ → Logic-only React hooks (no "use client") lib/ → Pure utilities and shared helpers modules/ → Root pages for each tool (client) styles/ → Global styles app/ → Next.js routing

Each folder has a strict responsibility.  
This keeps the platform predictable and prevents accidental coupling.

---

# 📌 What Belongs Where

## `components/` — UI building blocks

-   Must include `"use client"`
-   Should be reusable
-   Should not contain business logic
-   Should not import from `modules/`

---

## `hooks/` — Logic-only React hooks

-   **Never** include `"use client"`
-   No JSX
-   No UI imports
-   Can import from `lib/`
-   Contains state, derived values, and actions

---

## `lib/` — Pure utilities and shared helpers

-   No `"use client"`
-   No React imports (unless returning small JSX helpers)
-   Pure functions only
-   Shared helpers (copy, download, formatting)

---

## `modules/` — Tool root pages

-   Must include `"use client"`
-   Compose hooks + components
-   Should remain thin
-   Should not contain pure logic

---

# 🛠️ How to Add a New Tool

Every tool follows the same structure:

### **1. Create a hook**

`/hooks/useMyTool.ts`

Contains:

-   state
-   derived values
-   actions
-   logic

No JSX. No `"use client"`.

---

### **2. Create UI components**

`/components/my-tool/`

Contains:

-   inputs
-   outputs
-   action menus
-   layout pieces

Must include `"use client"`.

---

### **3. Create the tool page**

`/modules/my-tool/page.tsx`

Contains:

-   `"use client"`
-   composition of hook + components

Should be thin.

---

### **4. Add utilities (optional)**

If your tool needs pure logic:

`/lib/myUtility.ts`

No `"use client"`.

---

### **5. Use shared helpers**

Never duplicate logic.

Use:
import { downloadTextFile, downloadJsonFile, downloadBlobUrlFile } from "@/lib/download"; import { copyText } from "@/lib/copy";

---

# 🧪 Testing Checklist

Before submitting a PR:

-   Tool works as expected
-   Tool loads with no errors or warnings
-   Tool loads correctly
-   Copy/download actions work
-   No `"use client"` leaks into hooks/lib
-   Components are reusable
-   Module page is thin
-   No duplicated logic
-   Naming is consistent with other tools

---

# 🤝 Pull Requests

PRs should:

-   Follow the architecture
-   Maintain clarity and consistency
-   Include meaningful commit messages
-   Avoid unnecessary dependencies

---

# ❤️ Thank You

EDE exists because of contributors like you.  
Your work helps keep essential tools free, resilient, and accessible to everyone.
