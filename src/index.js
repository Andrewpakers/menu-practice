import css from "./style.css";

const lines = document.querySelectorAll('.line');
const lineContainer = document.querySelector('.lineContainer');
const navbar = document.querySelector('.navbar');
const navbarItems = document.querySelectorAll('.navbarItem');
const navbarWidth = navbar.style.width;

// navbar.style.visibility = 'hidden';
navbar.style.width = '0px';

for (let i = 0; i < navbarItems.length; i++) {
    for (let j = 0; j < navbarItems[i].getElementsByTagName('div').length; j++) {
        // navbarItems[i].getElementsByTagName('div')[j].style.display = 'none';
        navbarItems[i].getElementsByTagName('div')[j].classList.add('hidden');
        
    }
    navbarItems[i].getElementsByTagName('span')[0].addEventListener('click', () => {
        for (let k = 0; k < navbarItems[i].getElementsByTagName('div').length; k++) {
            if (navbarItems[i].getElementsByTagName('div')[k].classList.contains('hidden')) {
                navbarItems[i].getElementsByTagName('div')[k].classList.remove('hidden');
                navbarItems[i].classList.add('expanded');
            } else {
                navbarItems[i].getElementsByTagName('div')[k].classList.add('hidden');
                navbarItems[i].classList.remove('expanded');
            }
        }
    });
}

lineContainer.addEventListener('click', () =>{
  /*  for (let i = 0; i < lines.length; i++) {
        if (lines[i].classList.contains('vertical')) {
            lines[i].classList.remove('vertical');
            lineContainer.classList.remove('vertical');
            navbar.style.visibility = 'visible';
        } else {
            lines[i].classList.add('vertical');
            lineContainer.classList.add('vertical');
            navbar.style.visibility = 'hidden';
        }
    } */
    if (lineContainer.style.transform !== 'rotate(90deg)') {
        lineContainer.style.transform = 'rotate(90deg)';
       // navbar.style.visibility = 'visible';
       navbar.style.width = navbarWidth;
    } else {
        lineContainer.style.transform = 'rotate(0deg)';
      //  navbar.style.visibility = 'hidden';
      navbar.style.width = '0px';
    }
});

const imageContainer = document.querySelector('.imageContainer');
let carouselShift = 200;
imageContainer.style.transform = `translateX(${carouselShift}px)`;

function moveCarousel() {
    let currentTimer;
    return {
        start() {
            currentTimer = setInterval(myTimer, 5000);
        },
        restart() {
            clearInterval(currentTimer);
            this.start();
        }
    }
    


}

function myTimer() {
    if (carouselShift === -1000){
        carouselShift = 200;
        imageContainer.style.transform = `translateX(${carouselShift}px)`;
    } else {
        carouselShift -= 400;
        imageContainer.style.transform = `translateX(${carouselShift}px)`;
    }
}

const carousel = moveCarousel();
carousel.start();

const carouselControls = document.querySelectorAll('.control');
for (let i = 0; i < carouselControls.length; i++) {
    carouselControls[i].addEventListener('click', () => {
        const shiftFactor = 600 - (400 * Number(carouselControls[i].id));
        imageContainer.style.transform = `translateX(${shiftFactor}px)`;
        carouselShift = shiftFactor;
        carousel.restart();

    });
}