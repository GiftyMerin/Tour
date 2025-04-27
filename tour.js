const destinations = [
    {
        name: "Paris",
        description: "The city of lights, known for its art, fashion, and culture.",
        image: "https://via.placeholder.com/300x200?text=Paris"
    },
    {
        name: "New York",
        description: "The Big Apple, famous for its skyline and vibrant culture.",
        image: "https://via.placeholder.com/300x200?text=New+York"
    },
    {
        name: "Tokyo",
        description: "A bustling metropolis known for its modernity and tradition.",
        image: "https://via.placeholder.com/300x200?text=Tokyo"
    },
    {
        name: "Sydney",
        description: "Known for its Sydney Opera House and beautiful beaches.",
        image: "https://via.placeholder.com/300x200?text=Sydney"
    }
];

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    if (sectionId === 'destinations') {
        displayDestinations();
    }

    document.getElementById(sectionId).style.display = 'block';
}

function displayDestinations() {
    const destinationList = document.getElementById('destination-list');
    destinationList.innerHTML = '';

    destinations.forEach(destination => {
        const destinationDiv = document.createElement('div');
        destinationDiv.className = 'destination';
        destinationDiv.innerHTML = `
            <h3>${destination.name}</h3>
            <img src="${destination.image}" alt="${destination.name}">
            <p>${destination.description}</p>
        `;
        destinationList.appendChild(destinationDiv);
    });
}

// Initialize with home section
showSection('home');