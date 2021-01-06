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

//uni-photos-column
var screenH2 = window.innerHeight;
var footerH = document.getElementById('footer').offsetHeight;
console.log(screenH2);
var uniNameBoxH = (screenH2 - footerH)  / 4;
var allNameColumns = document.getElementsByClassName('uni-name-box');
console.log(allNameColumns);
for(var i = 0; i < allNameColumns.length; i++){ 
    var nameCol = allNameColumns[i]; 
    nameCol.style.height = uniNameBoxH + "px";
}

//change uni description
var uniCZname = document.getElementById('uni-cz-name');
var uniHUname = document.getElementById('uni-hu-name');
var uniPLname = document.getElementById('uni-pl-name');
var uniSKname = document.getElementById('uni-sk-name');
var uniCZ = document.getElementById('uni-cz');
var uniHU = document.getElementById('uni-hu');
var uniPL = document.getElementById('uni-pl');
var uniSK = document.getElementById('uni-sk');
uniCZname.addEventListener("mouseover", changeTextCZ,false);
uniCZname.addEventListener("mouseout", changeTextCZBack,false);
uniHUname.addEventListener("mouseover", changeTextHU,false);
uniHUname.addEventListener("mouseout", changeTextHUBack,false);
uniPLname.addEventListener("mouseover", changeTextPL,false);
uniPLname.addEventListener("mouseout", changeTextPLBack,false);
uniSKname.addEventListener("mouseover", changeTextSK,false);
uniSKname.addEventListener("mouseout", changeTextSKBack,false);


function changeTextCZ(){
    uniCZname.style.backgroundColor = "#A6D3FF";
    uniCZ.style.display = 'inline';
    uniHU.style.display = 'none';
    uniPL.style.display = 'none';
    uniSK.style.display = 'none';
}
function changeTextCZBack(){
    uniCZname.style.backgroundColor = 'transparent';
}
function changeTextHU(){
    uniHUname.style.backgroundColor = "#A6D3FF";
    uniCZ.style.display = 'none';
    uniHU.style.display = 'inline';
    uniPL.style.display = 'none';
    uniSK.style.display = 'none';
}
function changeTextHUBack(){
    uniHUname.style.backgroundColor = 'transparent';
}
function changeTextPL(){
    uniPLname.style.backgroundColor = "#A6D3FF";
    uniCZ.style.display = 'none';
    uniHU.style.display = 'none';
    uniPL.style.display = 'inline';
    uniSK.style.display = 'none';
}
function changeTextPLBack(){
    uniPLname.style.backgroundColor = 'transparent';
}
function changeTextSK(){
    uniSKname.style.backgroundColor = "#A6D3FF";
    uniCZ.style.display = 'none';
    uniHU.style.display = 'none';
    uniPL.style.display = 'none';
    uniSK.style.display = 'inline';
}
function changeTextSKBack(){
    uniSKname.style.backgroundColor = 'transparent';
}

//change uni description box for small screens
function changeTextforSmallScreens(){
    var screenW = window.innerWidth;
    if (screenW < 577){
        uniCZ.style.display = 'inline';
        uniHU.style.display = 'inline';
        uniPL.style.display = 'inline';
        uniSK.style.display = 'inline';
    }
}

changeTextforSmallScreens();
window.addEventListener("resize", changeTextforSmallScreens);