Fancybox.bind('[data-fancybox="images"]', {
    //
})

Fancybox.bind('[data-fancybox="gallery"]', {
    //
})

const swiper = new Swiper(".slide-content", {
    autoplay: {
        delay: 3000, // Delay between slides in milliseconds
        disableOnInteraction: false, // Continue autoplay after user interaction
    },
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
        el: ".swiper-pagination1",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 2,
        },
    },
});

const swipe = new Swiper(".slide", {
    autoplay: {
        delay: 3000, // Delay between slides in milliseconds
        disableOnInteraction: false, // Continue autoplay after user interaction
    },
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },
});