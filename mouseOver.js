//Mondstadt
var button = document.querySelector('.mBtn');
var button2 = document.querySelector('.mBtn2');
var button3 = document.querySelector('.mBtn3');

button.addEventListener('mouseover', (event)=>
{

    button.style.animation = "increase 1s ease-in forwards";
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
    button2.style.animation = "increase 1s ease-in forwards";
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
    button3.style.animation = "increase 1s ease-in forwards";
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

//Inazuma