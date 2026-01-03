export default function JavaScript() {
    return (
        <section className="space-y-10">
            {/* 1. Overview */}
            <header className="space-y-3 h-fit">
                <h2 className="text-2xl font-bold">JavaScript Reference</h2>
                <p className="text-muted-foreground mt-2">
                    A beginner-friendly guide to JavaScript fundamentals, syntax, and patterns.
                </p>
            </header>

            {/* 2. What is JavaScript */}
            <section id="what-is-javascript" className="space-y-3">
                <h3 className="text-xl font-semibold">What is JavaScript?</h3>
                <p>
                    JavaScript is the programming language of the web. It adds interactivity, logic,
                    and dynamic behaviour to webpages.
                </p>
            </section>

            {/* 3. Variables */}
            <section id="variables" className="space-y-3">
                <h3 className="text-xl font-semibold">Variables</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`let count = 0;
const name = "Dave";
var oldWay = true;`}
                </pre>

                <p>
                    Prefer <code>let</code> and <code>const</code>. Avoid <code>var</code> in modern
                    code.
                </p>
            </section>

            {/* 4. Data Types */}
            <section id="data-types" className="space-y-3">
                <h3 className="text-xl font-semibold">Data Types</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`string
number
boolean
null
undefined
object
array
function`}
                </pre>
            </section>

            {/* 5. Operators */}
            <section id="operators" className="space-y-3">
                <h3 className="text-xl font-semibold">Operators</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`1 + 2
3 * 4
5 === 5
"Hello " + "World"`}
                </pre>
            </section>

            {/* 6. Functions */}
            <section id="functions" className="space-y-3">
                <h3 className="text-xl font-semibold">Functions</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`function greet(name) {
  return "Hello " + name;
}

const greet2 = (name) => "Hello " + name;`}
                </pre>
            </section>

            {/* 7. Closures */}
            <section id="closures" className="space-y-3">
                <h3 className="text-xl font-semibold">Closures</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`function counter() {
  let count = 0;
  return () => ++count;
}

const inc = counter();
inc(); // 1
inc(); // 2`}
                </pre>

                <p>
                    A closure is a function that remembers variables from its outer scope even after
                    that scope has finished executing.
                </p>
            </section>

            {/* 8. Scope & Hoisting */}
            <section id="scope-and-hoisting" className="space-y-3">
                <h3 className="text-xl font-semibold">Scope & Hoisting</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError
let b = 20;`}
                </pre>

                <p>
                    <code>var</code> is hoisted and initialised as <code>undefined</code>.
                    <code>let</code> and <code>const</code> are hoisted but not initialised.
                </p>
            </section>

            {/* 9. Arrays */}
            <section id="arrays" className="space-y-3">
                <h3 className="text-xl font-semibold">Arrays</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`const items = [1, 2, 3];

items.push(4);
items.map(x => x * 2);
items.filter(x => x > 2);`}
                </pre>
            </section>

            {/* 10. Objects */}
            <section id="objects" className="space-y-3">
                <h3 className="text-xl font-semibold">Objects</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`const user = {
  name: "Dave",
  age: 30,
};

user.name;
user["age"];`}
                </pre>
            </section>

            {/* 11. Loops */}
            <section id="loops" className="space-y-3">
                <h3 className="text-xl font-semibold">Loops</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`for (let i = 0; i < 5; i++) {}

for (const item of items) {}

items.forEach(item => {});`}
                </pre>
            </section>

            {/* 12. Conditionals */}
            <section id="conditionals" className="space-y-3">
                <h3 className="text-xl font-semibold">Conditionals</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`if (x > 10) {
  ...
} else {
  ...
}

const msg = x > 10 ? "Big" : "Small";`}
                </pre>
            </section>

            {/* 13. DOM Manipulation */}
            <section id="dom-manipulation" className="space-y-3">
                <h3 className="text-xl font-semibold">DOM Manipulation</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`const el = document.querySelector("h1");

el.textContent = "Updated";
el.classList.add("active");`}
                </pre>
            </section>

            {/* 14. Events */}
            <section id="events" className="space-y-3">
                <h3 className="text-xl font-semibold">Events</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`button.addEventListener("click", () => {
  console.log("Clicked");
});`}
                </pre>
            </section>

            {/* 15. Event Delegation */}
            <section id="event-delegation" className="space-y-3">
                <h3 className="text-xl font-semibold">Event Delegation</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`document.addEventListener("click", (e) => {
  if (e.target.matches(".delete-btn")) {
    console.log("Delete clicked");
  }
});`}
                </pre>

                <p>
                    Event delegation attaches one listener to a parent instead of many listeners to
                    individual elements — ideal for dynamic content.
                </p>
            </section>

            {/* 16. JSON */}
            <section id="json" className="space-y-3">
                <h3 className="text-xl font-semibold">JSON</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`const obj = { name: "Dave" };

const json = JSON.stringify(obj);
const parsed = JSON.parse(json);`}
                </pre>
            </section>

            {/* 17. Fetch API */}
            <section id="fetch-api" className="space-y-3">
                <h3 className="text-xl font-semibold">Fetch API</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`const res = await fetch("/api/data");
const data = await res.json();`}
                </pre>
            </section>

            {/* 18. Async/Await */}
            <section id="async-await" className="space-y-3">
                <h3 className="text-xl font-semibold">Async / Await</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`async function load() {
  const res = await fetch("/api");
  return await res.json();
}`}
                </pre>
            </section>

            {/* 19. Async Patterns */}
            <section id="async-patterns" className="space-y-3">
                <h3 className="text-xl font-semibold">Async Patterns</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`// Parallel
const [a, b] = await Promise.all([taskA(), taskB()]);

// Sequential
await taskA();
await taskB();

// Timeout
const timeout = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));`}
                </pre>
            </section>

            {/* 20. Error Handling */}
            <section id="error-handling" className="space-y-3">
                <h3 className="text-xl font-semibold">Error Handling</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`try {
  riskyOperation();
} catch (err) {
  console.error(err);
}`}
                </pre>
            </section>

            {/* 21. Modules */}
            <section id="modules" className="space-y-3">
                <h3 className="text-xl font-semibold">Modules</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`// file.js
export const x = 10;

// main.js
import { x } from "./file.js";`}
                </pre>
            </section>

            {/* 22. Best Practices */}
            <section id="best-practices" className="space-y-3">
                <h3 className="text-xl font-semibold">Best Practices</h3>

                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        Prefer <code>const</code> for values that don&apos;t change.
                    </li>
                    <li>Use arrow functions for short callbacks.</li>
                    <li>Use async/await instead of raw promises.</li>
                    <li>Keep functions small and focused.</li>
                    <li>Use descriptive variable names.</li>
                </ul>
            </section>
        </section>
    );
}
