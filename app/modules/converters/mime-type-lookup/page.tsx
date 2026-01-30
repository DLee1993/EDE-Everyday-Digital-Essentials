"use client";

import { useMimeLookup } from "@/hooks/mime-type-lookup/use-mime-lookup";

//https://tanstack.com/table/v8

export default function MimeLookupTool() {
    const { query, setQuery, result } = useMimeLookup();

    return (
        <div className="mime-lookup">
            {/* Input Card */}
            <div className="card input-card">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by extension or MIME type…"
                    className="mime-input"
                />
            </div>

            {/* Results */}
            {result && (
                <div className="card results-card">
                    <table className="mime-table">
                        <thead>
                            <tr>
                                <th>Extension</th>
                                <th>MIME Type</th>
                                <th>Category</th>
                                <th>Aliases</th>
                                <th>Description</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>{result.extension}</td>
                                <td>{result.mime}</td>
                                <td>{result.category}</td>
                                <td>{result.aliases.join(", ") || "—"}</td>
                                <td>{result.description}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}

            {/* Empty State */}
            {!result && query.trim() !== "" && (
                <div className="card empty-card">
                    <p>No matching MIME type found.</p>
                </div>
            )}
        </div>
    );
}
