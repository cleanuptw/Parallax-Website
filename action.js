// Select the class bubble
time = document.getElementsByClassName('bubbles')[0];

// Vertical movement speeds for fishes (desktop defaults)
var fishSpeeds = {
    fish1: 0.25,
    fish2: 0.2,
    fish3: 0.15,
    fish4: 0.12,
};

if (screen.width < 400) {

    //Change transformation duration and translatey for mobile view
    time.style.setProperty('--transform-duration', '15s')
    time.style.setProperty('--transform-y', '-700vh')

    // Reduce speed for mobile screens to keep movement smooth
    fishSpeeds = {
        fish1: 0.18,
        fish2: 0.15,
        fish3: 0.12,
        fish4: 0.1,
    };
}

const fishBaseBottoms = {
    fish1: parseFloat(getComputedStyle(fish1).bottom),
    fish2: parseFloat(getComputedStyle(fish2).bottom),
    fish3: parseFloat(getComputedStyle(fish3).bottom),
    fish4: parseFloat(getComputedStyle(fish4).bottom),
};


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

    //Move fishes vertically from bottom to top
    fish1.style.bottom = fishBaseBottoms.fish1 + value * fishSpeeds.fish1 + 'px';
    fish2.style.bottom = fishBaseBottoms.fish2 + value * fishSpeeds.fish2 + 'px';
    fish3.style.bottom = fishBaseBottoms.fish3 + value * fishSpeeds.fish3 + 'px';
    fish4.style.bottom = fishBaseBottoms.fish4 + value * fishSpeeds.fish4 + 'px';
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