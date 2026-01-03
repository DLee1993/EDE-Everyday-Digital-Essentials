export default function GitVersionControl() {
    return (
        <section className="space-y-10">
            {/* 1. Overview */}
            <header className="space-y-3 h-fit">
                <h2 className="text-2xl font-bold">Git & Version Control</h2>
                <p className="text-muted-foreground mt-2">
                    Essential Git commands and concepts for everyday development.
                </p>
            </header>

            {/* 2. What is Git */}
            <section id="what-is-git" className="space-y-3">
                <h3 className="text-xl font-semibold">What is Git?</h3>
                <p>
                    Git is a version control system that tracks changes to your code over time. It
                    lets you experiment safely, collaborate, and roll back when needed.
                </p>
            </section>

            {/* 3. Initial Setup */}
            <section id="initial-setup" className="space-y-3">
                <h3 className="text-xl font-semibold">Initial Setup</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`git init
git status
git add .
git commit -m "Initial commit"`}
                </pre>
            </section>

            {/* 4. Branching Basics */}
            <section id="branching-basics" className="space-y-3">
                <h3 className="text-xl font-semibold">Branching Basics</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`git branch feature/new-ui
git checkout feature/new-ui

# or, in one step
git checkout -b feature/new-ui`}
                </pre>
            </section>

            {/* 5. Merging */}
            <section id="merging" className="space-y-3">
                <h3 className="text-xl font-semibold">Merging</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`# Switch to main
git checkout main

# Merge feature branch
git merge feature/new-ui`}
                </pre>
            </section>

            {/* 6. Remote Repositories */}
            <section id="remote-repositories" className="space-y-3">
                <h3 className="text-xl font-semibold">Remote Repositories</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`git remote add origin https://github.com/user/repo.git
git push -u origin main

git pull
git push`}
                </pre>
            </section>

            {/* 7. Resolving Conflicts */}
            <section id="resolving-conflicts" className="space-y-3">
                <h3 className="text-xl font-semibold">Resolving Conflicts</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`<<<<<<< HEAD
your changes
=======
their changes
>>>>>>> branch-name`}
                </pre>

                <p>
                    Edit the file to keep the correct version, remove the conflict markers, then
                    stage and commit.
                </p>
            </section>

            {/* 8. Stashing */}
            <section id="stashing" className="space-y-3">
                <h3 className="text-xl font-semibold">Stashing</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`git stash
git stash pop
git stash list`}
                </pre>

                <p>
                    Stashing lets you temporarily save uncommitted changes without committing them.
                </p>
            </section>

            {/* 9. Logs & History */}
            <section id="logs-and-history" className="space-y-3">
                <h3 className="text-xl font-semibold">Logs & History</h3>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    {`git log
git log --oneline
git diff
git show <commit>`}
                </pre>
            </section>

            {/* 10. Best Practices */}
            <section id="best-practices" className="space-y-3">
                <h3 className="text-xl font-semibold">Best Practices</h3>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Commit early and often.</li>
                    <li>Write clear, descriptive commit messages.</li>
                    <li>Use branches for features and fixes.</li>
                    <li>Pull before you push.</li>
                    <li>Review diffs before committing.</li>
                </ul>
            </section>
        </section>
    );
}
