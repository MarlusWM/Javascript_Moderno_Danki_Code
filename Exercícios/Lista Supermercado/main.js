var btnCadastrar = document.querySelector('#btnCadastrar');

var item = []; //array vazio para incluir os objetos quando clicar em cadastrar
btnCadastrar.addEventListener('click', ()=>{ //arrow function com event para ação de clique
    let nomeProduto = document.querySelector('#nomeProduto');
    let valorProduto = document.querySelector('#valorProduto');

    item.push({ //método push que faz a inclusão em uma posicao no array com os dados do objeto
        nome: nomeProduto.value, //dados do objeto ou propriedades
        valor: valorProduto.value,
    });
    let listaProdutos = document.querySelector('.listaProdutos');
    listaProdutos.innerHTML = ''; //para limpar o campo e nao incluir duplicado
    let somatoria = document.querySelector('.somatoria');
    let soma = 0; //inicia com valor zerado
    item.map(function(val){ //funcao que espera um parametro, nomeamos de val
        listaProdutos.innerHTML+= `
        <div class="listaProdutoSingle">
        <h2>`+val.nome+`</h2>
        <p>`+val.valor+`</p>
        </div>`; //irá adicionar o conteúdo no html. Acima foi passado o parametro esperado .nome, para receber o nome
        soma += parseFloat(val.valor); //para receber valores com vírgula
    })
    nomeProduto.value = ''; //ao final limpa o input para nova informacao
    valorProduto.value = '';
    soma = soma.toFixed(2); //para fixar em 2 casas decimais
    somatoria.innerHTML += 'TOTAL R$'+soma; //soma será inclusa no html
});

