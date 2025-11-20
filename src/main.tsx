import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

interface Repository {
    name: string;
    html_url: string;
    description: string;
    topics: string[];
    stargazers_count: number;
    language: string;
    archived: boolean;
}

function Header() {
    return (
        <header className="mb-16">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Lucas Marta
            </h1>
            <p className="text-2xl text-gray-300 mb-6">
                Programmer | Developer | Engineer
            </p>
            <div className="flex gap-4">
                <a
                    href="https://github.com/gloggers99"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 flex items-center gap-2"
                >
                    <span>🐙</span> GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/lucas-marta-498b2b32b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors duration-200 flex items-center gap-2"
                >
                    <span>💼</span> LinkedIn
                </a>
            </div>
        </header>
    )
}

function About() {
    return (
        <section className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-100">About Me</h2>
            <div className="text-gray-300 space-y-4 max-w-3xl">
                <p>
                    I'm a 17-year-old programmer living in California. I enjoy working on lower-level projects
                    (operating system stuff, backend stuff, etc.) in languages like C, C++, Rust & many more.
                </p>
                <p>
                    I've been programming since I was 9 years old and I hope to eventually put my skills to use
                    for a big fancy company or start my own! Who knows!
                </p>
                <p>
                    Currently, I am employed by a fantastic Code Ninja's franchise, where I share my knowledge
                    with those younger than me.
                </p>
            </div>
        </section>
    )
}

