var splash = document.querySelector('.splash');
window.addEventListener('load', (event) =>
{
    setTimeout(()=>
    {
        splash.style.animation = "fadeIn 1s ease-out forwards";
    },3000);
    setTimeout(()=>
    {
        splash.classList.add('display-none');
    },5000);
});
setTimeout(() =>
{
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var btn3 = document.getElementById('btn3');
    var btn4 = document.getElementById('btn4');
    setTimeout(() =>
    {
        btn1.style.animation = "fadeOut 1s ease-out forwards";
    },500);
    setTimeout(() =>
    {
        btn2.style.animation = "fadeOut 1s ease-out forwards";
    },750);
    setTimeout(() =>
    {
        btn4.style.animation = "fadeOut 1s ease-out forwards";
    },1000);
    setTimeout(() =>
    {
        btn3.style.animation = "fadeOut 1s ease-out forwards";
    },1250);
},5000);