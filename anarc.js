


const sliderTrack = document.querySelector(".slider-track");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;
const cards = document.querySelectorAll(".card");
const totalCardss = cards.length;
let autoplayInterval;

// Function to update the slider position
function updateSlider() {
  sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Function to go to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalCardss;
  updateSlider();
}

// Function to go to the previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalCards) % totalCardss;
  updateSlider();
}

// Event listeners for buttons
prevButton.addEventListener("click", () => {
  clearInterval(autoplayInterval);
  prevSlide();
});

nextButton.addEventListener("click", () => {
  clearInterval(autoplayInterval);
  nextSlide();
});

// Autoplay functionality
function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, 3000);
}




///////////////////////// big slider cards7
