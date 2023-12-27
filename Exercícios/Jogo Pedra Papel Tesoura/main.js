console.log('conectado')

var elementos = document.querySelectorAll('.player-options div > img');
//para a variavel i que começa em zero, se oo i for menor que a quantidade, inclua mais indices e enquanto for verdadeiro execute a declaração abaixo
var playerOpt = ''; //está vazio porque vai receber o que o player selecionou
var maquinaOpt = '';//criado para recebimento da escolha da máquina que posteriormente recebeu os valores do nó filho definido no optPc
var resultado = document.querySelector('#resultado');

function validarVitoria(){ //funcao para validar o resultado
    
    if (playerOpt == 'paper') {
        if (maquinaOpt == 'papel') {
            resultado.innerHTML = 'EMPATE'
        } else if (maquinaOpt == 'tesoura'){
            resultado.innerHTML = 'VOCÊ PERDEU!'
        } else {
            resultado.innerHTML = 'GANHOU!'
        }
    }
    if (playerOpt == 'rock') {
        if (maquinaOpt == 'pedra') {
            resultado.innerHTML = 'EMPATE'
        } else if (maquinaOpt == 'tesoura'){
            resultado.innerHTML = 'GANHOU!'
        } else {
            resultado.innerHTML = 'VOCÊ PERDEU!'
        }
    }
    if (playerOpt == 'scisor') {
        if (maquinaOpt == 'tesoura') {
            resultado.innerHTML = 'EMPATE'
        } else if (maquinaOpt == 'papel'){
            resultado.innerHTML = 'GANHOU!'
        } else {
            resultado.innerHTML = 'VOCÊ PERDEU!'
        }
    }
}



function resetPc(){
    var optPc = document.querySelectorAll('.enemy-options div > img');
    for(let i = 0; i < optPc.length; i++){
            optPc[i].style.opacity = 0.3;
    }
}

//COMO GERAR A JOGADA DA MÁQUINA ALEATÓRIA
function pcPlaying(){
    var optPc = document.querySelectorAll('.enemy-options div > img');
    var rand = Math.floor(Math.random()*3);//Math para gerar números aleatórios entre 0 e 1, floor para arredondamento de valor para menor ou igual
    resetPc();
    for (let i = 0; i < optPc.length; i++) {
        if(i == rand){
            optPc[i].style.opacity = 1;
            maquinaOpt = optPc[i].getAttribute('opt');
        }
    }
    //alert(playerOpt);
    //alert(optPc);
    validarVitoria();
}


function resetOpacityPlayer(){
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.opacity = 0.3;
    }
}

for (let i = 0; i < elementos.length; i++) { //for vai aplicar a chamada abaixo em todos os index da div com img
    elementos[i].addEventListener('click', (t)=>{ //os index dos elementos receberam o evento de clique, função recebe um valor esperado t
        resetOpacityPlayer(); //depois de criado o for, coloco o chamado da função pra reiniciar as opacidades dos não selecionados e escrevo a função
        t.target.style.opacity = 1; //o valor esperado recebeu o target para mudar de opacidade conforme clicado
        playerOpt = t.target.getAttribute('opt'); //variavel playeropt recebe o parametro com targe (que é o selecionado), no console.log já descobrimos qual está puxando
        pcPlaying(); //chamada da função para quando clicar na minha escolha, já dispare a do pc
    });
}








