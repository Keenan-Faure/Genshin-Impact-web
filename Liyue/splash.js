var splash = document.querySelector('.splash');
window.addEventListener('load', (event) =>
{
    setTimeout(()=>
    {
        console.log(splash);
        splash.style.webkitAnimation = "";
        splash.style.opacity = "1";
        splash.style.animation = "fadeOut 1s ease-in forwards";
        setTimeout(() =>
        {
            splash.style.zIndex = "-1";
        },1000);
    },6000);
});
