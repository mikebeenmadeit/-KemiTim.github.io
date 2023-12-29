
    var carousel = document.getElementById('image-carousel');
    const items = document.querySelectorAll('.carousel-image');
    const totalItems = items.length;
    let currentIndex = 0;
    let intervalId;

    function updateCarousel() {
        carousel.style.transform = `translateX(${-currentIndex * 100}px)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }

   function startCarousel() {
        intervalId = setInterval(nextSlide, 2000); // Change 2000 to the desired interval in milliseconds (e.g., 2000 for 2 seconds)
    }

    function stopCarousel() {
        clearInterval(intervalId);
    }

    // Start the carousel when the page is loaded
    document.addEventListener('DOMContentLoaded', startCarousel);


  // Automatic slideshow
