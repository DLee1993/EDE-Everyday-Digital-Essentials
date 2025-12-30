# 📘 EDE Redux Requirements Reference

This document defines which tools require Redux, and what each tool needs inside Redux (engine, persistence, shared state, etc.).  
Tools not listed under **Requires Redux** should **not** use Redux.

---

# ✅ Tools That **Require Redux**

These tools have background behaviour, timers, engines, persistent configuration, or shared state that must survive navigation.

---

## 🟩 Workspace Tools

### **Focus Timer** ✔

**Why:**

-   Background ticking
-   Break transitions
-   Alarm logic
-   Persistent presets
-   Global state needed by UI + engine

**Redux Requirements:**

-   Slice: timer state, presets, toggles
-   Persistence: yes
-   Engine: yes

---

### **Stopwatch**

**Why:**

-   Background ticking
-   Lap tracking
-   Must survive navigation

**Redux Requirements:**

-   Slice: running state, elapsed time, laps
-   Persistence: optional
-   Engine: yes

---

### **Countdown Timer**

**Why:**

-   Background ticking
-   Alarm logic
-   Must survive navigation

**Redux Requirements:**

-   Slice: duration, remaining time, running state
-   Persistence: yes
-   Engine: yes

---

### **Calendar** _(conditional)_

**Why:**

-   Only if storing events, reminders, or view preferences

**Redux Requirements:**

-   Slice: events, reminders, view settings
-   Persistence: yes
-   Engine: optional (for reminders)

---

### **World Clock** _(conditional)_

**Why:**

-   Only if saving cities, ordering clocks, or storing preferences

**Redux Requirements:**

-   Slice: saved clocks, preferences
-   Persistence: yes
-   Engine: no

---

## 🟩 Sharing Tools

### **Link in Bio Creator** _(conditional)_

**Why:**

-   Only if saving profiles, themes, or layouts

**Redux Requirements:**

-   Slice: profile data, theme, layout
-   Persistence: yes
-   Engine: no

---

## 🟩 Development Tools

### **JSON Tools** _(conditional)_

**Why:**

-   Only if adding history or saved snippets

**Redux Requirements:**

-   Slice: saved snippets, history
-   Persistence: yes
-   Engine: no

---

### **Diff Tool** _(conditional)_

**Why:**

-   Only if adding saved comparisons

**Redux Requirements:**

-   Slice: saved diffs
-   Persistence: yes
-   Engine: no

---

## 🟩 System Tools

### **CSV Viewer** _(conditional)_

**Why:**

-   Only if adding persistent settings or saved files

**Redux Requirements:**

-   Slice: settings, saved files
-   Persistence: yes
-   Engine: no

---

### **Data Cleaner** _(conditional)_

**Why:**

-   Only if adding saved cleaning rules or presets

**Redux Requirements:**

-   Slice: rules, presets
-   Persistence: yes
-   Engine: no

---

## 🟩 Security Tools

### **Encryption Sandbox** _(conditional)_

**Why:**

-   Only if adding saved keys or configurations

**Redux Requirements:**

-   Slice: keys, configs
-   Persistence: yes
-   Engine: no

---

### **Argon2 Playground** _(conditional)_

**Why:**

-   Only if adding saved presets

**Redux Requirements:**

-   Slice: presets
-   Persistence: yes
-   Engine: no

---

# ❌ Tools That **Do NOT Need Redux**

These tools are stateless, single‑shot transformers, or simple generators.  
They do **not** need global state, engines, or cross‑tool integration.

---

## 🟦 Converters

-   Files Converter
-   Units Converter
-   Currencies Converter
-   Colors
-   Number Base
-   Text Case
-   Date Format
-   MIME Type Lookup

---

## 🟦 Workspace

-   Word Counter
-   Notepad _(unless persistent notes are added)_
-   World Clock _(if simple)_

---

## 🟦 Security

-   Credentials Generator
-   Test Credentials
-   Hash Generator
-   JWT Decoder
-   Metadata Stripper
-   HMAC Generator
-   PEM Inspector

---

## 🟦 Development

-   Lorem Ipsum
-   Regex Tester
-   Markdown Previewer
-   YAML to JSON
-   HTML Formatter
-   Git Ignore Generator
-   Cron Helper

---

## 🟦 System

-   Base64 Tools
-   UUID Generator
-   URL Encode / Decode
-   Slug Generator
-   Text Normalizer
-   JWT Encoder
-   File Metadata Viewer

---

## 🟦 Sharing

-   QR Code Generator _(usePersistentState only)_
-   URL Shortener
-   vCard Generator
-   OpenGraph Preview
-   Social Image

---

## 🟦 Reference

(All reference tools are static content — no Redux needed)

-   HTML
-   CSS
-   JavaScript
-   Git
-   HTTP Status Codes
-   Regex
-   Color Theory

---

# ⭐ Summary Table

| Tool Type         | Needs Redux? | Why                | Needs Engine? | Needs Persistence? |
| ----------------- | ------------ | ------------------ | ------------- | ------------------ |
| Focus Timer       | ✔            | background ticking | ✔             | ✔                  |
| Stopwatch         | ✔            | background ticking | ✔             | optional           |
| Countdown Timer   | ✔            | background ticking | ✔             | ✔                  |
| World Clock       | conditional  | saved clocks       | no            | yes                |
| QR Code Generator | ✘            | UI-only form       | no            | local only         |
| Converters        | ✘            | stateless          | no            | no                 |
| Generators        | ✘            | stateless          | no            | no                 |
| Reference Tools   | ✘            | static             | no            | no                 |

---