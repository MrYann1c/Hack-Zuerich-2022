// Sleep (Timeout) Function (ms)
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function burgerMenu(check) {

    var burgerContainer = document.querySelector('.cc-burgerContainer');
    var burgerInner = document.querySelector('.cc-burgerInner');
    var burgerLinks = document.querySelectorAll('.cc-burgerLink');
    var burgerBtn = document.querySelector('.cc-burgerBtn');

    if (check == 1) {
        
        burgerContainer.style.display = "block";

        burgerInner.style.display = "flex";
        await sleep(300);
        burgerInner.style.width = "25%";
        burgerBtn.style.opacity = "0";
        await sleep(100);
        burgerBtn.innerHTML = "CLOSE";
        await sleep(100);
        burgerBtn.style.opacity = "1";
        
        burgerBtn.setAttribute( "onClick", "burgerMenu("+2+")" );

        for (var i = 0; burgerLinks.length > i; i++) {
            burgerLinks[i].style.display = "block";
        }
        await sleep(200);
        for (var i = 0; burgerLinks.length > i; i++) {
            burgerLinks[i].style.opacity = "1";
        }
    }
    else if (check == 2) {
        for (var i = 0; burgerLinks.length > i; i++) {
            burgerLinks[i].style.opacity = "0";
        }
        await sleep(200);
        for (var i = 0; burgerLinks.length > i; i++) {
            burgerLinks[i].style.display = "none";
        }

        burgerInner.style.width = "0%";
        burgerBtn.style.opacity = "0";
        await sleep(100);
        burgerBtn.innerHTML = "MENU";
        await sleep(100);
        burgerBtn.style.opacity = "1";

        burgerInner.style.display = "none";
        burgerContainer.style.display = "none";

        burgerBtn.setAttribute( "onClick", "burgerMenu("+1+")" );
    }
}
async function burgerStatus(check) {
    var burgerBtn = document.querySelector('.cc-burgerBtn');

    if (check == "hide") {
        burgerBtn.style.opacity = "0";
        await sleep(300);
        burgerBtn.style.display = "none";
    }
    else if (check == "show") {
        burgerBtn.style.display = "block";
        await sleep(300);
        burgerBtn.style.opacity = "1";

    }

}

// Reveal Glacier Section
async function revealGlacier(check) {
    var glacierSection = document.querySelector('.cc-glacSec');

    burgerStatus("hide");
    burgerMenu(2);
    startSVG();

    // Reset Values
    var glacierLength = document.querySelector('.cc-glacierLength');
    var glacierDecrease = document.querySelector('.cc-glacierDecrease');
    glacierLength.innerHTML = "17'975m";
    glacierDecrease.innerHTML = "- 292m";

    // Hide this Section if finished / else reveal
    if (check == "finish") {
        glacierSection.style.display = "none";
        glacierSection.style.opacity = "0";
    } else {
        glacierSection.style.display = "flex";
        await sleep(500);
        glacierSection.style.opacity = "1";
    }
}

