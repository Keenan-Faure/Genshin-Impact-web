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
    console.log("First");
    console.log(container);
    container.style.animation = 'fadeOut 0.5s ease-in forwards';
    container.style.zIndex = "30";
    container.style.display = 'block';
}

function removesContainer(id)
{
    var container = document.getElementById(id);
    console.log("SECOND");
    console.log(container);
    container.style.animation = "";
    container.style.display = "none !important";
    container.style.zIndex = '-30';
}