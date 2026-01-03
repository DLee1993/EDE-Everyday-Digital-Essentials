export default function WebArchitecture() {
    return (
        <section className="space-y-10">
            {/* 1. Overview */}
            <header className="space-y-3 h-fit">
                <h1 className="text-xl font-bold">Web Architecture Basics</h1>
                <p className="text-muted-foreground mt-2">
                    A high-level overview of how the web works from request to response.
                </p>
            </header>

            {/* 2. What happens when you visit a URL */}
            <section id="what-happens-when-you-visit-a-url" className="space-y-3">
                <h2 className="text-lg font-medium">What happens when you visit a URL?</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`1. You enter a URL.
2. DNS finds the server's IP address.
3. Your browser connects to the server (HTTP/HTTPS).
4. The server returns an HTTP response.
5. The browser parses HTML, CSS, and JS.
6. The page is rendered and scripts run.`}
                </pre>
            </section>

            {/* 3. HTTP Requests & Responses */}
            <section id="http-requests-and-responses" className="space-y-3">
                <h2 className="text-lg font-medium">HTTP Requests & Responses</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`GET /index.html HTTP/1.1
Host: example.com

HTTP/1.1 200 OK
Content-Type: text/html
...`}
                </pre>

                <p>
                    HTTP is a request-response protocol. The browser sends a request; the server
                    sends back a response with a status code and headers.
                </p>
            </section>

            {/* 4. Status Codes */}
            <section id="status-codes" className="space-y-3">
                <h2 className="text-lg font-medium">Status Codes</h2>

                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        <strong>200</strong> — OK
                    </li>
                    <li>
                        <strong>301/302</strong> — Redirect
                    </li>
                    <li>
                        <strong>400</strong> — Bad Request
                    </li>
                    <li>
                        <strong>401</strong> — Unauthorized
                    </li>
                    <li>
                        <strong>403</strong> — Forbidden
                    </li>
                    <li>
                        <strong>404</strong> — Not Found
                    </li>
                    <li>
                        <strong>500</strong> — Server Error
                    </li>
                </ul>
            </section>

            {/* 5. Client vs Server */}
            <section id="client-vs-server" className="space-y-3">
                <h2 className="text-lg font-medium">Client vs Server</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`Client (browser):
- Renders HTML, CSS, JS
- Handles user interaction
- Makes API requests

Server:
- Stores and retrieves data
- Runs business logic
- Returns HTML or JSON`}
                </pre>
            </section>

            {/* 6. Static vs Dynamic */}
            <section id="static-vs-dynamic" className="space-y-3">
                <h2 className="text-lg font-medium">Static vs Dynamic Content</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`Static:
- HTML files served as-is
- Great for docs, blogs, marketing pages

Dynamic:
- HTML or JSON generated per request
- Great for dashboards, apps, custom data`}
                </pre>
            </section>

            {/* 7. Cookies & Sessions */}
            <section id="cookies-and-sessions" className="space-y-3">
                <h2 className="text-lg font-medium">Cookies & Sessions</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`Set-Cookie: sessionId=abc123; HttpOnly; Secure; Path=/;`}
                </pre>

                <p>
                    Cookies store small pieces of data in the browser. They are often used to keep
                    users logged in or remember preferences.
                </p>
            </section>

            {/* 8. CORS Basics */}
            <section id="cors-basics" className="space-y-3">
                <h2 className="text-lg font-medium">CORS Basics</h2>
                <p>
                    CORS (Cross-Origin Resource Sharing) controls which origins are allowed to
                    access resources on a server.
                </p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`Access-Control-Allow-Origin: https://example.com`}
                </pre>

                <p>
                    If CORS is misconfigured, browsers will block certain cross-site requests for
                    security.
                </p>
            </section>

            {/* 9. CDNs */}
            <section id="cdns" className="space-y-3">
                <h2 className="text-lg font-medium">CDNs</h2>
                <p>
                    A CDN (Content Delivery Network) caches static assets across global servers,
                    reducing latency and improving load times.
                </p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`<script src="https://cdn.example.com/library.js"></script>`}
                </pre>
            </section>

            {/* 10. APIs & JSON */}
            <section id="apis-and-json" className="space-y-3">
                <h2 className="text-lg font-medium">APIs & JSON</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`// Example API response
{
  "user": "Dave",
  "role": "admin"
}`}
                </pre>

                <p>
                    APIs allow the browser to request structured data (usually JSON) from a server.
                    JavaScript then uses this data to update the UI.
                </p>
            </section>

            {/* 11. Single Page Apps vs Multi Page Apps */}
            <section id="spa-vs-mpa" className="space-y-3">
                <h2 className="text-lg font-medium">Single Page Apps vs Multi Page Apps</h2>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`SPA:
- JS handles routing
- Faster transitions
- More complex build setup

MPA:
- Each page is a full HTML document
- Simpler, more SEO-friendly
- Less JS required`}
                </pre>
            </section>

            {/* 12. Core Mental Model */}
            <section id="core-mental-model" className="space-y-3">
                <h2 className="text-lg font-medium">Core Mental Model</h2>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Browsers render HTML, CSS, and JS.</li>
                    <li>Servers respond to HTTP requests.</li>
                    <li>APIs usually return JSON for JavaScript to use.</li>
                    <li>Everything rides on HTTP or HTTPS.</li>
                    <li>DNS resolves domain names to IP addresses.</li>
                    <li>Static assets can be cached globally via CDNs.</li>
                </ul>
            </section>
        </section>
    );
}
