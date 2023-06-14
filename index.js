var scrap = 0;
var golden_scrap1 = 0;
var level = 0;
var maxlevel = 100;
var i = 0;
var first_up = 0;
let golden_scrap = document.getElementById("golden-scrap");
let prestige_container = document.getElementById("prestige-container");
let collection_prestige_upgrades = document.getElementById("collection-prestige-upgrades")
let level_bar = document.getElementById("Level-bar")
let prestige_stars = document.getElementById("prestige-stars")
let upgrades_barrel = document.getElementById("upgrades-barrel")

function scrapgain() {
    scrap += 1;
    document.getElementById("scrap_gain").textContent = scrap
    if (golden_scrap1 >= 1) {
        scrap += 1
    }
    if (golden_scrap1 >= 2) {
        scrap += 1
    }
    if (golden_scrap1 >= 3) {
        scrap += 1
    }
    if (golden_scrap1 >= 4) {
        scrap += 1
    } 
    if (golden_scrap1 >= 5) {
        scrap += 1
    } 
    if (golden_scrap1 >= 6) {
        scrap += 1
    } 
    if (golden_scrap1 >= 7) {
        scrap += 1
    } 
    if (golden_scrap1 >= 8) {
        scrap += 1
    } 
    if (golden_scrap1 >= 9) {
        scrap += 1
    } 
    if (golden_scrap1 >= 10) {
        scrap += 1
    } 
    if (first_up >= 1) {
        scrap += 9
    }
    if (first_up >= 2) {
        scrap += 10
    }
    if (first_up >= 3) {
        scrap += 10
    }
    if (first_up >= 4) {
        scrap += 10
    }
    if (first_up >= 5) {
        scrap += 10
    }
}

if (scrap >= 100) {
    collection_prestige_upgrades.classList.add("open-prestige-container")
}

function golden_scrapGain() {
    if( scrap >= 100) {
        golden_scrap1 += 1
        scrap -= scrap
        first_up -= first_up
        document.getElementById("paragraph-golden-scrap-text").textContent = golden_scrap1
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

function close_barrelUpgrades() {
    upgrades_barrel.classList.remove("open-upgrades-barrel")
}

function open_barrelUpgrades() {
    upgrades_barrel.classList.add("open-upgrades-barrel")
}

function setItem() {
    localStorage.setItem("scrap_gain", scrap, "collection-prestige-upgrades",collection_prestige_upgrades, "golden-scrap",golden_scrap1, "paragraph-golden-scrap-text", "Level-bar", level_bar)
}

function getItem() {
    localStorage.getItem("scrap_gain", "collection-prestige-upgrades", "golden-scrap", "paragraph-golden-scrap-text", "Level-bar")
}

function stars_toggle() {
    prestige_stars.add("open-prestige-stars");
    prestige_stars.classList.remove("open-golden-scrap")
}

function golden_scrap_toggle() {
    golden_scrap.classList.add("open-golden-scrap");
    golden_scrap.classList.remove("open-prestige-stars")
}

function first_upgrade() {
    if (scrap >= 100) {
        scrap -= scrap
        first_up += 1
    }
}