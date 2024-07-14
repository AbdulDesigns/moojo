const scrollContainer = document.getElementById("servicesScroll");
const scrollLeftBtn = document.getElementById("scrollLeft");
const scrollRightBtn = document.getElementById("scrollRight");

function getCardWidth() {
  const card = document.querySelector(".service-card");
  return (
    card.offsetWidth + parseFloat(window.getComputedStyle(card).marginRight)
  );
}

function scroll(direction) {
  const cardWidth = getCardWidth();
  scrollContainer.scrollBy({
    left: cardWidth * direction,
    behavior: "smooth",
  });
}

scrollLeftBtn.addEventListener("click", () => scroll(-1));
scrollRightBtn.addEventListener("click", () => scroll(1));

// Add touch scrolling for mobile devices
let startX;
let scrollLeft;

scrollContainer.addEventListener("touchstart", (e) => {
  startX = e.touches[0].pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener("touchmove", (e) => {
  if (!startX) return;
  const x = e.touches[0].pageX - scrollContainer.offsetLeft;
  const walk = (x - startX) * 2; // Scroll-speed
  scrollContainer.scrollLeft = scrollLeft - walk;
});

scrollContainer.addEventListener("touchend", () => {
  startX = null;
});

const slider = document.getElementById("testimonialSlider");
const dotsContainer = document.getElementById("testimonialDots");
const slides = slider.children;
let currentSlide = 0;
let slideInterval;

// Create dot indicators
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
}

const dots = dotsContainer.children;

function goToSlide(n) {
  slider.style.transform = `translateX(-${n * 100}%)`;
  dots[currentSlide].classList.remove("active");
  dots[n].classList.add("active");
  currentSlide = n;
}

function nextSlide() {
  goToSlide((currentSlide + 1) % slides.length);
}

function startSlideShow() {
  slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

function stopSlideShow() {
  clearInterval(slideInterval);
}

slider.addEventListener("mouseenter", stopSlideShow);
slider.addEventListener("mouseleave", startSlideShow);

// Initialize the slideshow
goToSlide(0);
startSlideShow();

const videoPlaceholder = document.getElementById("videoPlaceholder");

videoPlaceholder.addEventListener("click", () => {
  // Replace this with your actual video embed code
  const videoEmbed =
    '<iframe width="100%" height="625" src="https://www.youtube.com/embed/dhxrHvgXpSM" title="Claude 3.5 Sonnet for vision" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
  videoPlaceholder.innerHTML = videoEmbed;
});
document
  .getElementById("customerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    // Here you would typically send the form data to your server
    console.log("Form submitted");
    // You can access form data like this:
    // const formData = new FormData(this);
    // console.log(formData.get('name'), formData.get('email'), etc.);
  });
w;
