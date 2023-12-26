
    var carousel = document.getElementById('image-carousel');
    const items = document.querySelectorAll('.carousel-image');
    const totalItems = items.length;
    let currentIndex = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(${-currentIndex * 300}px)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }


  // Automatic slideshow