//SPREAD
var nomes = [
    {
    nome :'joao'
},
{
    nome:'pedro'
}
]

const obj = [...nomes, { //pegue nomes e adicione o nome guilherme, por isso esta dentro das chaves com vírgula e depois conchcetes para atributos do obj
    nome:'guilherme'
}]

console.log(obj);

//REST
function testes(...games){
    console.log(games);
}
testes(1,2,3,4); //sem formato string mas ele entende como e ainda coloca no formato array com index
testes([1,2,3,4,5]) //array dentro de array
testes('cod','mwm', 'd3', obj) //o parametro ficam disponiveis com formato de array, se quiser incluir outro parametro (obj) ele inclui 
testes(cod, mwm, d3) //assim da erro
