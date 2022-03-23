//Mondstadt
var button = document.querySelector('.mBtn');
var button2 = document.querySelector('.mBtn2');
var button3 = document.querySelector('.mBtn3');

button.addEventListener('mouseover', (event)=>
{

    button.style.animation = "increase 0.1s ease-in forwards";
});

button.addEventListener('mouseout', (event)=>
{
    button.style.height = "40%";
    button.style.animation = 'decrease 0.2s ease-in forwards';
    setTimeout(()=>
    {
        button.style.height = "20%";
    },200);
});

button2.addEventListener('mouseover', (event)=>
{
    button2.style.animation = "increase 0.1s ease-in forwards";
});

button2.addEventListener('mouseout', (event)=>
{
    button2.style.height = "40%";
    button2.style.animation = 'decrease 0.2s ease-in forwards';
    setTimeout(()=>
    {
        button2.style.height = "20%";
    }, 200);
});
button3.addEventListener('mouseover', (event)=>
{
    button3.style.animation = "increase 0.1s ease-in forwards";
});

button3.addEventListener('mouseout', (event)=>
{
    button3.style.height = "40%";
    button3.style.animation = 'decrease 0.2s ease-in forwards';
    setTimeout(()=>
    {
        button3.style.height = "20%";
    }, 200);
});
//Liyue
var lbutton = document.querySelector('.lBtn');
var lbutton2 = document.querySelector('.lBtn2');
var lbutton3 = document.querySelector('.lBtn3');

lbutton.addEventListener('mouseover', (event)=>
{

    lbutton.style.animation = "increase 0.1s ease-in forwards";
});

lbutton.addEventListener('mouseout', (event)=>
{
    lbutton.style.height = "40%";
    lbutton.style.animation = 'decrease 0.2s ease-in forwards';
    setTimeout(()=>
    {
        lbutton.style.height = "20%";
    },200);
});

lbutton2.addEventListener('mouseover', (event)=>
{
    lbutton2.style.animation = "increase 0.1s ease-in forwards";
});

lbutton2.addEventListener('mouseout', (event)=>
{
    lbutton2.style.height = "40%";
    lbutton2.style.animation = 'decrease 0.2s ease-in forwards';
    setTimeout(()=>
    {
        lbutton2.style.height = "20%";
    }, 200);
});
lbutton3.addEventListener('mouseover', (event)=>
{
    lbutton3.style.animation = "increase 0.1s ease-in forwards";
});

lbutton3.addEventListener('mouseout', (event)=>
{
    lbutton3.style.height = "40%";
    lbutton3.style.animation = 'decrease 0.2s ease-in forwards';
    setTimeout(()=>
    {
        lbutton3.style.height = "20%";
    }, 200);
});

//Inazuma

var ibutton = document.querySelector('.iBtn');
var ibutton2 = document.querySelector('.iBtn2');
var ibutton3 = document.querySelector('.iBtn3');

ibutton.addEventListener('mouseover', (event)=>
{

    ibutton.style.animation = "increase 0.1s ease-in forwards";
});

ibutton.addEventListener('mouseout', (event)=>
{
    ibutton.style.height = "40%";
    ibutton.style.animation = 'decrease 0.2s ease-in forwards';
    setTimeout(()=>
    {
        ibutton.style.height = "20%";
    },200);
});

ibutton2.addEventListener('mouseover', (event)=>
{
    ibutton2.style.animation = "increase 0.1s ease-in forwards";
});

ibutton2.addEventListener('mouseout', (event)=>
{
    ibutton2.style.height = "40%";
    ibutton2.style.animation = 'decrease 0.2s ease-in forwards';
    setTimeout(()=>
    {
        ibutton2.style.height = "20%";
    }, 200);
});
ibutton3.addEventListener('mouseover', (event)=>
{
    ibutton3.style.animation = "increase 0.1s ease-in forwards";
});

ibutton3.addEventListener('mouseout', (event)=>
{
    ibutton3.style.height = "40%";
    ibutton3.style.animation = 'decrease 0.2s ease-in forwards';
    setTimeout(()=>
    {
        ibutton3.style.height = "20%";
    }, 200);
});

var mond = document.querySelector('.Mondstadt');
var liy = document.querySelector('.Liyue');
var ina = document.querySelector('.Inazuma');

mond.addEventListener('mouseover', (event) =>
{
    var img = document.querySelector('.mImage');
    var text = document.getElementById('m');

    img.style.opacity = '1';
    img.style.animation = 'fadeIn 0.5s ease-in forwards';
    
    text.style.opacity = '0.06';
    text.style.animation = 'fadeOut 2s ease-in forwards';

});

mond.addEventListener('mouseout', (event)=>
{
    var img = document.querySelector('.mImage');
    var text = document.getElementById('m');

    img.style.opacity = '0.06';
    img.style.animation = 'fadeOut 2s ease-in forwards';
    
    text.style.opacity = '1';
    text.style.animation = 'fadeIn 0.5s ease-in forwards';
});

