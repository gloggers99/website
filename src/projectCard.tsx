import {useState} from "react";
import {BsPinAngleFill} from "react-icons/bs";
import type {GitHubRepo} from "./projects.tsx";

export function ProjectCard({repo, isPinned}: { repo: GitHubRepo, isPinned: boolean }) {
    const [showArchived, setShowArchived] = useState(false);

    return (
        <div
            className={`relative border border-ctp-surface0 rounded-lg p-4 hover:border-ctp-lavender transition-all duration-200 ${
                repo.archived ? 'bg-ctp-mantle/50' : 'bg-ctp-mantle'
            }`}
            onMouseEnter={() => repo.archived && setShowArchived(true)}
            onMouseLeave={() => setShowArchived(false)}
        >
            {/* Pinned badge */}
            {isPinned && (
                <div className="absolute top-2 right-2">
                    <BsPinAngleFill className="w-5 h-5 text-ctp-yellow"/>
                </div>
            )}

            {/* Archived tooltip */}
            {showArchived && repo.archived && (
                <div
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-ctp-surface0 text-ctp-text px-3 py-1 rounded text-sm whitespace-nowrap z-10">
                    📦 Archived
                </div>
            )}

            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="block">
                <h3 className="text-lg font-semibold text-ctp-lavender mb-2 break-words">
                    {repo.name}
                </h3>
                <p className="text-sm text-ctp-subtext0 mb-3 line-clamp-2 min-h-[2.5rem]">
                    {repo.description || 'No description available'}
                </p>

                {/* Language and Stars */}
                <div className="flex items-center gap-3 mb-2 text-xs">
                    {repo.language && (
                        <span className="flex items-center gap-1 text-ctp-text">
                            <span className="w-3 h-3 rounded-full bg-ctp-blue"></span>
                            {repo.language}
                        </span>
                    )}
                    <span className="text-ctp-yellow">⭐ {repo.stargazers_count}</span>
                </div>

                {/* Topics */}
                {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                        {repo.topics.slice(0, 3).map(topic => (
                            <span
                                key={topic}
                                className="text-xs bg-ctp-surface0 text-ctp-blue px-2 py-1 rounded"
                            >
                                {topic}
                            </span>
                        ))}
                        {repo.topics.length > 3 && (
                            <span className="text-xs text-ctp-subtext0">
                                +{repo.topics.length - 3}
                            </span>
                        )}
                    </div>
                )}
            </a>
        </div>
    );
}