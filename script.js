document.addEventListener('DOMContentLoaded', () => {
    // Get all the necessary elements from the DOM
    const gridItems = document.querySelectorAll('.grid-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');

    // Add a click event listener to each grid item
    gridItems.forEach(item => {
        item.addEventListener('click', () => {
            // Get the image source from the clicked item
            const imgSrc = item.querySelector('img').src;
            
            // Set the image source for the lightbox
            lightboxImg.src = imgSrc;
            
            // Show the lightbox by adding the 'active' class
            lightbox.classList.add('active');
        });
    });

    // Function to close the lightbox
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        // Optional: Reset image src after closing to prevent flash of old image
        setTimeout(() => { lightboxImg.src = ''; }, 300); 
    };

    // Close the lightbox when the close button is clicked
    closeBtn.addEventListener('click', closeLightbox);

    // Close the lightbox when clicking on the background (outside the image)
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
});