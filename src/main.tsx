import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import {FaGithub, FaLinkedin, FaInstagram, FaRust, FaPython, FaReact, FaJava} from 'react-icons/fa'
import {SiCplusplus, SiTypescript} from "react-icons/si";
import { MdMail } from "react-icons/md";
import { BsPinAngleFill } from "react-icons/bs";
import './index.css';
import type {IconType} from "react-icons";
import {DiHaskell, DiVisualstudio} from "react-icons/di";

interface GitHubRepo {
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

function SocialLink({ href, Icon }: { href: string, Icon: IconType }) {
    return (
        <div className={"hover:scale-110 duration-300"}>
            <p className={"font-bold text-sm sm:text-base"}>
                <a className={"text-ctp-lavender"}
                   href={href}
                   target={"_blank"}>
                    <Icon className={"w-8 h-8 sm:w-7 sm:h-7"} />
                </a>
            </p>
        </div>
    )
}

function SocialLinks() {
    return (
        <div className={"flex flex-wrap items-end gap-2 sm:gap-x-2 justify-center"}>
            <SocialLink
                href={"https://www.linkedin.com/in/lucas-marta-498b2b32b/"}
                Icon={FaLinkedin}
            />

            <SocialLink
                href={"https://github.com/gloggers99"}
                Icon={FaGithub}
            />
            <SocialLink
                href={"https://instagram.com/lucas.gloggers"}
                Icon={FaInstagram}
            />
            <SocialLink
                href={"mailto:lucas.marta0799@gmail.com"}
                Icon={MdMail}
            />
        </div>
    )
}

function Header() {
    return (
        <div className={"flex flex-col gap-4 sm:gap-x-5 w-full"}>
            <div className={"flex flex-col items-center"}>
                <p className={"text-6xl font-semibold text-gradient"}>Lucas Marta</p>
                <p className={"text-sm sm:text-base"}>Programmer | Developer</p>
            </div>
            <SocialLinks />
        </div>
    )
}

function Language({name, Icon, color}: {name: string, Icon: IconType, color?: string}) {
    return (
        <span className="inline-flex items-center gap-1">
            <span className={color}>{name}</span>
            <Icon className="w-4 h-4 sm:w-3 sm:h-3" />
        </span>
    )
}

function Title({text}: {text: string}) {
    return (
        <p className={"text-2xl sm:text-3xl font-bold text-ctp-surface w-fit mb-4"}>{text}</p>
    )
}

function About() {
    return (
        <div>
            <Title text={"About Me"} />
            <div className={"sm:max-w-3/4"}>
                <p>
                    I'm a <p className={"inline bg-amber-950"}>17-year-old</p> programmer living in California.
                </p>

                <br />

                <p>
                    I enjoy working on system-level projects in languages
                    like <Language name={"C/C++"} Icon={SiCplusplus} color={"text-ctp-blue"} />
                    , <Language name={"Rust"} Icon={FaRust} color={"text-ctp-red"} />
                    , <Language name={"Python"} Icon={FaPython} color={"text-ctp-green"} />. I also dabble in web stuff
                    with <Language name={"TypeScript"} Icon={SiTypescript} color={"text-ctp-yellow"} /> + <Language name={"React"} Icon={FaReact} color={"text-white"}/> to make things
                    like this! Additionally I have experience with <Language name={"Java"} Icon={FaJava} color={"text-ctp-maroon"} />
                    , <Language name={"C Sharp"} Icon={DiVisualstudio} color={"text-ctp-sapphire"} />
                    , <Language name={"Haskell"} Icon={DiHaskell} color={"text-ctp-mauve"} />, and more.
                </p>

                <br />

                <p>
                    Currently, I am employed by a fantastic <a className={"bg-amber-950"} href={"https://www.codeninjas.com/"}>Code Ninja's</a> franchise,
                    where I share my knowledge with those younger than me.
                </p>
            </div>
        </div>
    )
}

function Projects() {
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
                <Title text={"Projects"} />
                <p className="text-ctp-subtext0">Loading projects...</p>
            </div>
        );
    }

    return (
        <div className="w-full">
            <Title text={"Projects"} />

            <p className={"max-w-3/4"}>
                Here are some of my most popular projects on GitHub. I've pinned <code>cogito_api</code> as it is my
                primary project right now and I'm actively developing it.
            </p>

            <br />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {/* Pinned cogito_api project */}
                {cogitoRepo && (
                    <ProjectCard repo={cogitoRepo} isPinned={true} />
                )}

                {/* All other projects sorted by stars */}
                {repos.map(repo => (
                    <ProjectCard key={repo.id} repo={repo} isPinned={false} />
                ))}
            </div>
        </div>
    )
}

function ProjectCard({ repo, isPinned }: { repo: GitHubRepo, isPinned: boolean }) {
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
                    <BsPinAngleFill className="w-5 h-5 text-ctp-yellow" />
                </div>
            )}

            {/* Archived tooltip */}
            {showArchived && repo.archived && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-ctp-surface0 text-ctp-text px-3 py-1 rounded text-sm whitespace-nowrap z-10">
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

function Footer() {
    return (
        <footer className="mt-auto pt-8 pb-4 text-center text-gray-500 text-sm">
            <p>© 2025 Lucas Marta. Built with React & TypeScript.</p>
        </footer>
    )
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div className="flex justify-start items-center sm:items-start flex-col min-h-screen w-full p-4 sm:p-8 bg-ctp-crust gap-6 sm:gap-10">
            <Header />
            <About />
            <Projects />
            <Footer />
        </div>
    </StrictMode>
)
