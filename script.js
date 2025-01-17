// Fetch and display dog pictures
const gallery = document.getElementById('dog-gallery');
const loadMoreBtn = document.getElementById('load-more');

const dogAPIUrl = 'https://dog.ceo/api/breeds/image/random/9';

// Function to fetch and display dog pictures
async function fetchDogPictures() {
    try {
        const response = await fetch(dogAPIUrl);
        const data = await response.json();
        const dogImages = data.message;

        dogImages.forEach(url => {
            const imgElement = document.createElement('img');
            imgElement.src = url;
            imgElement.alt = "Cute dog";
            gallery.appendChild(imgElement);
        });
    } catch (error) {
        console.error("Error fetching dog images:", error);
    }
}

// Load initial dog pictures
fetchDogPictures();

// Load more pictures on button click
loadMoreBtn.addEventListener('click', fetchDogPictures);