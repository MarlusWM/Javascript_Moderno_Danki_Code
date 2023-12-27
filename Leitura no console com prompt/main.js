/*
var nome = prompt('Qual seu nome?') //a instrução diz que a variavel tera a propriedade recebida através de prompt
console.log(nome)
*/

var anoNascimento = prompt('Qual seu ano de nascimento?')
var dataAtual = new Date()
var anoAtual = dataAtual.getFullYear()

while (anoNascimento >= anoAtual) {
    alert('[ERRO] Seu nascimento é maior ou igual a data atual, favor insira novamente.')
    var anoNascimento = prompt('Qual seu ano de nascimento?')
}

var idadeFinal = anoAtual - anoNascimento
alert(idadeFinal)