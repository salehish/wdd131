document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const mainContent = document.getElementById('main-content');
    const lastModified = document.getElementById('lastModified'); // Correctly get the element

    if (hamburger && navLinks && mainContent && lastModified) { // Add null checks

      // Hamburger menu toggle
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            hamburger.classList.toggle('open');

            if (navLinks.classList.contains('show')) {
                mainContent.style.marginTop = '40%'; // Adjust margin when menu is open
            } else {
                mainContent.style.marginTop = '0'; // Reset margin when menu is closed
            }
        });

        // Update the last modified date (corrected template literal and spelling)
        lastModified.textContent = `Last Modified: ${document.lastModified}`;


        // Adjust main content margin when resizing to larger screens
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) { // Check screen width for larger screens
                navLinks.classList.remove('show');
                mainContent.style.marginTop = '0'; // Reset margin
                hamburger.classList.remove('open'); // Close hamburger icon
            }
        });
    } else {
        console.error("One or more required elements not found in the DOM.  Check your HTML for the following IDs: hamburger, nav-links, main-content, lastModified");
    }
});