var _a, _b;
// Add event listener to the form
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type assertion for form elements
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('Education');
    var experienceElement = document.getElementById('Experience');
    var skillsElement = document.getElementById('Skills');
    var linkElement = document.getElementById('link');
    var linkedinElement = document.getElementById('linkedin');
    var certificatesElement = document.getElementById('certificates');
    var genderElement = document.getElementById('gender');
    // Check if elements are not null and retrieve their values
    if (nameElement && emailElement && phoneElement && educationElement &&
        experienceElement && skillsElement && linkElement && linkedinElement && certificatesElement && genderElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var githubLink = linkElement.value;
        var linkedin = linkedinElement.value;
        var certificates = certificatesElement.value;
        var gender = genderElement.value;
        // Display values in designated output areas
        document.getElementById('nameOutput').textContent = name_1;
        document.getElementById('emailOutput').textContent = email;
        document.getElementById('phoneOutput').textContent = phone;
        document.getElementById('educationOutput').textContent = education;
        document.getElementById('experienceOutput').textContent = experience;
        document.getElementById('skillsOutput').textContent = skills;
        var githubOutput = document.getElementById('githubOutput');
        if (githubOutput) {
            githubOutput.innerHTML = "GitHub: <a href=\"".concat(githubLink, "\" target=\"_blank\" rel=\"noopener noreferrer\">Github</a>");
        }
        var linkedinOutput = document.getElementById('linkedinOutput');
        if (linkedinOutput) {
            linkedinOutput.innerHTML = "<a href=\"".concat(linkedin, "\" target=\"_blank\" rel=\"noopener noreferrer\">Linkedin</a>");
        }
        document.getElementById('certificatesOutput').textContent = certificates;
        // Generate the profile picture based on gender
        var profilePicture = getProfilePicture(gender);
        var outputElement = document.getElementById('profilePictureOutput');
        if (outputElement) {
            outputElement.innerHTML = profilePicture;
        }
    }
});
// Function to get profile picture based on gender
function getProfilePicture(gender) {
    var profilePicture = '';
    if (gender === "male") {
        profilePicture = '<img src="/images/man-character-face-avatar-glasses-600nw-542759665.jpg" alt="Profile Picture">';
    }
    else if (gender === "female") {
        profilePicture = '<img src="/images/depositphotos_477176258-stock-illustration-girl-glamour-waitress-icon-filled.jpg" alt="Profile Picture">';
    }
    else {
        profilePicture = '<p>No profile picture available.</p>'; // Default case if gender is not recognized
    }
    return profilePicture;
}
// Event listener for the Save Changes button
(_b = document.getElementById('saveChanges')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    alert("Changes have been saved successfully!");
});
// Download CV button functionality
var downloadCvButton = document.getElementById('downloadCV');
downloadCvButton === null || downloadCvButton === void 0 ? void 0 : downloadCvButton.addEventListener('click', function () {
    var element = document.getElementById('cvOutput');
    if (element) {
        html2pdf()
            .from(element)
            .save('resume.pdf') // Name of the downloaded file
            .catch(function (error) {
            console.error('Error generating PDF:', error);
        });
    }
    else {
        console.error('Element with id "cvOutput" not found!');
    }
});
