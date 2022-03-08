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

    contain2.addEventListener('mouseover', (event) =>
    {
        var image = document.createElement('img');
        image.src = 'https://drive.google.com/u/0/uc?id=1KppbCR37bVwalDy4vHmRg-MynBpTldY8&export=download';
        image.style.animation = 'fadeIn 1s ease-out forwards'; //make it fade-in quick
        image.id = 'image';
        image.className = 'btnImage2';

        contain2.appendChild(image);
    });

    contain3.addEventListener('mouseover', (event) =>
    {
        var image = document.createElement('img');
        image.src = 'https://drive.google.com/u/0/uc?id=1KppbCR37bVwalDy4vHmRg-MynBpTldY8&export=download';
        image.style.animation = 'fadeIn 1s ease-out forwards'; //make it fade-in quick
        image.id = 'image';
        image.className = 'btnImage3';

        contain3.appendChild(image);
    });
}
