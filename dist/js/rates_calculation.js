const result = document.querySelector('.calculating__result span');

let suv = 150;
let luxury = 390;
let sportsCar = 500;

let day = 3;
let week = 7;
let months = 30;


function calcTotal() {
    
    
    
};
function getStaticInformation(parentSelector, activeClass) {
    const elements = document.querySelectorAll(`${parentSelector} div`);

    elements.forEach(elem => {
        elem.addEventListener('click', (e) => {
            

            elements.forEach(elem => {
                elem.classList.remove(activeClass);
            });

            e.target.classList.add(activeClass);

            calcTotal();
        });
    });
}

getStaticInformation('#class', 'btn__choose_active');
getStaticInformation('.calculating__choose_big', 'btn__choose_active');