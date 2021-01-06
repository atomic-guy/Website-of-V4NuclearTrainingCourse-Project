//hide left sidebar with changing window size
function onResizeScreen(){
    var logo = document.getElementsByClassName('logo');
    var logoH = logo[0].offsetHeight;
    var lang = document.getElementsByClassName('lang');
    var langH = lang[0].offsetHeight;
    var menu = document.getElementsByClassName('menu');
    var menuH = menu[0].offsetHeight;
    var vise = document.getElementsByClassName('visegrad-support');
    var viseH = vise[0].offsetHeight;

    var leftContH = logoH + langH + menuH + viseH;
    var screenH = window.innerHeight;
    
    if (leftContH + 5 < screenH){
        document.getElementsByClassName('leftcoll')[0].style.height = "100vh";
    }
    else{
        
        document.getElementsByClassName('leftcoll')[0].style.height = "100vw";
    }
}

onResizeScreen();
window.addEventListener("resize", onResizeScreen);


//check country abb hight
var countryabb = document.getElementsByClassName('country-abbreviation');
var countryabbW = countryabb[0].offsetWidth;
var countryabbFontSize = 0.6 * countryabbW;
console.log(countryabbW);
document.getElementById('country-abb').style.fontSize = countryabbFontSize + "px";
document.getElementsByClassName('country2')[0].style.fontSize = countryabbFontSize + "px";
document.getElementsByClassName('country3')[0].style.fontSize = countryabbFontSize + "px";
document.getElementsByClassName('country4')[0].style.fontSize = countryabbFontSize + "px";

//change color of country aabreviation
let countryCZ = document.getElementsByClassName('uni-contact-CZ')[0];
let countryHU = document.getElementsByClassName('uni-contact-HU')[0];
let countryPL = document.getElementsByClassName('uni-contact-PL')[0];
let countrySK = document.getElementsByClassName('uni-contact-SK')[0];
countryCZ.addEventListener("mouseover", changeColorCZ,false);
countryCZ.addEventListener("mouseout", changeColorCZBack,false);
countryHU.addEventListener("mouseover", changeColorHU,false);
countryHU.addEventListener("mouseout", changeColorHUBack,false);
countryPL.addEventListener("mouseover", changeColorPL,false);
countryPL.addEventListener("mouseout", changeColorPLBack,false);
countrySK.addEventListener("mouseover", changeColorSK,false);
countrySK.addEventListener("mouseout", changeColorSKBack,false);


function changeColorCZ(){
    document.getElementsByClassName('country1')[0].style.color = "#A6D3FF";
}
function changeColorCZBack(){
    document.getElementsByClassName('country1')[0].style.color = "#E9F4FF";
}
function changeColorHU(){
    document.getElementsByClassName('country2')[0].style.color = "#A6D3FF";
}
function changeColorHUBack(){
    document.getElementsByClassName('country2')[0].style.color = "#E9F4FF";
}
function changeColorPL(){
    document.getElementsByClassName('country3')[0].style.color = "#A6D3FF";
}
function changeColorPLBack(){
    document.getElementsByClassName('country3')[0].style.color = "#E9F4FF";
}
function changeColorSK(){
    document.getElementsByClassName('country4')[0].style.color = "#A6D3FF";
}
function changeColorSKBack(){
    document.getElementsByClassName('country4')[0].style.color = "#E9F4FF";
}