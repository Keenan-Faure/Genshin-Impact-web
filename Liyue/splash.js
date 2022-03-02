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
    //creates splash screen...
    var Splash1 = document.createElement('div');
    Splash1.className = 'splash';
    document.body.appendChild(Splash1);
    setTimeout(()=>
    {
        var splash = document.querySelector('.splash');
        splash.style.webkitAnimation = "";
        splash.style.opacity = "1";
        splash.style.animation = "fadeOut 1s ease-in forwards";
        setTimeout(() =>
        {
            splash.style.zIndex = "-1";
        },1000);
    },5000);
    //The setTimeout method above is directly proportional to the animation seconds
    //the perfect value for this time is: 5000ms:11s
});
