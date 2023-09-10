function generateResume() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const summary = document.getElementById("summary").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;

    const resumeSection = document.getElementById("resume");
    resumeSection.innerHTML = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <h3>Summary</h3>
        <p>${summary}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
    `;
}
