export default function BrowserApi() {
    return (
        <section className="space-y-10">
            {/* 1. Overview */}
            <header className="space-y-3 h-fit">
                <h2 className="text-2xl font-bold">Browser APIs</h2>
                <p className="text-muted-foreground mt-2">
                    A practical overview of the most useful browser APIs for web development.
                </p>
            </header>

            {/* 2. What are Browser APIs */}
            <section id="what-are-browser-apis" className="space-y-3">
                <h3 className="text-xl font-semibold">What are Browser APIs?</h3>
                <p>
                    Browser APIs are built-in features exposed by the browser that let you work with
                    the network, storage, clipboard, viewport, and more.
                </p>
                <p>
                    JavaScript calls these APIs to interact with the environment around your page,
                    beyond just the DOM.
                </p>
            </section>

            {/* 3. Fetch API */}
            <section id="fetch-api" className="space-y-3">
                <h3 className="text-xl font-semibold">Fetch API</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`// Basic GET request
const res = await fetch("/api/data");
const data = await res.json();

// POST request with JSON
await fetch("/api/save", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Dave" }),
});`}
                </pre>
            </section>

            {/* 4. Storage */}
            <section id="storage" className="space-y-3">
                <h3 className="text-xl font-semibold">Storage (localStorage & sessionStorage)</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`// Save
localStorage.setItem("theme", "dark");

// Read
const theme = localStorage.getItem("theme");

// Remove
localStorage.removeItem("theme");`}
                </pre>

                <p>
                    <code>localStorage</code> persists across tabs and sessions.
                    <code>sessionStorage</code> is cleared when the tab closes.
                </p>
            </section>

            {/* 5. URL & URLSearchParams */}
            <section id="url-and-urlsearchparams" className="space-y-3">
                <h3 className="text-xl font-semibold">URL & URLSearchParams</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`const url = new URL(window.location.href);

const query = new URLSearchParams(url.search);
const page = query.get("page") || "1";

query.set("page", "2");
url.search = query.toString();`}
                </pre>
            </section>

            {/* 6. History API */}
            <section id="history-api" className="space-y-3">
                <h3 className="text-xl font-semibold">History API</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`// Change URL without full reload
history.pushState({ page: 2 }, "", "?page=2");

window.addEventListener("popstate", (event) => {
  console.log("Back/forward navigation", event.state);
});`}
                </pre>
            </section>

            {/* 7. Clipboard API */}
            <section id="clipboard-api" className="space-y-3">
                <h3 className="text-xl font-semibold">Clipboard API</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`await navigator.clipboard.writeText("Copied text");

const text = await navigator.clipboard.readText();`}
                </pre>

                <p>
                    Clipboard access may require user interaction and permissions depending on the
                    browser and context.
                </p>
            </section>

            {/* 8. IntersectionObserver */}
            <section id="intersectionobserver" className="space-y-3">
                <h3 className="text-xl font-semibold">IntersectionObserver</h3>
                <p>Detect when elements enter or leave the viewport (great for lazy loading).</p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("Visible:", entry.target);
    }
  });
});

observer.observe(document.querySelector("#target"));`}
                </pre>
            </section>

            {/* 9. MutationObserver */}
            <section id="mutationobserver" className="space-y-3">
                <h3 className="text-xl font-semibold">MutationObserver</h3>
                <p>Watch for changes in the DOM (great for dynamic UIs).</p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`const observer = new MutationObserver((mutations) => {
  mutations.forEach(m => console.log(m));
});

observer.observe(document.body, { childList: true, subtree: true });`}
                </pre>
            </section>

            {/* 10. Timers */}
            <section id="timers" className="space-y-3">
                <h3 className="text-xl font-semibold">Timers</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`const id = setTimeout(() => {
  console.log("Run once after 1s");
}, 1000);

const intervalId = setInterval(() => {
  console.log("Run every 2s");
}, 2000);

// Cancel
clearTimeout(id);
clearInterval(intervalId);`}
                </pre>
            </section>

            {/* 11. Geolocation */}
            <section id="geolocation" className="space-y-3">
                <h3 className="text-xl font-semibold">Geolocation</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`navigator.geolocation.getCurrentPosition((pos) => {
  console.log(pos.coords.latitude, pos.coords.longitude);
});`}
                </pre>

                <p>Requires user permission and may be blocked on insecure origins.</p>
            </section>

            {/* 12. Notifications */}
            <section id="notifications" className="space-y-3">
                <h3 className="text-xl font-semibold">Notifications</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`if (Notification.permission === "granted") {
  new Notification("Hello!");
}`}
                </pre>

                <p>Notifications require explicit user permission and should be used sparingly.</p>
            </section>

            {/* 13. Device APIs */}
            <section id="device-apis" className="space-y-3">
                <h3 className="text-xl font-semibold">Device APIs</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`// Vibrate (mobile)
navigator.vibrate(200);

// Battery API
navigator.getBattery().then(battery => {
  console.log(battery.level);
});`}
                </pre>
            </section>

            {/* 14. Best Practices */}
            <section id="best-practices" className="space-y-3">
                <h3 className="text-xl font-semibold">Best Practices</h3>

                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        Prefer Fetch over older APIs like <code>XMLHttpRequest</code>.
                    </li>
                    <li>Gracefully handle API failures and offline states.</li>
                    <li>Use storage APIs responsibly — never store secrets.</li>
                    <li>Clean up observers, intervals, and listeners when no longer needed.</li>
                    <li>Request permissions only when necessary.</li>
                </ul>
            </section>
        </section>
    );
}
