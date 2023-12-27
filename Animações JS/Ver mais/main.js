alert('conectado')

document.querySelector('.conteudo span').addEventListener('click', function(){
    document.querySelector('.conteudo p').classList.toggle('mostrar');
    //reescrevendo porem só add, não remove
    //document.querySelector('.conteudo p').classList.add('mostrar')
    alert('clicado')
    
})
