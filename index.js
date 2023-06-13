var scrap = 0;
var golden_scrap1 = 0;
var level = 0;
var maxlevel = 100;
var i = 0;
let golden_scrap = document.getElementById("golden-scrap");
let prestige_container = document.getElementById("prestige-container");
let collection_prestige_upgrades = document.getElementById("collection-prestige-upgrades")
let level_bar = document.getElementById("Level-bar")
let prestige_stars = document.getElementById("prestige-stars")

function scrapgain() {
    scrap += 1;
    document.getElementById("scrap_gain").textContent = scrap
}

if (scrap >= 100) {
    collection_prestige_upgrades.classList.add("open-prestige-container")
}

function golden_scrapGain() {
    if( scrap >= 100) {
        golden_scrap1 += 1
        scrap -= scrap
        document.getElementById("paragraph-golden-scrap-text").textContent = golden_scrap1
    }
    if ( golden_scrap1 >= 1 ) {
        scrap += 2
    }
}

function levelgain() {
    if ( i == 0 ) {
        i = 1;
        var elem = document.getElementById("leveling-bar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if ( width >= 350 ) {
            clearInterval(id);
            i = 0;
            } else {
                width++;
                elem.style.width = width
            }
        } 
    }
}

function prestige_containertoggle() {
    golden_scrap.classList.add("open-golden-scrap")
}

function golden_scrapclicked() {
    golden_scrap.classList.remove("open-golden-scrap")
}

function setItem() {
    localStorage.setItem("scrap_gain", scrap, "collection-prestige-upgrades",collection_prestige_upgrades, "golden-scrap",golden_scrap1, "paragraph-golden-scrap-text", "Level-bar", level_bar)
}

function getItem() {
    localStorage.getItem("scrap_gain", "collection-prestige-upgrades", "golden-scrap", "paragraph-golden-scrap-text", "Level-bar")
}

function stars_toggle() {
    golden_scrap.classList.add("open-prestige-stars");
    golden_scrap.classList.remove("golden-scrap-text", "prestige-button")
}

function golden_scrap_toggle() {
    golden_scrap.classList.add("open-golden-scrap");
    golden_scrap.classList.remove("open-prestige-stars")
}