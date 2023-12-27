//TRABALHANDO DE FORMA CORRETA E MODERNA COM AS CLASSES

alert('conectado');

class animal {
    constructor(){
        this.nome = 'cachorro';
    }
}
animal = new animal();
alert(animal.nome);

//TRABALHANDO COM O METODO CONSTRUCTOR COM PARAMETROS
class pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.signo = 'cancer';
    }
}
cidadao = new pessoa('marlus', '34 anos');
alert(cidadao.nome);
alert(cidadao.idade);
alert(cidadao.signo);

//TAMBÉM PARA INTERAÇÃO ENTRE OS OBJETOS (FICA MAIS FACIL)
class jogos{
    constructor(nome){
        this.nome = nome;
    }
    printNome(){
        return this.nome;
    }
}
game = new jogos('call of duty');
alert(game.printNome())

// TRABALHANDO COM EXTENDS
class play extends jogos{ //classe play vai ser uma nova classe mas com todas os atributos da classe jogos
    constructor(nome){
        super(nome) //invocando o constructor da classe pai
        this.age = 'recomendado 12 anos'
    }
}
player = new play('cod')
alert(player.printNome())
