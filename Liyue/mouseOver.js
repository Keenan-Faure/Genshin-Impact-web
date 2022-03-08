var contain1 = document.getElementById('contain1');
var contain2 = document.getElementById('contain2');
var contain3 = document.getElementById('contain3');
var count = 1;

if(count == 1)
{
    count++;
    contain1.addEventListener('mouseover', (event) =>
    {
        var image = document.createElement('img');
        image.src = 'https://drive.google.com/u/0/uc?id=1KppbCR37bVwalDy4vHmRg-MynBpTldY8&export=download';
        image.style.animation = 'fadeIn 1s ease-out forwards'; //make it fade-in quick
        image.id = 'image';
        image.className = 'btnImage';

        contain1.appendChild(image);
    });

    contain1.addEventListener('mouseover', (event) =>
    {
        var image = document.createElement('img');
        image.src = 'https://drive.google.com/u/0/uc?id=1KppbCR37bVwalDy4vHmRg-MynBpTldY8&export=download';
        image.style.animation = 'fadeIn 1s ease-out forwards'; //make it fade-in quick
        image.id = 'image';
        image.className = 'btnImage2';

        contain1.appendChild(image);
    });

    contain1.addEventListener('mouseover', (event) =>
    {
        var image = document.createElement('img');
        image.src = 'https://drive.google.com/u/0/uc?id=1KppbCR37bVwalDy4vHmRg-MynBpTldY8&export=download';
        image.style.animation = 'fadeIn 1s ease-out forwards'; //make it fade-in quick
        image.id = 'image';
        image.className = 'btnImage3';

        contain1.appendChild(image);
    });
}


contain1.addEventListener('mouseout', (event) =>
{
    var images = document.getElementsByClassName('btnImage');
    for(i = 0; i < images.length; ++i)
    {
        images[i].style.opacity = '1';
        images[i].style.animation = 'fadeOut 1s ease-out forwards';
        count = 1;
    }
});

contain2.addEventListener('mouseout', (event) =>
{
    var images = document.getElementsByClassName('btnImage2');
    for(i = 0; i < images.length; ++i)
    {
        images[i].style.opacity = '1';
        images[i].style.animation = 'fadeOut 1s ease-out forwards';
        count = 1;
    }
});

contain3.addEventListener('mouseout', (event) =>
{
    var images = document.getElementsByClassName('btnImage3');
    for(i = 0; i < images.length; ++i)
    {
        images[i].style.opacity = '1';
        images[i].style.animation = 'fadeOut 1s ease-out forwards';
        count = 1;
    }
});