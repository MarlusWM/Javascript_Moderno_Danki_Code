console.log('conectado');

var pegaQuantidade = document.querySelector('#quantidade');
pegaQuantidade.addEventListener('keyup',pegaPokemon);

function pegaPokemon(quantidade){
    var quantidade = pegaQuantidade.value;
    //<--FAZENDO A REQUISIÇÃO NA API-->
fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
.then(response => response.json())
.then(allpokemon => {
    console.log(allpokemon); //mostramos o retorno da requisição, dentro dela existem algumas propriedades, entre elas o objeto result com as propriedade name, a qual vamos puxar.
    //<--APENAS PARA PEGAR O NOME-->
    var pokemons = []; //criar um array vazio para receber as informações
    allpokemon.results.map((val)=>{//retorno da requisição.acessar results.map percorrer((recebendo valor como as características do objeto))
        //pokemons.push({nome: val.name});//array pokemons será adicionado um elemento com a propriedade nome e seu valor é retorno da função somado com o name que estão nos arrays(apagado depois para unir nome com url na outra requisição)
        //<--APENAS PARA PEGAR IMAGEM-->
        fetch(val.url) //poderia fazer fetch("https://pokeapi.co/api/v2/pokemon/1/")
        .then(response => response.json())
        .then(pokemonSingle => {
            pokemons.push({nome:val.name, imagem:pokemonSingle.sprites.front_default});
            //lançado desta forma para aparecer o nome do pokemon e seu respectivo link

            if (pokemons.length == quantidade) {
                console.log(pokemons);

                let pokemonBoxes = document.querySelector('.pokemon-boxes');
                pokemonBoxes.innerHTML = '';
                
                pokemons.map((val)=>{ //percorrer o array com retorno da função com valor que é recebido da api, como visto anteriormente
                
                    pokemonBoxes.innerHTML += `<div class="pokemon-box">
                    <img src= ${val.imagem} alt="" srcset="">
                    <p>${val.nome}</p></div>
                    </div>`
                })
            }
        })
    })
});
}