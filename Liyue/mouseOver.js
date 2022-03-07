function createElement(parentId)
{
    var image = document.createElement('img');
    image.src = 'https://drive.google.com/u/0/uc?id=1KppbCR37bVwalDy4vHmRg-MynBpTldY8&export=download';
    image.style.animation = 'fadeIn 0.3s ease-in forwards'; //make it fade-in quick
    image.id = 'image';
    image.className = 'btnImage';

    var parent = document.getElementById(parentId)
    parent.appendChild(image);
}

function mouseOff(parentId)
{
    var parent = document.getElementById(parentId);
}