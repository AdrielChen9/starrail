const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const menuLogo = document.querySelector('#navbar__logo img');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

menuLogo.addEventListener("resize", function(){
    var icon = document.getElementById("navbar__logo");
    if (menuLogo.innerWidth<=1000){
        icon.style.position = 'fixed';
        icon.style.top = '50%';
        icon.style.left = '0';
    } 
    else {
        icon.style.position = 'fixed';
        icon.style.top = '50%';
        icon.style.right = '0';
    }
});

const homeLogo = document.getElementById("homeBTN");
homeLogo.addEventListener("click", redirectToHome);
function redirectToHome(){
    event.preventDefault(); 
    window.location.href = "HomeScreen.html";
}

