// Select the class bubble
time = document.getElementsByClassName('bubbles')[0];

// padding values for desktop
var fish2move = 100;
var fish3move = 900;
var fish4move = 1200;

const fish1 = document.getElementById('fish1');
const fish2 = document.getElementById('fish2');
const fish3 = document.getElementById('fish3');
const fish4 = document.getElementById('fish4');

function getNumericStyleValue(element, property, fallback = 0) {
    const value = parseFloat(getComputedStyle(element)[property]);
    return Number.isNaN(value) ? fallback : value;
}

const baseFishPositions = {
    fish1: {
        top: getNumericStyleValue(fish1, 'top'),
        left: getNumericStyleValue(fish1, 'left')
    },
    fish2: {
        top: getNumericStyleValue(fish2, 'top'),
        left: getNumericStyleValue(fish2, 'left')
    },
    fish3: {
        top: getNumericStyleValue(fish3, 'top'),
        left: getNumericStyleValue(fish3, 'left')
    },
    fish4: {
        top: getNumericStyleValue(fish4, 'top'),
        left: getNumericStyleValue(fish4, 'left')
    }
};

if (screen.width < 400) {

    //Change transformation duration and translatey for mobile view
    time.style.setProperty('--transform-duration', '15s')
    time.style.setProperty('--transform-y', '-700vh')

    // padding values for mobile
    fish2move = 1680;
    fish3move = 3000;
    fish4move = 4300;
}



window.addEventListener('scroll', function () {

    let value = window.scrollY;   //Get Scroll Value (Mobile - High)

    text.style.top = 50 + value * -0.2 + '%';
    cloud.style.left = value * 2 + 'px';

    bird1.style.top = value * 0.1 + 'px';
    bird1.style.left = value * 1 + 'px';

    bird2.style.top = value * -0.1 + 'px';
    bird2.style.left = value * -2 + 'px';

    explore.style.marginTop = value * 1.5 + 'px';

    rocks.style.top = value * -0.14 + 'px';

    forest.style.top = value * 0.4 + 'px';
    sky.style.top = value * 0.25 + 'px';
    mountains.style.top = value * 0.25 + 'px';

    header.style.top = value * 0.7 + 'px';
    sun.style.top = value * 1 + 'px';

    //To prevent splash to move above sea water
    if (value < 380) {
        splash.style.top = 20 + value * -0.3 + 'px';
    }

    // Move fishes diagonally from top-left to bottom-right
    const fish1Shift = Math.max(0, value - 100);
    const fish2Shift = Math.max(0, value - fish2move);
    const fish3Shift = Math.max(0, value - fish3move);
    const fish4Shift = Math.max(0, value - fish4move);

    fish1.style.top = baseFishPositions.fish1.top + fish1Shift + 'px';
    fish1.style.left = baseFishPositions.fish1.left + fish1Shift + 'px';

    fish2.style.top = baseFishPositions.fish2.top + fish2Shift + 'px';
    fish2.style.left = baseFishPositions.fish2.left + fish2Shift + 'px';

    fish3.style.top = baseFishPositions.fish3.top + fish3Shift + 'px';
    fish3.style.left = baseFishPositions.fish3.left + fish3Shift + 'px';

    fish4.style.top = baseFishPositions.fish4.top + fish4Shift + 'px';
    fish4.style.left = baseFishPositions.fish4.left + fish4Shift + 'px';
})


// Contains the link for all social media handles
var links = document.getElementsByClassName("social-media");

links[0].addEventListener("click", () => { openlink(1) });
links[1].addEventListener("click", () => { openlink(2) });
links[2].addEventListener("click", () => { openlink(3) });
links[3].addEventListener("click", () => { openlink(4) });

function openlink(x) {
    if (x == 1) {
        window.open("https://www.instagram.com/_.vini._02_/", "_blank");
    }
    if (x == 2) {
        window.open("https://www.linkedin.com/in/vineet-kumar-gupta-2833ab196/", "_blank");
    }
    if (x == 3) {
        window.open("https://github.com/VineetKumar02", "_blank");
    }
    if (x == 4) {
        window.open("https://vineet-portfolio-site.netlify.app/", "_blank");
    }
}