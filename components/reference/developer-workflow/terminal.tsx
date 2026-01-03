export default function Terminal() {
    return (
        <div className="space-y-10">
            {/* 1. Overview */}
            <header className="space-y-3 h-fit">
                <h1 className="text-xl font-bold">Terminal</h1>
                <p className="text-muted-foreground mt-2">
                    The terminal (or command line) is a text-based interface for interacting with
                    your computer. Developers use it to navigate files, run programs, manage tools,
                    and automate tasks. Learning the terminal is one of the biggest productivity
                    boosts for beginners.
                </p>
            </header>

            {/* 2. Why the Terminal Matters */}
            <section id="why-terminal-matters" className="space-y-3">
                <h2 className="text-lg font-medium">Why the Terminal Matters</h2>
                <p>
                    Modern development relies heavily on command-line tools. Package managers,
                    frameworks, version control, build tools, and automation all run through the
                    terminal.
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Faster than GUI tools</li>
                    <li>Required for Git, Node, Python, Docker, and more</li>
                    <li>Essential for automation and scripting</li>
                    <li>Works the same across most operating systems</li>
                </ul>
            </section>

            {/* 3. Navigating the File System */}
            <section id="navigation" className="space-y-3">
                <h2 className="text-lg font-medium">Navigating the File System</h2>
                <p>The terminal lets you move around your computer using simple commands.</p>

                <h3 className="font-medium">Common Commands</h3>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`pwd        # Show current directory
ls         # List files
cd folder  # Change directory
cd ..      # Go up one level
mkdir app  # Create a folder
rm file    # Delete a file`}
                </pre>

                <p>
                    These commands form the foundation of terminal navigation. Once you master them,
                    everything else becomes easier.
                </p>
            </section>

            {/* 4. Working With Files */}
            <section id="working-with-files" className="space-y-3">
                <h2 className="text-lg font-medium">Working With Files</h2>
                <p>The terminal allows you to create, move, copy, and delete files quickly.</p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`touch index.js     # Create a file
cp a.txt b.txt      # Copy a file
mv a.txt folder/    # Move a file
rm a.txt            # Delete a file
rm -r folder        # Delete a folder`}
                </pre>

                <p>
                    Be careful with <code>rm -r</code> — it deletes everything inside a folder
                    without sending it to the recycle bin.
                </p>
            </section>

            {/* 5. Running Programs */}
            <section id="running-programs" className="space-y-3">
                <h2 className="text-lg font-medium">Running Programs</h2>
                <p>Many tools and frameworks are designed to run from the terminal.</p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`node app.js
python script.py
npm run dev
git status`}
                </pre>

                <p>
                    Once you understand how to run commands, you can use almost any developer tool.
                </p>
            </section>

            {/* 6. Installing Tools */}
            <section id="installing-tools" className="space-y-3">
                <h2 className="text-lg font-medium">Installing Tools</h2>
                <p>
                    Package managers like Homebrew, apt, npm, and pip let you install software
                    directly from the terminal.
                </p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`brew install node
npm install react
pip install requests`}
                </pre>

                <p>This is how developers install frameworks, libraries, CLIs, and utilities.</p>
            </section>

            {/* 7. Terminal Productivity Tips */}
            <section id="terminal-tips" className="space-y-3">
                <h2 className="text-lg font-medium">Terminal Productivity Tips</h2>
                <p>Small habits make a huge difference when working in the terminal.</p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        Use <strong>Tab</strong> to auto-complete commands and file names
                    </li>
                    <li>Use arrow keys to repeat previous commands</li>
                    <li>
                        Use <code>clear</code> or <code>Ctrl + L</code> to clean the screen
                    </li>
                    <li>
                        Use <code>Ctrl + C</code> to stop a running process
                    </li>
                    <li>Use aliases to shorten long commands</li>
                </ul>
            </section>
        </div>
    );
}
