//gets containers
var contain1 = document.getElementById('contain1');
var contain2 = document.getElementById('contain2');
var contain3 = document.getElementById('contain3');

//gets images
var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');

contain1.addEventListener('mouseover', (event) =>
{
    image1.style.animation = 'fadeIn 1s ease-out forwards'; //make it fade-in quick
});

contain2.addEventListener('mouseover', (event) =>
{
    image2.style.animation = 'fadeIn 1s ease-out forwards'; //make it fade-in quick
});

contain3.addEventListener('mouseover', (event) =>
{
    image3.style.animation = 'fadeIn 1s ease-out forwards'; //make it fade-in quick
});


contain1.addEventListener('mouseout', (event) =>
{
    var images = document.getElementsByClassName('btnImage');
    for(i = 0; i < images.length; ++i)
    {
        images[i].style.opacity = '1';
        images[i].style.animation = 'fadeOut 1s ease-out forwards';
    }
});

contain2.addEventListener('mouseout', (event) =>
{
    var images = document.getElementsByClassName('btnImage2');
    for(i = 0; i < images.length; ++i)
    {
        images[i].style.opacity = '1';
        images[i].style.animation = 'fadeOut 1s ease-out forwards';
        count1 = 1;
    }
});

contain3.addEventListener('mouseout', (event) =>
{
    var images = document.getElementsByClassName('btnImage3');
    for(i = 0; i < images.length; ++i)
    {
        images[i].style.opacity = '1';
        images[i].style.animation = 'fadeOut 1s ease-out forwards';
        count1 = 1;
    }
});

var column1 = document.querySelector('.columnOne');
var column2 = document.querySelector('.columnTwo');
var column3 = document.querySelector('.columnThree');

column1.addEventListener('mouseover', (event)=>
{
    var darkBack = document.querySelector('.darkBack');
    darkBack.style.zIndex = '1';
    darkBack.style.animation = 'fadeIn 1s ease-out forwards';
    column1.style.animation = 'fadeUp 1s ease-out forwards';
    
});