const temples = [
    {
        name: "Salt Lake Temple",
        location: "Salt Lake City, Utah",
        dedicated: 1893,
        area: 253000,
        image: "https://example.com/salt-lake-temple.jpg"
    },
    {
        name: "Los Angeles California Temple",
        location: "Los Angeles, California",
        dedicated: 2000,
        area: 476000,
        image: "https://example.com/los-angeles-temple.jpg"
    },
    {
        name: "Washington D.C. Temple",
        location: "Washington, D.C.",
        dedicated: 1974,
        area: 162000,
        image: "https://example.com/washington-temple.jpg"
    },

    {
        name: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: 2019,
        area: 270000,
        image: "https://example.com/rome-temple.jpg"
    },
    {
        name: "Phoenix Arizona Temple",
        location: "Phoenix, Arizona",
        dedicated: 2014,
        area: 200000,
        image: "https://example.com/phoenix-temple.jpg"
    },
    {
        name: "Vancouver Canada Temple",
        location: "Langley, British Columbia, Canada",
        dedicated: 2010,
        area: 80000,
        image: "https://example.com/vancouver-temple.jpg"
    }
];

function createTempleCards(templesToDisplay) {
    const templeContainer = document.getElementById('temple-cards');
    templeContainer.innerHTML = ''; 

    templesToDisplay.forEach(temple => {
        const card = `
            <div class="temple-card">
                <h2>${temple.name}</h2>
                <p>${temple.location}</p>
                <p>Dedicated: ${temple.dedicated}</p>
                <p>Area: ${temple.area.toLocaleString()} sq ft</p>
                <img src="${temple.image}" alt="${temple.name}" loading="lazy">
            </div>
        `;
        templeContainer.innerHTML += card;
    });
}

createTempleCards(temples);

document.getElementById('home').addEventListener('click', () => createTempleCards(temples));
document.getElementById('old').addEventListener('click', () => createTempleCards(temples.filter(t => t.dedicated < 1900)));
document.getElementById('new').addEventListener('click', () => createTempleCards(temples.filter(t => t.dedicated > 2000)));
document.getElementById('large').addEventListener('click', () => createTempleCards(temples.filter(t => t.area > 90000)));
document.getElementById('small').addEventListener('click', () => createTempleCards(temples.filter(t => t.area < 10000)));

document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;