// Glacier Years (Title)
async function nextYear(year) {

    let object1 = document.getElementById('glace');
    let svg = object1.contentDocument.getElementById('ePYb7phjKf81');

    var glacierLength = document.querySelector('.cc-glacierLength');
    var glacierDecrease = document.querySelector('.cc-glacierDecrease');
    var yearTitle = document.querySelector('.cc-data1Title');
    var glacierText = document.getElementById('cc-glacierText');
    
    var currentYear = year;

    if (currentYear == 1900) {
        var newTitle = "1931 - 1960";
        var actualYear = "1931";

        glacierLength.style.opacity = "0";        
        glacierDecrease.style.opacity = "0";
        glacierText.style.opacity = "0";
        yearTitle.style.opacity = "0";
        await sleep(200);
        glacierText.innerHTML = "From 1930 to 1960, the glaciers lost an average of 523 metres in length. Compared to 1900, they even lost 810 metres.";
        glacierLength.innerHTML = "17'683m";
        glacierDecrease.innerHTML = "- 523m";
        yearTitle.innerHTML = newTitle;
        await sleep(200);
        glacierLength.style.opacity = "1";        
        glacierDecrease.style.opacity = "1";
        glacierText.style.opacity = "1";
        yearTitle.style.opacity = "1";

        
        svg.svgatorPlayer.ready(async function(player) {
            player.play();
            await sleep(2500);
            player.pause();
        });


    }
    else if (currentYear == 1931) {
        newTitle = "1961 - 1990";
        actualYear = "1961";

        glacierLength.style.opacity = "0";        
        glacierDecrease.style.opacity = "0";
        glacierText.style.opacity = "0";
        yearTitle.style.opacity = "0";
        await sleep(200);
        glacierText.innerHTML = "By 1990, the glaciers had lost a further 625 metres in length. Compared to 1900, this is already more than 1.5 kilometres.";
        glacierLength.innerHTML = "17'160m";
        glacierDecrease.innerHTML = "- 625m";
        yearTitle.innerHTML = newTitle;
        await sleep(200);
        glacierLength.style.opacity = "1";        
        glacierDecrease.style.opacity = "1";
        glacierText.style.opacity = "1";
        yearTitle.style.opacity = "1";

        svg.svgatorPlayer.ready(async function(player) {
            player.play();
            await sleep(2500);
            player.pause();
        });
    }
    else if (currentYear == 1961) {
        newTitle = "1991 - 2020";
        actualYear = "1991";

        glacierLength.style.opacity = "0";        
        glacierDecrease.style.opacity = "0";
        glacierText.style.opacity = "0";
        yearTitle.style.opacity = "0";
        await sleep(200);
        glacierText.innerHTML = "In the last 30 years, the glaciers have lost another 1000 metres in length. This means that since 1900, Swiss glaciers have lost an average of 2.5 kilometres in length.";
        glacierLength.innerHTML = "16'535m";
        glacierDecrease.innerHTML = "- 1000m";
        yearTitle.innerHTML = newTitle;
        await sleep(200);
        glacierLength.style.opacity = "1";        
        glacierDecrease.style.opacity = "1";
        glacierText.style.opacity = "1";
        yearTitle.style.opacity = "1";

        svg.svgatorPlayer.ready(async function(player) {
            player.play();
            await sleep(2500);
            player.pause();
        });
    }

    var glacierContinue = document.getElementById('cc-glacierContinue');

    if (actualYear != "1991") {
        glacierContinue.setAttribute( "onClick", "nextYear("+actualYear+")" );
    } else {
        glacierContinue.setAttribute( "onClick", "revealTemperature()" );
        await sleep(200);
        glacierContinue.style.opacity = "0";
        await sleep(200);
        glacierContinue.innerHTML = "Next Chapter";
        await sleep(200);
        glacierContinue.style.opacity = "1";
    }
}

// Start/Stop Glacier SVG Animation
async function startSVG() {
    let object1 = document.getElementById('glace');

    object1.addEventListener("load", function() {
        let svg = object1.contentDocument.getElementById('ePYb7phjKf81');

        svg.svgatorPlayer.ready(function(player) {
            player.play();
            player.pause();
        });
    });
}

// Reveal Temperature Section
async function revealTemperature(check) {
    var tempSec = document.querySelector('.cc-tempSec');

    burgerStatus("hide");
    burgerMenu(2);

    // Hide this Section if finished / else reveal
    if (check == "finish") {
        tempSec.style.display = "none";
        tempSec.style.opacity = "0";
    } else {
        tempSec.style.display = "block";
        await sleep(500);
        tempSec.style.opacity = "1";
        await sleep(500);
    }

    // Hide Glacier
    revealGlacier("finish");
}

async function nextTemp(check) {
    var tempContinue = document.getElementById('cc-tempContinue');
    var swissImage = document.querySelector('.cc-tempSwiss');
    var tempTitle = document.querySelector('.cc-tempSubTitle');

    var defaultPath = "/images/temperature/cc-";
    var ext = ".png";

    if (check == 1) {
        var next = 2;
        swissImage.style.opacity = "0";
        tempTitle.style.opacity = "0";
        await sleep(200);
        swissImage.src = defaultPath + "1991-2000" + ext;
        tempTitle.innerHTML = "1991 - 2000";
        await sleep(100);
        swissImage.style.opacity = "1";
        tempTitle.style.opacity = "1";
    }
    else if (check == 2) {
        var next = 3;
        swissImage.style.opacity = "0";
        tempTitle.style.opacity = "0";
        await sleep(200);
        swissImage.src = defaultPath + "2001-2010" + ext;
        tempTitle.innerHTML = "2001 - 2010";
        await sleep(100);
        swissImage.style.opacity = "1";
        tempTitle.style.opacity = "1";
    }
    else if (check == 3) {
        var next = 4;
        swissImage.style.opacity = "0";
        tempTitle.style.opacity = "0";
        await sleep(200);
        swissImage.src = defaultPath + "2011-2020" + ext;
        tempTitle.innerHTML = "2011 - 2020";
        await sleep(100);
        swissImage.style.opacity = "1";
        tempTitle.style.opacity = "1";
    }
    else if (check == 4) {
        var next = 5;
        swissImage.style.opacity = "0";
        tempTitle.style.opacity = "0";
        await sleep(200);
        swissImage.src = defaultPath + "Hottest-year-2015" + ext;
        tempTitle.innerHTML = "3. Hottest Year - 2015";
        await sleep(100);
        swissImage.style.opacity = "1";
        tempTitle.style.opacity = "1";
    }
    else if (check == 5) {
        var next = 6;
        swissImage.style.opacity = "0";
        tempTitle.style.opacity = "0";
        await sleep(200);
        swissImage.src = defaultPath + "Hottest-year-2018" + ext;
        tempTitle.innerHTML = "2. Hottest Year - 2018";
        await sleep(100);
        swissImage.style.opacity = "1";
        tempTitle.style.opacity = "1";
    }
    else if (check == 6) {
        swissImage.style.opacity = "0";
        tempTitle.style.opacity = "0";
        await sleep(200);
        swissImage.src = defaultPath + "Hottest-year-2020" + ext;
        tempTitle.innerHTML = "Hottest Year - 2020";
        await sleep(100);
        swissImage.style.opacity = "1";
        tempTitle.style.opacity = "1";
    }

    tempContinue.setAttribute( "onClick", "nextTemp("+next+")" );

    if (check == 6) {
        tempContinue.setAttribute( "onClick", "revealRainfall()" );
        await sleep(200);
        tempContinue.style.opacity = "0";
        await sleep(200);
        tempContinue.innerHTML = "Next Chapter";
        await sleep(200);
        tempContinue.style.opacity = "1";
    }
}

