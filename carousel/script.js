const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

// Function to update the carousel position
function updateCarousel() {
    const offset = -currentIndex * 100; // Shift the carousel by the width of one item
    carousel.style.transform = `translateX(${offset}%)`;
}

// Event listener for previous button
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
    updateCarousel();
});

// Event listener for next button
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

// Initialize carousel position
updateCarousel();
