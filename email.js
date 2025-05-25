const possible_emails = [
    "lucas.marta0799@gmail.com",
    "lucas@gloggers.net"
];

setInterval(() => {
    const email_element = document.getElementById("email-element");
    const email_container = document.getElementById("email-element-container");
    if (!email_element || !email_container) return;

    // Fade out
    email_element.classList.add("fade-out");

    setTimeout(() => {
        const current_index = possible_emails.indexOf(email_element.innerHTML);
        const next_index = (current_index + 1) % possible_emails.length;

        email_container.href = "mailto:" + possible_emails[next_index];
        email_element.innerHTML = possible_emails[next_index];

        // Fade in
        email_element.classList.remove("fade-out");
    }, 250); // Match the CSS transition duration
}, 5000);