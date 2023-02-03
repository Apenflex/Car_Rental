const rentalMainTimeLine = gsap.timeline();
const laptopScreen = window.matchMedia("(min-width: 993px)");

if (laptopScreen.matches) {
    // Animation rental-main
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
        // markers: true,
        end: "+=300",
        pin: true,
    });
    ScrollTrigger.create({
        trigger: ".history_card-white",
        start: "top top",
        // markers: true,
        end: "+=300",
        pin: true,
    });
    ScrollTrigger.create({
        trigger: ".history_card-black-light",
        start: "top top",
        // markers: true,
        end: "+=300",
        pin: true,
    });
    ScrollTrigger.create({
        trigger: ".history_card-white-dark",
        start: "top top",
        // markers: true,
        end: "+=100",
        pin: true,
    });

    // Scroll animation responsibility
    gsap.from(".section_name-responsibility", {
        scrollTrigger: {
            trigger: ".responsibility",
            start: "top 39%",
            // markers: true,
            end: "+=100px",
        },
        x: -100,
        opacity: 0,
    });
    gsap.from(".responsibility__title", {
        scrollTrigger: {
            trigger: ".responsibility",
            start: "top 40%",
            // markers: true,
            end: "+=100px",
        },
        x: -100,
        opacity: 0,
        delay: 0.2,
    });
    gsap.from(".responsibility__subtitle", {
        scrollTrigger: {
            trigger: ".responsibility",
            start: "top 10%",
            // markers: true,
            end: "+=100px",
        },
        y: 100,
        opacity: 0,
        delay: 0.3,
    });
    gsap.from(".responsibility-img", {
        scrollTrigger: {
            trigger: ".responsibility",
            start: "10% center",
            // markers: true,
            end: "+=650px",
            scrub: true,
        },
        y: 500,
        transformOrigin: "top top",
        ease: "none",
    });
    gsap.from(".responsibility__advantage-item", {
        scrollTrigger: {
            trigger: ".responsibility",
            start: "20% 20%",
            // markers: true,
            end: "+=200px",
        },
        x: -100,
        opacity: 0,
        delay: 0.3,
        stagger: 0.2,
    });
    gsap.from(".responsibility-btn", {
        scrollTrigger: {
            trigger: ".responsibility__descr",
            start: "top 40%",
            // markers: true,
            end: "+=50px",
        },
        y: 50,
        opacity: 0,
        delay: 0.2,
    });
    // Scroll animation offer
    gsap.from(".offer_wrapper_items", {
        scrollTrigger: {
            trigger: ".offer",
            start: "top top",
            // markers: true,
            end: "+=350px",
            scrub: true,
        },
        y: 140,
        transformOrigin: "top top",
        ease: "none",
    });
    // Scroll animation offer
    gsap.from(".executive_contacts-btn", {
        scrollTrigger: {
            trigger: ".executive__wrapper",
            start: "top 20%",
            // markers: true,
            end: "+=50px",
        },
        x: -100,
        opacity: 0,
    });
    gsap.from(".executive_offers-btn", {
        scrollTrigger: {
            trigger: ".executive__wrapper",
            start: "top 20%",
            // markers: true,
            end: "+=50px",
        },
        y: 50,
        opacity: 0,
        delay: 0.3,
    });
    // Scroll animation rates
    gsap.from(".rates_card-bg", {
        scrollTrigger: {
            trigger: ".rates",
            start: "5% 20%",
            // markers: true,
            end: "+=400px",
            scrub: true,
        },
        y: 350,
        opacity: 0,
        transformOrigin: "bottom bottom",
        ease: "none",
    });
    gsap.from(".rates_card-left", {
        scrollTrigger: {
            trigger: ".rates",
            start: "5% 30%",
            // markers: true,
            end: "+=200px",
            scrub: true,
        },
        x: 200,
        transformOrigin: "left left",
        ease: "none",
    });
    gsap.from(".rates_card-right", {
        scrollTrigger: {
            trigger: ".rates",
            start: "5% 20%",
            // markers: true,
            end: "+=200px",
            scrub: true,
        },
        x: -200,
        transformOrigin: "right right",
        ease: "none",
    });
    // Scroll animation staff
    gsap.from(".staff_card-title", {
        scrollTrigger: {
            trigger: ".staff_wrapper",
            start: "30% 40%",
            // markers: true,
            end: "+=40px",
        },
        y: -70,
        opacity: 0,
        delay: 0.2,
    });
    gsap.from(".staff-divider", {
        scrollTrigger: {
            trigger: ".staff_wrapper",
            start: "30% 40%",
            // markers: true,
            end: "+=40px",
        },
        scale: 0,
        opacity: 0,
        delay: 0.2,
        duration: 0.9,
    });
}