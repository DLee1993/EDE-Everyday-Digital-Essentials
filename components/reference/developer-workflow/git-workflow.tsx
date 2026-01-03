export default function GitWorkflow() {
    return (
        <div className="space-y-10">
            {/* 1. Overview */}
            <header className="space-y-3 h-fit">
                <h1 className="text-xl font-bold">Git Workflow</h1>
                <p className="text-muted-foreground mt-2">
                    Git is a version control system that tracks changes to your code. It allows you
                    to collaborate, experiment safely, and maintain a clean history of your project.
                    Understanding Git is essential for working on real development teams.
                </p>
            </header>

            {/* 2. Why Git Matters */}
            <section id="why-git-matters" className="space-y-3">
                <h2 className="text-lg font-medium">Why Git Matters</h2>
                <p>
                    Git helps developers manage changes, avoid losing work, and collaborate
                    effectively. It&apos;s used in almost every modern software project.
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Tracks every change to your code</li>
                    <li>Allows safe experimentation with branches</li>
                    <li>Enables collaboration through pull requests</li>
                    <li>Provides a history of what changed and why</li>
                    <li>Integrates with GitHub, GitLab, and Bitbucket</li>
                </ul>
            </section>

            {/* 3. Core Git Concepts */}
            <section id="core-concepts" className="space-y-3">
                <h2 className="text-lg font-medium">Core Git Concepts</h2>
                <p>
                    Before learning commands, it&apos;s important to understand the basic ideas
                    behind Git.
                </p>

                <h3 className="font-medium">Repository (repo)</h3>
                <p>A project tracked by Git.</p>

                <h3 className="font-medium">Commit</h3>
                <p>A snapshot of your code at a moment in time.</p>

                <h3 className="font-medium">Branch</h3>
                <p>A separate line of development used for features or fixes.</p>

                <h3 className="font-medium">Merge</h3>
                <p>Combining changes from one branch into another.</p>

                <h3 className="font-medium">Remote</h3>
                <p>A version of your repo stored online (e.g., GitHub).</p>
            </section>

            {/* 4. Common Git Commands */}
            <section id="common-commands" className="space-y-3">
                <h2 className="text-lg font-medium">Common Git Commands</h2>
                <p>These commands form the foundation of everyday Git usage.</p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`git init            # Start a new repository
git clone URL        # Download a repo
git status           # Check changes
git add .            # Stage all changes
git commit -m "msg"  # Save a snapshot
git push             # Upload changes
git pull             # Download latest changes`}
                </pre>
            </section>

            {/* 5. Branching */}
            <section id="branching" className="space-y-3">
                <h2 className="text-lg font-medium">Branching</h2>
                <p>Branches allow you to work on features without affecting the main codebase.</p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`git branch feature/login   # Create a branch
git checkout feature/login  # Switch to it
git switch feature/login    # (newer alternative)
git merge feature/login     # Merge into current branch`}
                </pre>

                <p>Branching is the safest way to experiment and collaborate.</p>
            </section>

            {/* 6. Pull Requests */}
            <section id="pull-requests" className="space-y-3">
                <h2 className="text-lg font-medium">Pull Requests</h2>
                <p>
                    A pull request (PR) is a request to merge your branch into the main project.
                    It&apos;s where code review and collaboration happen.
                </p>

                <h3 className="font-medium">A good PR includes:</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>A clear title</li>
                    <li>A description of what changed</li>
                    <li>Screenshots (if UI changes)</li>
                    <li>Small, focused commits</li>
                </ul>
            </section>

            {/* 7. Git Workflow Best Practices */}
            <section id="git-best-practices" className="space-y-3">
                <h2 className="text-lg font-medium">Git Workflow Best Practices</h2>
                <p>Following good Git habits keeps your project clean and your team happy.</p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Commit often with clear messages</li>
                    <li>Use branches for every feature or fix</li>
                    <li>Pull before you push to avoid conflicts</li>
                    <li>Keep PRs small and focused</li>
                    <li>Never commit secrets or environment files</li>
                </ul>
            </section>
        </div>
    );
}
