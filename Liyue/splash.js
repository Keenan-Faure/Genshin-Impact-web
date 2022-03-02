var splash = document.querySelector('.splash');
var splash0 = document.querySelector('.splash0');

window.addEventListener('load', (event) =>
{
    setTimeout(()=>
    {
        splash0.style.animation = "fadeOut 1s ease-in forwards";
        setTimeout(()=>
        {
            splash0.classList.add('display-none');
        },1500);

    }, 2500);
    setTimeout(()=>
    {
        splash.style.webkitAnimation = "";
        splash.style.opacity = "1";
        splash.style.animation = "fadeOut 1s ease-in forwards";
        setTimeout(() =>
        {
            splash.style.zIndex = "-1";
        },1000);
    },4000);
});
