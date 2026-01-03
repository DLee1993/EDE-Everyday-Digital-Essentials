export default function WebPerformance() {
    return (
        <section className="space-y-10">
            {/* 1. Overview */}
            <header className="space-y-3 h-fit">
                <h1 className="text-xl font-bold">Web Performance Basics</h1>
                <p className="text-muted-foreground mt-2">
                    Key concepts and practices to make websites feel fast and responsive.
                </p>
            </header>

            {/* 2. Why Performance Matters */}
            <section id="why-performance-matters" className="space-y-3">
                <h2 className="text-lg font-medium">Why Performance Matters</h2>
                <p>
                    Performance affects user experience, engagement, accessibility, and even search
                    ranking. Fast sites feel trustworthy and pleasant to use.
                </p>
            </section>

            {/* 3. Critical Rendering Path */}
            <section id="critical-rendering-path" className="space-y-3">
                <h2 className="text-lg font-medium">Critical Rendering Path</h2>

                <ul className="list-disc pl-6 space-y-1">
                    <li>HTML is parsed into the DOM.</li>
                    <li>CSS is parsed into the CSSOM.</li>
                    <li>DOM + CSSOM → Render tree → Layout → Paint.</li>
                </ul>

                <p>
                    Large blocking scripts or styles can delay this pipeline and slow down the first
                    render.
                </p>
            </section>

            {/* 4. Optimising Assets */}
            <section id="optimising-assets" className="space-y-3">
                <h2 className="text-lg font-medium">Optimising Assets</h2>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Compress and resize images.</li>
                    <li>Use modern formats where possible.</li>
                    <li>Minify CSS and JavaScript.</li>
                    <li>Avoid loading unused libraries.</li>
                </ul>
            </section>

            {/* 5. Loading JavaScript Wisely */}
            <section id="loading-javascript-wisely" className="space-y-3">
                <h2 className="text-lg font-medium">Loading JavaScript Wisely</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`<script src="app.js" defer></script>
<script src="analytics.js" async></script>`}
                </pre>

                <p>
                    <code>defer</code> waits for HTML parsing to finish before running.
                    <code>async</code> runs as soon as the script is downloaded.
                </p>
            </section>

            {/* 6. Avoiding Layout Thrashing */}
            <section id="avoiding-layout-thrashing" className="space-y-3">
                <h2 className="text-lg font-medium">Avoiding Layout Thrashing</h2>
                <p>
                    Layout thrashing happens when you repeatedly read and write layout properties in
                    a tight loop.
                </p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`// Bad: read/write mixed
for (...) {
  const height = el.offsetHeight; // read
  el.style.height = height + 10 + "px"; // write
}

// Better: batch
const height = el.offsetHeight;
for (...) {
  el.style.height = height + 10 + "px";
}`}
                </pre>
            </section>

            {/* 7. Debouncing & Throttling */}
            <section id="debouncing-and-throttling" className="space-y-3">
                <h2 className="text-lg font-medium">Debouncing & Throttling</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`// Debounce: wait for pause
function debounce(fn, delay) {
  let id;
  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => fn(...args), delay);
  };
}

// Throttle: run at most every X ms
function throttle(fn, interval) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= interval) {
      last = now;
      fn(...args);
    }
  };
}`}
                </pre>
            </section>

            {/* 8. Measuring Performance */}
            <section id="measuring-performance" className="space-y-3">
                <h2 className="text-lg font-medium">Measuring Performance</h2>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Use browser DevTools performance and network panels.</li>
                    <li>Measure bundle size and load times.</li>
                    <li>Pay attention to initial load and interaction delay.</li>
                    <li>Test on slower devices or throttled networks.</li>
                </ul>
            </section>

            {/* 9. Caching Strategies */}
            <section id="caching-strategies" className="space-y-3">
                <h2 className="text-lg font-medium">Caching Strategies</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`// Example: Cache-Control header
Cache-Control: max-age=31536000, immutable`}
                </pre>

                <p>
                    Caching static assets reduces load times dramatically and improves perceived
                    performance.
                </p>
            </section>

            {/* 10. Best Practices */}
            <section id="best-practices" className="space-y-3">
                <h2 className="text-lg font-medium">Best Practices</h2>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Optimise images first — they&apos;re usually the biggest files.</li>
                    <li>
                        Use <code>defer</code> and <code>async</code> for scripts.
                    </li>
                    <li>Minimise layout shifts (CLS).</li>
                    <li>Use lazy loading for off-screen images.</li>
                    <li>Measure performance regularly, not just once.</li>
                </ul>
            </section>
        </section>
    );
}
