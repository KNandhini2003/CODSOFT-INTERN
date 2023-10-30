// script.js
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Initially, show the first slide
showSlide(currentSlide);

// Automatically switch slides every 5 seconds
setInterval(nextSlide, 5000);
// Add this JavaScript code to your HTML file or an external script file
document.querySelectorAll('.featured-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('clicked');
    });
});
