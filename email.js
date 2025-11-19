const possibleEmails = [
    'lucas.marta0799@gmail.com',
];

setInterval(() => {
    const emailElement = document.getElementById('email-element');
    const emailContainer = document.getElementById('email-element-container');

    if (!emailElement || !emailContainer) return;

    // Fade out
    emailElement.classList.add('fade-out');

    setTimeout(() => {
        const currentIndex = possibleEmails.indexOf(emailElement.innerHTML);
        const nextIndex = (currentIndex + 1) % possibleEmails.length;

        emailContainer.href = `mailto:${possibleEmails[nextIndex]}`;
        emailElement.innerHTML = possibleEmails[nextIndex];

        // Fade in
        emailElement.classList.remove('fade-out');
    }, 250);
}, 5000);