//slides speed
$('.carousel').carousel({
    interval: 5000
});

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


//cookies
var rightCol = document.getElementsByClassName('rightcoll');
var rightColW = rightCol[0].offsetWidth;
document.getElementById('cookieConsent').style.width = rightColW + "px";

$(document).ready(function(){   
    setTimeout(function () {
        $("#cookieConsent").fadeIn(200);
     }, 2000);
    $("#closeCookieConsent, .cookieConsentOK").click(function() {
        $("#cookieConsent").fadeOut(200);
    }); 
}); 
