document.getElementById('resume-form')?.addEventListener('submit', function (event: Event) {
    event.preventDefault();

    // Selecting elements with proper TypeScript casting
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement | null;
    const emailElement = document.getElementById('email') as HTMLInputElement | null;
    const contactElement = document.getElementById('contact') as HTMLInputElement | null;
    const portfolioElement = document.getElementById('portfolio') as HTMLInputElement | null;
    const summaryElement = document.getElementById('summary') as HTMLTextAreaElement | null;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement | null;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement | null;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement | null;

    // Handle gender radio button group
    const genderElements = document.getElementsByName('gender') as NodeListOf<HTMLInputElement>;
    let gender = '';
    for (let i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked) {
            gender = genderElements[i].value;
            break;
        }
    }

    // Ensure all required elements are not null
    if (profilePictureInput && nameElement && emailElement && contactElement && portfolioElement && summaryElement
        && educationElement && skillsElement && experienceElement) {

        const name: string = nameElement.value;
        const email: string = emailElement.value;
        const contact: string = contactElement.value;
        const portfolio: string = portfolioElement.value;
        const summary: string = summaryElement.value;
        const education: string = educationElement.value;
        const skills: string = skillsElement.value;
        const experience: string = experienceElement.value;

         // Handle profile picture
         const profilePictureFile = profilePictureInput.files?.[0];
         const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

        // Create resume output
        const resumeOutput: string = `
        <h2>Resume</h2>
        ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ""}
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Portfolio:</strong> ${portfolio}</p>
        <p><strong>Summary:</strong> ${summary}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Skills</h3>
        <p>${skills}</p>

        <h3>Experience</h3>
        <p>${experience}</p>
        `;

        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            console.log('Resume generated successfully.');
        } else {
            console.error('The resume output element is missing.');
        }
    } else {
        console.error('Some required fields are missing.');
    }
});
