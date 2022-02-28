var splash = document.querySelector('.background');
window.addEventListener('load', (event) =>
{
    setTimeout(()=>
    {
        console.log(splash);
        splash.style.webkitAnimation = "";
        splash.style.opacity = "1";
        splash.style.animation = "fadeOut 1s ease-in forwards";
    },6000);
});


//how to disable the web-kit animation using javascript.
//check if the animation gets cancelled when using the animation=""