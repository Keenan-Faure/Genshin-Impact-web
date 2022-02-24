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
function showsContainer(id)
{
    var container = document.getElementById(id);
    container.style.opacity = '0';
    container.style.animation = 'fadeOut 0.5s ease-in forwards';
}

function removesContainer(id)
{

    var container = document.getElementById(id);
    container.style.opacity = '1';
    container.style.animation = "fadeIn 1s ease-out forwards";
}