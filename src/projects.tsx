import {useEffect, useState} from "react";
import {Title} from "./title.tsx";
import {ProjectCard} from "./projectCard.tsx";

export interface GitHubRepo {
    id: number;
    name: string;
    full_name: string;
    html_url: string;
    description: string;
    stargazers_count: number;
    language: string;
    topics: string[];
    archived: boolean;
    updated_at: string;
}

export function Projects() {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState(true);
    const [cogitoRepo, setCogitoRepo] = useState<GitHubRepo | null>(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                // Fetch all repositories
                const response = await fetch('https://api.github.com/users/gloggers99/repos?per_page=100&sort=updated');
                const allRepos: GitHubRepo[] = await response.json();

                // Find cogito_api
                const cogito = allRepos.find(repo => repo.name === 'cogito_api');
                if (cogito) {
                    setCogitoRepo(cogito);
                }

                // Filter and sort by stars, limit to 4
                const filteredRepos = allRepos
                    .filter(repo => repo.name !== 'cogito_api') // Exclude cogito_api from main list
                    .sort((a, b) => b.stargazers_count - a.stargazers_count)
                    .slice(0, 7); // Limit to 4 repos

                setRepos(filteredRepos);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching repositories:', error);
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    if (loading) {
        return (
            <div className="w-full">
                <Title text={"Projects"}/>
                <p className="text-ctp-subtext0">Loading projects...</p>
            </div>
        );
    }

    return (
        <div className="w-full">
            <Title text={"Projects"}/>

            <p className={"max-w-3/4"}>
                Here are some of my most popular projects on GitHub. I've pinned <code>cogito_api</code> as it is my
                primary project right now and I'm actively developing it.
            </p>

            <br/>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {/* Pinned cogito_api project */}
                {cogitoRepo && (
                    <ProjectCard repo={cogitoRepo} isPinned={true}/>
                )}

                {/* All other projects sorted by stars */}
                {repos.map(repo => (
                    <ProjectCard key={repo.id} repo={repo} isPinned={false}/>
                ))}
            </div>
        </div>
    )
}