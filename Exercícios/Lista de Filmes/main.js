//link nao fornecido no curso, impossibilidade de continuar
fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1')
.then(resposta=>resposta.json())
.then(function(json){
    console.log(json);
})