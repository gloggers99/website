window.onload = () => {
    const pageMap = new Map([
        ["website-toolbar-home", "home-container"],
        ["website-toolbar-projects", "projects-container"]
    ]);

    for (const [buttonId, containerId] of pageMap.entries()) {
        const buttonElement = document.getElementById(buttonId);
        const containerElement = document.getElementById(containerId);

        if (!buttonElement || !containerElement) continue;

        buttonElement.onclick = function () {
            // Remove current-page from all buttons
            for (const [otherButtonId] of pageMap.entries()) {
                const otherButton = document.getElementById(otherButtonId);
                if (otherButton) {
                    otherButton.classList.remove("current-page");
                }
            }
            buttonElement.classList.add("current-page");

            // Hide all containers
            for (const [, otherContainerId] of pageMap.entries()) {
                const otherContainer = document.getElementById(otherContainerId);
                if (otherContainer) {
                    otherContainer.classList.remove("active");
                }
            }
            // Show the selected container
            containerElement.classList.add("active");
        };
    }
}