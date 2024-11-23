// Select the carousel container element from the DOM
const carousel = document.querySelector('.carousel');

// Select all the individual carousel items from the DOM (convert NodeList to Array)
let items = Array.from(document.querySelectorAll('.carousel-item'));

// Select the previous and next navigation buttons from the DOM
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Function to update the carousel display order dynamically
function updateCarousel() {
    // Append items back in the correct order
    items.forEach((item) => {
        carousel.appendChild(item);
    });
}

// Event listener for the 'previous' button click
prevBtn.addEventListener('click', () => {
    // Remove the last element from the array and insert it at the beginning
    const lastItem = items.pop();
    items.unshift(lastItem);

    // Update the carousel to reflect the new order
    updateCarousel();
});

// Event listener for the 'next' button click
nextBtn.addEventListener('click', () => {
    // Remove the first element from the array and push it to the end
    const firstItem = items.shift();
    items.push(firstItem);

    // Update the carousel to reflect the new order
    updateCarousel();
});

// Initialize the carousel display on page load
updateCarousel();
