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


function DoPosition()
{
    if( 200 + $("#navbar__logo img").width() > $(window).width() )
    {
        $("##navbar__logo img").addClass("stickRight");
        $("##navbar__logo img").removeClass("naturalPos");               
    }
    else
    {        
        $("##navbar__logo img").addClass("naturalPos");
        $("##navbar__logo img").removeClass("stickRight");
    }
}

$( function ()
{
    DoPosition();
    $( window ).resize(function() {
        DoPosition();
    });
});