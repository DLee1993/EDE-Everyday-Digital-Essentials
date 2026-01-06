// data/reference/index.ts

import testingOverview from "@/data/reference/testing/testing-overview.json";
import testingTools from "@/data/reference/testing/testing-tools.json";
import unitTesting from "@/data/reference/testing/unit-testing.json";
import integrationTesting from "@/data/reference/testing/integration-testing.json";
import e2eTesting from "@/data/reference/testing/end-to-end.json";

import terminal from "@/data/reference/developer-workflow/terminal.json";
import codeEditors from "@/data/reference/developer-workflow/code-editors.json";
import automation from "@/data/reference/developer-workflow/automation.json";
import debugging from "@/data/reference/developer-workflow/debugging.json";
import environmentVariables from "@/data/reference/developer-workflow/environment-variables.json";
import projectStructure from "@/data/reference/developer-workflow/project-structure.json";
import gitWorkflow from "@/data/reference/developer-workflow/git-workflow.json";
import markdown from "@/data/reference/developer-workflow/markdown.json";

import sqlBasics from "@/data/reference/databases/sql-basics.json";
import nosqlBasics from "@/data/reference/databases/nosql-basics.json";
import sqlVsNosql from "@/data/reference/databases/sql-v-nosql.json";
import orms from "@/data/reference/databases/orm.json";

import webPerformance from "@/data/reference/web-development/web-performance.json";
import accessibility from "@/data/reference/web-development/accessibility.json";
import browserApi from "@/data/reference/web-development/browser-api.json";
import css from "@/data/reference/web-development/css.json";
import devTools from "@/data/reference/web-development/dev-tools.json";
import dom from "@/data/reference/web-development/dom.json";
import gitVersionControl from "@/data/reference/web-development/git-version-control.json";
import html from "@/data/reference/web-development/html.json";
import js from "@/data/reference/web-development/js.json";
import packageManagers from "@/data/reference/web-development/package-managers.json";
import webArchitecture from "@/data/reference/web-development/web-architecture.json";

import colour from "@/data/reference/design/colour.json";
import components from "@/data/reference/design/components.json";
import layout from "@/data/reference/design/layout.json";
import spacing from "@/data/reference/design/spacing.json";
import typography from "@/data/reference/design/typography.json";

export const docs = {
    // Testing
    "testing-overview": testingOverview,
    "testing-tools": testingTools,
    "unit-testing": unitTesting,
    "integration-testing": integrationTesting,
    "e2e-testing": e2eTesting,

    // Developer workflow
    terminal,
    "code-editors": codeEditors,
    automation,
    debugging,
    "environment-variables": environmentVariables,
    "project-structure": projectStructure,
    markdown,
    "git-workflow": gitWorkflow,

    // Databases
    "sql-basics": sqlBasics,
    "nosql-basics": nosqlBasics,
    "sql-vs-nosql": sqlVsNosql,
    orms,

    // Web Development
    "web-performance": webPerformance,
    accessibility,
    "browser-api": browserApi,
    css,
    "dev-tools": devTools,
    dom,
    "git-version-control": gitVersionControl,
    html,
    js,
    "package-managers": packageManagers,
    "web-architecture": webArchitecture,

    // Design
    colour,
    "design-components": components,
    "design-layout": layout,
    "design-spacing": spacing,
    typography,
};

export type DocKey = keyof typeof docs;
