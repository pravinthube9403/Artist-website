
new Swiper(".art-Swiper", {
    slidesPerView: 5,
    centeredSlides: false,
    spaceBetween: 24,
    breakpoints: {
        1280: {
            slidesPerView: 5,
            spaceBetween: 24,
        },
        1024: {
            slidesPerView: 3.9,
            spaceBetween: 24,
        },
        991: {
            slidesPerView: 3.5,
            spaceBetween: 24,
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        575: {
            slidesPerView: 2.3,
            spaceBetween: 24,
        },
        450: {
            slidesPerView: 1.6,
            spaceBetween: 24,
        },
        0: {
            slidesPerView: 1.5,
            spaceBetween: 24,
        },
    },
});





new Swiper(".masterpiece-Swiper", {
    slidesPerView: 4.3,
    centeredSlides: false,
    spaceBetween: 24,
    breakpoints: {
        1280: {
            slidesPerView: 4.3,
            spaceBetween: 24,
        },
        1024: {
            slidesPerView: 3.5,
            spaceBetween: 24,
        },
        991: {
            slidesPerView: 3.2,
            spaceBetween: 24,
        },

        768: {
            slidesPerView: 3.1,
            spaceBetween: 24,
        },
        575: {
            slidesPerView: 1.5,
            spaceBetween: 24,
        },
        0: {
            slidesPerView: 1.2,
            spaceBetween: 24,
        },

    },
});

new Swiper(".gallery-Swiper", {
    navigation: {
        nextEl: ".gallery-content-wrapper .swiper-button-next", 
        prevEl: ".gallery-content-wrapper .swiper-button-prev",
    },

});


new Swiper(".incredible-Swiper", {
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 24,

    navigation: {
        nextEl: ".incredible-Swiper .swiper-button-next",
        prevEl: ".incredible-Swiper .swiper-button-prev",
    },
    breakpoints: {
        1280: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        1024: {
            slidesPerView: 2.9,
            spaceBetween: 24,
        },
        991: {
            slidesPerView: 2.5,
            spaceBetween: 24,
        },

        768: {
            slidesPerView: 1.9,
            spaceBetween: 24,
        },
        575: {
            slidesPerView: 1.9,
            spaceBetween: 24,
        },
        0: {
            slidesPerView: 1.2,
            spaceBetween: 24,
        },
    },
});
