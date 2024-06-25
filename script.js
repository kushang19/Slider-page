document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 20,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        on: {
            slideChangeTransitionEnd: function() {
                updateActiveSlide();
            }
        }
    });

    function updateActiveSlide() {
        var slides = document.querySelectorAll('.swiper-slide');
        slides.forEach(slide => slide.classList.remove('swiper-slide-center', 'swiper-slide-inactive'));

        var activeIndex = swiper.activeIndex;
        var totalSlides = slides.length;

        slides.forEach((slide, index) => {
            if (index === (activeIndex + 1) % totalSlides) {
                slide.classList.add('swiper-slide-center');
            } else if (index === (activeIndex + 0) % totalSlides || index === (activeIndex + 2) % totalSlides) {
                slide.classList.add('swiper-slide-inactive');
            }
        });
    }

    // Initial update
    updateActiveSlide();
});