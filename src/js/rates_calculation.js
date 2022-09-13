const result = document.querySelector('.calculating__result span');

let currentRatio = 0;
let dayRatio = 0;


function calcTotal() {
    result.textContent = currentRatio * dayRatio;
};

calcTotal();

function addAutoAndDaysClassEventListners() {
    const elementsAuto = document.querySelectorAll('.auto-class');
    const elementsDays = document.querySelectorAll('.days-class');

    elementsAuto.forEach(elem => {
        elem.addEventListener('click', (e) => {
            currentRatio = +e.target.dataset.ratio;
            console.log(currentRatio);
        });
    });

    elementsDays.forEach(elem => {
        elem.addEventListener('click', (e) => {
            dayRatio = +e.target.dataset.ratio;
            console.log(dayRatio);
        });
    });
}
addAutoAndDaysClassEventListners();

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