function FeaturedProjects() {
    const [repos, setRepos] = useState<Repository[]>([]);
    const [loading, setLoading] = useState(true);

    // Pinned project
    const pinnedProject = {
        name: "cogito_api",
        html_url: "https://github.com/gloggers99/cogito_api",
        description: "The rust-based backend for William Chastain's philosophy research AI agent. It is a REST API written for pure speed and security using the actix-web framework. It uses the Argon2id password hashing algorithm and a containerized PostgreSQL database with much more fancy stuff implemented as well.",
        topics: ["rust", "api", "backend", "philosophy", "rest"],
        stargazers_count: 0,
        language: "Rust",
        archived: false
    };

    useEffect(() => {
        fetch('https://api.github.com/users/gloggers99/repos?sort=updated&per_page=100')
            .then(res => res.json())
            .then((data: Repository[]) => {
                // Filter and sort repos, excluding the pinned one
                const featured = data
                    .filter(repo =>
                        repo.name !== 'gloggers99' && // Exclude profile repo
                        repo.name !== 'cogito_api' && // Exclude pinned project
                        !repo.archived && // Exclude archived repos initially
                        repo.description // Has a description
                    )
                    .sort((a, b) => {
                        // Sort by stars first, then by recent activity
                        if (b.stargazers_count !== a.stargazers_count) {
                            return b.stargazers_count - a.stargazers_count;
                        }
                        return 0;
                    })
                    .slice(0, 5); // Take top 5 (since we have 1 pinned)

                setRepos(featured);
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to fetch repos:', err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-100">Featured Projects</h2>
                <div className="text-gray-400">Loading projects...</div>
            </section>
        );
    }

    return (
        <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-100">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pinned Project */}
                <a
                    href={pinnedProject.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-750 p-6 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-xl border-2 border-purple-500 hover:border-purple-400 relative"
                >
                    <div className="absolute top-4 right-4 text-2xl">
                        📌
                    </div>
                    <div className="flex items-start justify-between mb-3 pr-8">
                        <h3 className="text-xl font-bold text-blue-400">{pinnedProject.name}</h3>
                        {pinnedProject.stargazers_count > 0 && (
                            <span className="flex items-center gap-1 text-yellow-400 text-sm">
                                ⭐ {pinnedProject.stargazers_count}
                            </span>
                        )}
                    </div>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        {pinnedProject.description}
                    </p>
                    <div className="flex flex-col gap-2">
                        {pinnedProject.language && (
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-500 font-semibold">LANGUAGE:</span>
                                <span className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full font-medium">
                                    {pinnedProject.language}
                                </span>
                            </div>
                        )}
                        {pinnedProject.topics.length > 0 && (
                            <div className="flex items-start gap-2">
                                <span className="text-xs text-gray-500 font-semibold pt-1">TOPICS:</span>
                                <div className="flex flex-wrap gap-2">
                                    {pinnedProject.topics.slice(0, 4).map((topic) => (
                                        <span
                                            key={topic}
                                            className="px-3 py-1 bg-gray-700 text-gray-200 text-xs rounded-full"
                                        >
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </a>

                {/* Dynamic Projects */}
                {repos.map((repo) => (
                    <a
                        key={repo.name}
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-gray-750 p-6 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-xl border border-gray-700 hover:border-gray-600"
                    >
                        <div className="flex items-start justify-between mb-3">
                            <h3 className="text-xl font-bold text-blue-400">{repo.name}</h3>
                            {repo.stargazers_count > 0 && (
                                <span className="flex items-center gap-1 text-yellow-400 text-sm">
                                    ⭐ {repo.stargazers_count}
                                </span>
                            )}
                        </div>
                        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                            {repo.description || 'No description available'}
                        </p>
                        <div className="flex flex-col gap-2">
                            {repo.language && (
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-gray-500 font-semibold">LANGUAGE:</span>
                                    <span className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full font-medium">
                                        {repo.language}
                                    </span>
                                </div>
                            )}
                            {repo.topics.length > 0 && (
                                <div className="flex items-start gap-2">
                                    <span className="text-xs text-gray-500 font-semibold pt-1">TOPICS:</span>
                                    <div className="flex flex-wrap gap-2">
                                        {repo.topics.slice(0, 4).map((topic) => (
                                            <span
                                                key={topic}
                                                className="px-3 py-1 bg-gray-700 text-gray-200 text-xs rounded-full"
                                            >
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}

function Skills() {
    const skills = [
        {
            category: "Languages",
            items: [
                { name: "C", icon: "c", color: "#A8B9CC" },
                { name: "C++", icon: "cplusplus", color: "#00599C" },
                { name: "Rust", icon: "rust", color: "#CE422B" },
                { name: "Go", icon: "go", color: "#00ADD8" },
                { name: "Python", icon: "python", color: "#3776AB" },
                { name: "TypeScript", icon: "typescript", color: "#3178C6" }
            ]
        },
        {
            category: "Backend",
            items: [
                { name: "Actix-Web", icon: "rust", color: "#CE422B" },
                { name: "Flask", icon: "flask", color: "#000000" },
                { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
                { name: "gRPC", icon: "grpc", color: "#4285F4" },
                { name: "OpenAPI", icon: "openapiinitiative", color: "#6BA539" }
            ]
        },
        {
            category: "Frontend",
            items: [
                { name: "React", icon: "react", color: "#61DAFB" },
                { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
                { name: "HTML", icon: "html5", color: "#E34F26" },
                { name: "CSS", icon: "css3", color: "#1572B6" }
            ]
        },
        {
            category: "Other",
            items: [
                { name: "Git", icon: "git", color: "#F05032" },
                { name: "Docker", icon: "docker", color: "#2496ED" },
                { name: "Linux", icon: "linux", color: "#FCC624" }
            ]
        }
    ]

    return (
        <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-100">Skills & Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skillGroup) => (
                    <div key={skillGroup.category} className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                        <h3 className="text-lg font-semibold mb-3 text-purple-400">{skillGroup.category}</h3>
                        <ul className="space-y-2">
                            {skillGroup.items.map((item) => (
                                <li key={item.name} className="text-gray-300 text-sm flex items-center gap-2">
                                    <img
                                        src={`https://cdn.simpleicons.org/${item.icon}`}
                                        alt={item.name}
                                        className="w-4 h-4"
                                        style={{ filter: 'brightness(0) invert(1)' }}
                                    />
                                    <span>{item.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
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
        <div className="min-h-screen w-full bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-8 py-12">
                <Header />
                <About />
                <FeaturedProjects />
                <Skills />
                <Footer />
            </div>
        </div>
    </StrictMode>
)
