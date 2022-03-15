//Mondstadt
var button = document.querySelector('.mBtn');
button.addEventListener('onclick', (event)=>
{
    button.style.animation = "increase 1s ease-in forwards";
});

button.addEventListener('mouseout', (event)=>
{
    button.style.height = "40%";
    button.style.animation = 'decrease 1s ease-in forwards';
});

//Liyue

//Inazuma