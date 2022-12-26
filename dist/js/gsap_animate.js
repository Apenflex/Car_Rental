const rentalMainTimeLine = gsap.timeline();

rentalMainTimeLine.fromTo(
    ".header__logo",
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, duration: 1.2 },
    1,
)
.fromTo(
    ".nav__menu a", 
    { opacity: 0, y: -100 }, 
    { opacity: 1, y: 0, duration: 1.2, stagger: 0.2 },
    1.7,
)
.fromTo(
    ".rental-text",
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, duration: 2.2 },
    2,
);

// Scroll animation rental-cars
gsap.from(".cars-card", {
    scrollTrigger: {
        trigger: ".rental-cars",
        start: "-15% center",
        // markers: true,
        end: "+=100%",
    },
    opacity: 0,
    transformOrigin: "top top",
    ease: "none",
    stagger: 0.3,
});

// Scroll animation about_us
gsap.from(".section_name-about", {
    scrollTrigger: {
        trigger: ".about_us",
        start: "-25% center",
        // markers: true,
        end: "+=200px",
    },
    x: -100,
    opacity: 0,
});
gsap.from(".title__about_us", {
    scrollTrigger: {
        trigger: ".about_us",
        start: "-19% center",
        // markers: true,
        end: "+=100px",
    },
    x: -100,
    opacity: 0,
    delay: 0.2,
});
gsap.from(".about_us-subtitle", {
    scrollTrigger: {
        trigger: ".about_us",
        start: "-10% center",
        // markers: true,
        end: "+=50px",
    },
    y: 50,
    opacity: 0,
    delay: 0.2,
});
gsap.from(".about_us-btn", {
    scrollTrigger: {
        trigger: ".about_us",
        start: "47% center",
        // markers: true,
        end: "+=50px",
    },
    y: 50,
    opacity: 0,
    delay: 0.2,
});

// Scroll animation history
ScrollTrigger.create({
    trigger: ".history_card-black",
    start: "top top",
    markers: true,
    end: "+=300",
    pin: true,
});
ScrollTrigger.create({
    trigger: ".history_card-white",
    start: "top top",
    markers: true,
    end: "+=300",
    pin: true,
});
ScrollTrigger.create({
    trigger: ".history_card-black-light",
    start: "top top",
    markers: true,
    end: "+=300",
    pin: true,
});
ScrollTrigger.create({
    trigger: ".history_card-white-dark",
    start: "top top",
    markers: true,
    end: "+=100",
    pin: true,
});


