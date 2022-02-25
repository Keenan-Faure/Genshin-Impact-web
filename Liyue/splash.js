var splash = document.querySelector('.background');
window.addEventListener('load', (event) =>
{
    setTimeout(()=>
    {
        console.log(splash);
        splash.style.animation = "fadeOut 1s ease-out forwards";
    },6000);
});