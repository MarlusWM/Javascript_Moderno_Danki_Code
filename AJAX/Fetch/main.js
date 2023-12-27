//METODO GET
fetch('https://jsonplaceholder.typicode.com/todos/2')
.then(resposta=>resposta.json())
.then(JSON=>console.log(JSON));
//pode ser assim
fetch('https://jsonplaceholder.typicode.com/todos/2')
.then(resposta=>resposta.json())
.then(resultado=>console.log(resultado));
//tambem assim
fetch('https://jsonplaceholder.typicode.com/todos/2')
.then(resposta=>resposta.json())
.then(console.log);



//METODO POST
fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'post',

    body:JSON.stringify({
        title:'DANKI CODE',
        body:'meu curso',
        userId:10
    }),
    headers:{
        'content-type':'application/json; char-set=UTF-8'
    }
})
.then(res=>res.json())
.then(result=>console.log(result));