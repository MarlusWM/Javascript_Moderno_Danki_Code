//SEM USO DE BIBLIOTECA JQUERY
//TRABALHANDO COM STATUS DA REQUISIÇÃO
var request = new XMLHttpRequest;
request.responseType = "json"

request.open("get", "https://jsonplaceholder.typicode.com/todos/1") //final já considera true ("get", "https://jsonplaceholder.typicode.com/todos/", false), mas poderia colocar false. GET ENVIAR, POST RECEBER, PATCH OU PUT COLOCAR, DELETE

request.onload = function(){ //posso usar uma arrow function
    if (request.status >= 200 && request.status < 400) { //status do request for maior ou igual que 200 e menor que 400 (httpstatuses.com)
        console.log('PACOTE RECEBIDO');
        console.log(request.response);//retorne a variavel com a resposta
    } else {
        console.log('PACOTE NÃO RECEBIDO');
    }
}
request.send();//enviar pacote


//AGORA DE UMA FORMA MAIS PRÁTICA
var xhr = new XMLHttpRequest;
xhr.responseType = "json";

xhr.open('get', 'https://jsonplaceholder.typicode.com/todos/1');

xhr.onreadystatechange = function(){ //esse médoto está escutando a alteração do status
    if (xhr.readyState == 4 && xhr.status == 200) { //ready state possui vários (0 é não inicializado)
        console.log('REQUISIÇÃO OK');
        console.log(xhr.response);
    } else {
        console.log('ERRO');
    }
}
xhr.send();

//E PARA ENVIO DE OBJETOS, PROPRIEDADES, INFORMAÇÕES, ETC (no exercício usando as mesmas variáveis)
var documento = { //declarado um objeto
    userId:'12',
    id:'123',
    name:'marlus',
}
xhr.open('post', 'https://jsonplaceholder.typicode.com/posts'); //para onde enviar

xhr.onreadystatechange = function(){//escutar o status
    if (xhr == 4) { //se o status for recebido e concluido
        console.log('REQUISIÇÃO OK')
    } else {
        console.log('ERRO NO ENVIO, exercicio 2 post');
    }
}
xhr.send(documento); //envia o objeto definido