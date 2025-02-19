const colleges = [
    {
        id: 1, // Added id to each college object
        name: "BYUI IDAHO",

    },
    {
        id: 2, // Added id to each college object
        name: "PATHWAYCONNECT"

    },
    {
        id: 3, // Added id to each college object
        name: "ENSIGN COLLEGE"

    }

];

window.onload = () => {
    const collegeNameSelect = document.getElementById('CollegeName');

    if (collegeNameSelect) { //Null check
        colleges.forEach(college => {
            const option = document.createElement('option');
            option.value = college.id;
            option.textContent = college.name;
            collegeNameSelect.appendChild(option);
        });
    } else {
        console.error("Element with id 'CollegeName' not found in the DOM.");
    }
};

function updateFooterContent() {
    const lastModifiedElement = document.getElementById('lastModified');

    if (lastModifiedElement) { //Null check
        const lastModifiedDate = document.lastModified;
        lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`; // Corrected template literal
    } else {
        console.error("Element with id 'lastModified' not found in the DOM.");
    }
}

updateFooterContent();

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const mainContent = document.getElementById('main-content');

    if (hamburger && navLinks && mainContent) { // Null check
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            hamburger.classList.toggle('open');
            if (navLinks.classList.contains('show')) {
                mainContent.style.marginTop = '40%';
            } else {
                mainContent.style.marginTop = '0';
            }
        });
    } else {
        console.error("One or more required elements not found in the DOM. Check your HTML for hamburger, nav-links, and main-content.");
    }

});

// Adjust main content margin when resizing to larger screens
window.addEventListener('resize', () => {
    const navLinks = document.getElementById('nav-links');
    const mainContent = document.getElementById('main-content');
    if (navLinks && mainContent && window.innerWidth > 768) { // Null check
        navLinks.classList.remove('show');
        hamburger.classList.remove('open');  // Close hamburger on resize
        mainContent.style.marginTop = '0';
    }
});