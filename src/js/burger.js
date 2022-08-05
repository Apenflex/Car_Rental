(function () {
const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.nav__menu');
const burgerLogo = document.querySelector('.header__logo');
    burger.addEventListener('click', function (e) {
        burger.classList.toggle('burger_active');
        burgerMenu.classList.toggle('nav__menu-active');
        burgerLogo.classList.toggle('header__logo-active');
    });

    const navLinks = document.querySelectorAll('.nav__menu-link');
    navLinks.forEach((navLink) => {
        navLink.addEventListener('click', (_) => {
            if (burger.classList.contains('burger_active')) {
                burger.classList.remove('burger_active');
                burgerMenu.classList.remove('nav__menu-active');
                burgerLogo.classList.remove('header__logo-active');
            }
        }
    );
    });
})();