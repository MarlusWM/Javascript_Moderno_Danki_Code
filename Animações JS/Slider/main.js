

var lastIndex = 0;
var images = document.querySelectorAll('.container img');
var bulletSingle = document.querySelectorAll('.bullet-single')

images.forEach((item, index)=>{ //forEach "para cada elemento do objeto ou array. A ordem de parâmetro retornada na função forEach(cada item do array, index dos itens, retorna todos os itens contidos no objeto ou array)
    bulletSingle[index].addEventListener('click',()=>{
        let lastImage = document.querySelectorAll('.container img')[lastIndex];
        let actualImage = document.querySelectorAll('.container img')[index];

        //aplicar classe nas bullets
        bulletSingle[lastIndex].classList.remove('active-bullet');
        bulletSingle[index].classList.add('active-bullet');
        //final código slider
        lastImage.style.opacity = 0;
        actualImage.style.opacity = 1;
        lastIndex = index;
    });
})