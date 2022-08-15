(function scrollDown(e) {
    const counters = document.querySelectorAll('.count');
    // const speed = 10;
    if(window.pageYOffset > 4600){
        counters.forEach((counter) => {
            const updateCount = () => {
            const target = parseInt(+counter.getAttribute('data-target'));
            const count = parseInt(+counter.innerText);
            const increment = 1;
            // Math.trunc(target / speed)
                if (count < target) {
                    counter.innerText = count + increment;
                    setTimeout(updateCount, 200);
                }else {
                    counter.innerText = target;
                }
            };
            updateCount();
            }); 
    }
    window.addEventListener("scroll", scrollDown);
})();
