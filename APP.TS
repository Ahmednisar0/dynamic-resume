// Declare the html2pdf variable
declare var html2pdf: any;

// Add event listener to the form
document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    // Type assertion for form elements
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('Education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('Experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('Skills') as HTMLTextAreaElement;
    const linkElement = document.getElementById('link') as HTMLInputElement;
    const linkedinElement = document.getElementById('linkedin') as HTMLInputElement;
    const certificatesElement = document.getElementById('certificates') as HTMLTextAreaElement;
    const genderElement = document.getElementById('gender') as HTMLSelectElement;

    // Check if elements are not null and retrieve their values
    if (nameElement && emailElement && phoneElement && educationElement &&
        experienceElement && skillsElement && linkElement && linkedinElement && certificatesElement && genderElement) {
        
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        const githubLink = linkElement.value;
        const linkedin = linkedinElement.value;
        const certificates = certificatesElement.value;
        const gender = genderElement.value; 

        // Display values in designated output areas
        document.getElementById('nameOutput')!.textContent = name;
        document.getElementById('emailOutput')!.textContent = email;
        document.getElementById('phoneOutput')!.textContent = phone;
        document.getElementById('educationOutput')!.textContent = education;
        document.getElementById('experienceOutput')!.textContent = experience;
        document.getElementById('skillsOutput')!.textContent = skills;
        
        const githubOutput = document.getElementById('githubOutput');
        if (githubOutput) {
            githubOutput.innerHTML = `GitHub: <a href="${githubLink}" target="_blank" rel="noopener noreferrer">Github</a>`;
        }

        const linkedinOutput = document.getElementById('linkedinOutput');
        if (linkedinOutput) {
            linkedinOutput.innerHTML = `<a href="${linkedin}" target="_blank" rel="noopener noreferrer">Linkedin</a>`;
        }

        document.getElementById('certificatesOutput')!.textContent = certificates;
        

        // Generate the profile picture based on gender
        const profilePicture = getProfilePicture(gender);
        const outputElement = document.getElementById('profilePictureOutput');
        if (outputElement) {
            outputElement.innerHTML = profilePicture;
        }
    }
});

// Function to get profile picture based on gender
function getProfilePicture(gender: string): string {
    let profilePicture = '';

    if (gender === "male") {
        profilePicture = '<img src="/images/man-character-face-avatar-glasses-600nw-542759665.jpg" alt="Profile Picture">';
    } else if (gender === "female") {
        profilePicture = '<img src="/images/depositphotos_477176258-stock-illustration-girl-glamour-waitress-icon-filled.jpg" alt="Profile Picture">';
    } else {
        profilePicture = '<p>No profile picture available.</p>'; // Default case if gender is not recognized
    }

    return profilePicture;
}

// Event listener for the Save Changes button
document.getElementById('saveChanges')?.addEventListener('click', function () {
    alert("Changes have been saved successfully!");
});

// Download CV button functionality
const downloadCvButton = document.getElementById('downloadCV') as HTMLButtonElement;

downloadCvButton?.addEventListener('click', () => {
    const element = document.getElementById('cvOutput');

    if (element) {
        html2pdf()
            .from(element)
            .save('resume.pdf') // Name of the downloaded file
            .catch((error: any) => {
                console.error('Error generating PDF:', error);
            });
    } else {
        console.error('Element with id "cvOutput" not found!');
    }
});
