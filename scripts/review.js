window.onload = () => {
    // Initialize review counter if it doesn't exist
    if (localStorage.getItem('reviewCounter') === null) {
        localStorage.setItem('reviewCounter', '0');
    }

    // Get and update the review counter
    let reviewCounter = parseInt(localStorage.getItem('reviewCounter'), 10); // Use radix 10 for integer conversion
    reviewCounter += 1;
    localStorage.setItem('reviewCounter', reviewCounter.toString());

    // Display the review counter
    const reviewCounterElement = document.getElementById('reviewCounter');
    if (reviewCounterElement) {  // Null check for the element
        reviewCounterElement.textContent = reviewCounter;
    } else {
        console.error("Element with id 'reviewCounter' not found.");
    }

    // Update the last modified date
    const lastModifiedElement = document.getElementById('lastModified'); // Corrected ID
    if (lastModifiedElement) { // Null check
        const lastModifiedDate = document.lastModified;
        lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`; // Corrected template literal and ID
    } else {
        console.error("Element with id 'lastModified' not found.");
    }
};