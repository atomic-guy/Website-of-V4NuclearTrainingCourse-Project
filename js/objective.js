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

//random distribution of images
function randomFlags(){
    var flag1 = document.getElementById('flag1');
    var flag2 = document.getElementById('flag2');
    var flag3 = document.getElementById('flag3');
    var flag4 = document.getElementById('flag4');
    var img = document.createElement("img");

    var allFlags = [["img/flag-cz.svg", "Czech Republic"], ["img/flag-pl.svg", "Poland"], ["img/flag-hu.svg", "Hungary"], ["img/flag-sk.svg", "Slovakia"]]; 
    var randomFlag = allFlags[Math.floor(Math.random()*allFlags.length)];
    position = allFlags.indexOf(randomFlag);
    img.src = randomFlag[0];
    img.alt = randomFlag[1];
    img.title = randomFlag[1];
    flag1.appendChild(img);
    if (position >= 0) {
        allFlags.splice(position, 1);
    }
    
    var img = document.createElement("img");
    var randomFlag = allFlags[Math.floor(Math.random()*allFlags.length)];
    position = allFlags.indexOf(randomFlag);
    img.src = randomFlag[0];
    img.alt = randomFlag[1];
    img.title = randomFlag[1];
    flag2.appendChild(img);
    console.log(flag2.appendChild(img));
    if (position >= 0) {
        allFlags.splice(position, 1);
    }

    var img = document.createElement("img");
    var randomFlag = allFlags[Math.floor(Math.random()*allFlags.length)];
    position = allFlags.indexOf(randomFlag);
    img.src = randomFlag[0];
    img.alt = randomFlag[1];
    img.title = randomFlag[1];
    flag3.appendChild(img);
    if (position >= 0) {
        allFlags.splice(position, 1);
    }

    var img = document.createElement("img");
    var lastFlag = allFlags[0];
    img.src = lastFlag[0];
    img.alt = lastFlag[1];
    img.title = lastFlag[1];
    flag4.appendChild(img);

}

randomFlags();

