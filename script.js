// Get all the images
const images = document.querySelectorAll('.dog-image');
// Get the modal and modal content
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
// Get the close button
const closeModal = document.getElementById('closeModal');

// Function to open the modal with the clicked image
images.forEach(image => {
    image.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImage.src = this.src; // Set the src of the modal image to the clicked image
    });
});

// Close the modal when the user clicks the close button
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close the modal if the user clicks outside the image
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});