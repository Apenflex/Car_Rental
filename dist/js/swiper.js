const swiperOpen = document.querySelectorAll(".offices_wrapper_image");
const swiperOverlay = document.querySelector(".overlay_swiper_block");
const swiperCloseButton = document.querySelector(".swiper__close");

swiperOpen.forEach(function (item) {
    item.addEventListener("click", function (e) {
        swiperOverlay.classList.add("overlay_swiper_active");
    });
});

// swiperOverlay.addEventListener("click", (e) => {
//     if (e.target === swiperOverlay) {
//         swiperOverlay.classList.remove("overlay_swiper_active");
//     }
// });

swiperCloseButton.addEventListener("click", function (e) {
    if (swiperOverlay.classList.contains("overlay_swiper_active")) {
        swiperOverlay.classList.remove("overlay_swiper_active");
    }
});

const swiper = new Swiper(".swiper", {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});

const swiperFeedback = new Swiper(".swiperFeedback", {
    slidesPerView: 1,
    // Optional parameters
    direction: "horizontal",

    // loop: true,
    // loopedSlides : 3,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});

const swiperBrands = new Swiper(".swiperBrands", {
    loop: true,
    // direction: 'horizontal',
    // slidesPerView: 1,

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 576px
        576: {
            slidesPerView: 2,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
        },
        // when window width is >= 992px
        992: {
            slidesPerView: 3,
        },
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});
