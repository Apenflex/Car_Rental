const swiperOpen = document.querySelectorAll(".offices_image");
const swiperOverlay = document.querySelector(".overlay_swiper_block");
const swiperCloseButton = document.querySelector(".swiper__close");


swiperOpen.forEach(function (item) {
    item.addEventListener("click", function (e) {
        swiperOverlay.classList.add("overlay_swiper_active");
    });
});

swiperOverlay.addEventListener("click", function (e) {
    if (swiperOverlay.classList.contains("overlay_swiper_active")) {
        swiperOverlay.classList.remove("overlay_swiper_active");
    }
});

swiperCloseButton.addEventListener("click", function (e) {
        if (swiperOverlay.classList.contains("overlay_swiper_active")) {
            swiperOverlay.classList.remove("overlay_swiper_active");
        }
});
