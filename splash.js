var splash = document.querySelector('.splash');
window.addEventListener('load', (event) =>
{
    setTimeout(()=>
    {
        //adds image logo to splash screen
        var image = document.createElement('img');
        image.id = "center";
        image.src = 'https://1000logos.net/wp-content/uploads/2021/08/Genshin-Impact-Logo-500x314.png';
        
        image.className = 'fade-out 1s ease-in forwards';
        splash.appendChild(image);

        setTimeout(()=>
        {
            splash.style.animation = "fadeIn 1s ease-out forwards"
        },4000);
        
    },1000);
    setTimeout(()=>
    {
        setTimeout(() =>
        {
            splash.classList.add('display-none');
        },1000)
        setTimeout(()=>
        {
            var btn1 = document.getElementById('btn1');
            var btn2 = document.getElementById('btn2');
            var btn3 = document.getElementById('btn3');
            var btn4 = document.getElementById('btn4');
            setTimeout(() =>
            {
                btn1.style.animation = "fadeOut 1s ease-out forwards";
            },500);
            setTimeout(() =>
            {
                btn2.style.animation = "fadeOut 1s ease-out forwards";
            },750);
            setTimeout(() =>
            {
                btn4.style.animation = "fadeOut 1s ease-out forwards";
            },1000);
            setTimeout(() =>
            {
                btn3.style.animation = "fadeOut 1s ease-out forwards";
            },1250);
        },100)
    },5000);

});