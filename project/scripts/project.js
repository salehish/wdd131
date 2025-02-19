document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const mainContent = document.getElementById('main-content');
    const lastModified = document.getElementById('lastModified');

    if (hamburger && navLinks && mainContent && lastModified) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            hamburger.classList.toggle('open');
            if (navLinks.classList.contains('show')) {
                mainContent.style.marginTop = '40%';
            } else {
                mainContent.style.marginTop = '0';
            }
        });

        lastModified.textContent = `Last Modified: ${document.lastModified}`;
    } else {
        console.error("One or more required elements not found in the DOM.  Check your HTML.");
    }

    // Adjust main content margin when resizing to larger screens
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('show');
            hamburger.classList.remove('open');  // Close the hamburger
            mainContent.style.marginTop = '0';
        }
    });
});