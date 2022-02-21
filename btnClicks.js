var click = document.getElementById('btn1');
click.addEventListener("click", () =>
{
    alert('You are clicking button one');
});
var click = document.getElementById('btn2');
click.addEventListener("click", () =>
{
    alert('You are clicking button two');
});
var click = document.getElementById('btn3');
click.addEventListener("click", () =>
{
    alert('You are clicking button four');
});
var click = document.getElementById('btn4');
click.addEventListener("click", () =>
{
    alert('You are clicking button three');
});

//gets elements from DOM
var middleOne = document.getElementById('one');
var middleTwo = document.getElementById('two');
var middleThree = document.getElementById('three');
var middleFour;

//sets the onclick

middleOne.addEventListener('click', (event) =>
{
    
    ct1.style.animation = 'fadeOut 0.5s ease-in forwards';
});

//clsBt
var closeButton = document.getElementById('clsBtn');
closeButton.addEventListener('click', (event) =>
{
    ct1.style.display = 'none';
    ct1.style.animation = 'none';
});