// Reveal Rainfall Section
async function revealRainfall(check) {
    var rainSec = document.querySelector(".cc-rainSec");

    burgerStatus("hide");
    burgerMenu(2);

    // Hide this Section if finished / else reveal
    if (check == "finish") {
        rainSec.style.display = "none";
        rainSec.style.opacity = "0";
    } else {
        rainSec.style.display = "block";
        await sleep(500);
        rainSec.style.opacity = "1";
        await sleep(500);
    }

    await sleep(300);
    revealTemperature("finish");
}

// Reveal Energy Page
async function revealEnergy(check) {
    var energySec = document.querySelector('.cc-energySec');

    burgerStatus("hide");
    burgerMenu(2);

    // Hide this Section if finished / else reveal
    if (check == "finish") {
        energySec.style.display = "none";
        energySec.style.opacity = "0";
    } else {
        energySec.style.display = "block";
        await sleep(500);
        energySec.style.opacity = "1";
        await sleep(500);
    }

    await sleep(300);
    revealRainfall("finish");
}

// Next Energy
async function nextEnergy(check) {
    var energyContinue = document.getElementById('cc-energyContinue');
    var energyValues = document.querySelectorAll('.cc-energyGridText');
    var energyGridItems = document.querySelectorAll('.cc-energyGridItem');
    var energyTitle = document.querySelector(".cc-energyYearTitle");

    if (check == 1) {
        var next = 2;
        array = ["34%","18%","18%","2%","21%","7%","0%","0%","0%"];
        var yearTitle = "1941 - 1970";
    } else if (check == 2) {
        var next = 3;
        array = ["38%","29%","20%","7%","2%","3%","1%","0.8%","0.2%"];
        var yearTitle = "1971 - 2000";
    } else if (check == 3) {
        array = ["19%","33%","24%","13%","1%","4%","2%","2%","2%"];
        var yearTitle = "2000 - 2021";
    }

    for (var i = 0; energyValues.length > i; i++) {
        energyValues[i].innerHTML = array[i];
    }

    energyTitle.style.opacity = "0";
    await sleep(200);
    energyTitle.innerHTML = yearTitle;
    await sleep(200);
    energyTitle.style.opacity = "1";

    energyContinue.setAttribute( "onClick", "nextEnergy("+next+")" );

    if (check == 3) {
        energyContinue.setAttribute( "onClick", "revealPopulation()" );
        await sleep(200);
        energyContinue.style.opacity = "0";
        await sleep(200);
        energyContinue.innerHTML = "Next Chapter";
        await sleep(200);
        energyContinue.style.opacity = "1";
    }
}

// Reveal Population Section
async function revealPopulation(check) {
    var popSec = document.querySelector('.cc-popSec');

    burgerStatus("hide");
    burgerMenu(2);

    // Hide this Section if finished / else reveal
    if (check == "finish") {
        popSec.style.display = "none";
        popSec.style.opacity = "0";
    } else {
        popSec.style.display = "block";
        await sleep(500);
        popSec.style.opacity = "1";
        await sleep(500);
    }

    await sleep(300);
    revealEnergy("finish");
}