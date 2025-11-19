const username = 'gloggers99';

async function fetchGitHubRepos() {
    const projectsGrid = document.getElementById('projects-grid');
    const projectsLoading = document.getElementById('projects-loading');

    if (!projectsGrid || !projectsLoading) return;

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);

        if (!response.ok) {
            throw new Error('Failed to fetch repositories');
        }

        const repos = await response.json();

        // Filter out profile repository
        const filteredRepos = repos.filter(repo => {
            return repo.full_name !== 'gloggers99/gloggers99';
        });

        // Sort by most recently updated
        filteredRepos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

        projectsLoading.style.display = 'none';

        if (filteredRepos.length === 0) {
            projectsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">No projects found.</p>';
            return;
        }

        filteredRepos.forEach(repo => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';

            const updatedDate = new Date(repo.updated_at);
            const formattedDate = updatedDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });

            projectCard.innerHTML = `
                <h3 class="project-title">${repo.name}${repo.archived ? ' <span class="archived-badge">[ARCHIVED]</span>' : ''}</h3>
                <p class="project-description">${repo.description || 'No description available'}</p>
                <div class="project-stats">
                    <span>Stars: ${repo.stargazers_count}</span>
                    <span>Forks: ${repo.forks_count}</span>
                    ${repo.language ? `<span>Language: ${repo.language}</span>` : ''}
                </div>
                <div class="project-updated">Updated: ${formattedDate}</div>
                <a href="${repo.html_url}" target="_blank" class="project-link">View Repository -&gt</a>
                ${repo.archived ? '<div class="archived-tooltip">This project has been archived</div>' : ''}
            `;

            if (repo.archived) {
                projectCard.classList.add('archived');
            }

            projectsGrid.appendChild(projectCard);
        });
    } catch (error) {
        projectsLoading.textContent = 'Failed to load projects. Please try again later.';
        console.error('Error fetching repos:', error);
    }
}

// Load projects when the page loads
window.addEventListener('load', fetchGitHubRepos);

