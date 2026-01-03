export default function DOM() {
    return (
        <section className="space-y-10">
            {/* 1. Overview */}
            <header className="space-y-3 h-fit">
                <h2 className="text-2xl font-bold">DOM Reference</h2>
                <p className="text-muted-foreground mt-2">
                    A beginner-friendly guide to understanding and working with the DOM.
                </p>
            </header>

            {/* 2. What is the DOM */}
            <section id="what-is-the-dom" className="space-y-3">
                <h3 className="text-xl font-semibold">What is the DOM?</h3>
                <p>
                    The DOM (Document Object Model) is a tree-like representation of your HTML page.
                    JavaScript uses the DOM to read, modify, and interact with elements.
                </p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`HTML → Browser parses → DOM Tree → JavaScript interacts`}
                </pre>

                <p>
                    Every element becomes a <strong>node</strong> in this tree, and JavaScript can
                    access, modify, create, or remove these nodes.
                </p>
            </section>

            {/* 3. Selecting Elements */}
            <section id="selecting-elements" className="space-y-3">
                <h3 className="text-xl font-semibold">Selecting Elements</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`document.getElementById("header");
document.getElementsByClassName("item");
document.getElementsByTagName("p");

document.querySelector(".btn");
document.querySelectorAll("nav a");`}
                </pre>

                <p>
                    <code>querySelector</code> and <code>querySelectorAll</code> are the most
                    flexible and commonly used methods.
                </p>
            </section>

            {/* 4. Reading & Changing Content */}
            <section id="reading-and-changing-content" className="space-y-3">
                <h3 className="text-xl font-semibold">Reading & Changing Content</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`const title = document.querySelector("h1");

title.textContent = "New Title";
title.innerHTML = "<em>Styled Title</em>";`}
                </pre>

                <p>
                    <code>textContent</code> is safer because it doesn&apos;t parse HTML.
                    <code>innerHTML</code> allows HTML injection — use carefully.
                </p>
            </section>

            {/* 5. Working with Attributes */}
            <section id="working-with-attributes" className="space-y-3">
                <h3 className="text-xl font-semibold">Working with Attributes</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`const img = document.querySelector("img");

img.getAttribute("src");
img.setAttribute("alt", "A mountain at sunrise");

img.removeAttribute("title");`}
                </pre>
            </section>

            {/* 6. Classes & Styles */}
            <section id="classes-and-styles" className="space-y-3">
                <h3 className="text-xl font-semibold">Classes & Styles</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`element.classList.add("active");
element.classList.remove("hidden");
element.classList.toggle("open");

element.style.color = "red";
element.style.background = "#333";`}
                </pre>
            </section>

            {/* 7. Creating & Removing Elements */}
            <section id="creating-and-removing-elements" className="space-y-3">
                <h3 className="text-xl font-semibold">Creating & Removing Elements</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`const div = document.createElement("div");
div.textContent = "Hello";

document.body.append(div);

// Remove
div.remove();`}
                </pre>
            </section>

            {/* 8. DOM Traversal */}
            <section id="dom-traversal" className="space-y-3">
                <h3 className="text-xl font-semibold">DOM Traversal</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`element.parentElement
element.children
element.firstElementChild
element.lastElementChild
element.nextElementSibling
element.previousElementSibling`}
                </pre>

                <p>
                    Traversal is essential for navigating complex layouts and building interactive
                    components.
                </p>
            </section>

            {/* 9. Events & Event Flow */}
            <section id="events-and-event-flow" className="space-y-3">
                <h3 className="text-xl font-semibold">Events & Event Flow</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`button.addEventListener("click", () => {
  console.log("Clicked");
});`}
                </pre>

                <p>
                    Events follow a flow: <strong>capture → target → bubble</strong>.
                </p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`document.addEventListener("click", handler, { capture: true });`}
                </pre>
            </section>

            {/* 10. Event Delegation */}
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
                    Delegation attaches one listener to a parent instead of many listeners to
                    individual elements — ideal for dynamic content.
                </p>
            </section>

            {/* 11. DOM Performance Tips */}
            <section id="dom-performance-tips" className="space-y-3">
                <h3 className="text-xl font-semibold">DOM Performance Tips</h3>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Batch DOM updates when possible.</li>
                    <li>Avoid layout thrashing (reading + writing repeatedly).</li>
                    <li>
                        Use <code>requestAnimationFrame</code> for smooth animations.
                    </li>
                    <li>
                        Use <code>documentFragment</code> for large insertions.
                    </li>
                </ul>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`const frag = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  const li = document.createElement("li");
  li.textContent = "Item " + i;
  frag.append(li);
}
list.append(frag);`}
                </pre>
            </section>

            {/* 12. Best Practices */}
            <section id="best-practices" className="space-y-3">
                <h3 className="text-xl font-semibold">Best Practices</h3>

                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        Use <code>querySelector</code> for most selections.
                    </li>
                    <li>
                        Prefer <code>classList</code> over inline styles.
                    </li>
                    <li>Detach elements before heavy updates.</li>
                    <li>Use event delegation for dynamic lists.</li>
                    <li>Keep DOM manipulation minimal for performance.</li>
                </ul>
            </section>
        </section>
    );
}
