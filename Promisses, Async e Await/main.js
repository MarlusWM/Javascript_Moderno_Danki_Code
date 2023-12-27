//PROMISES RETORNA ALGO QUE QUE QUERO COMO RESOLVIDO OU REJEITADO
function testes(){
    return new Promise((resolve, reject) => { //aqui passa 2 paramentros como um callback
        const erro = false; //se mudar para false, nada aparece como alert ou console e afins, mas para pegar o erro, no final coloca catch aí aparece
        //aqui passaria por alguma validação (if, else, algo assim)
        if (erro){
            resolve('promise foi resolvida'); //poderia inclusive retornar com objetos
        } else {
            reject(' promise erro');
        }
    })
}

testes().then((res)=>{
    console.log(res);
}) //"se der tudo certo" = then, faz parte do objeto promisses e a function é o resultado que ta armazenado o resolve (no caso eu puxei com arrow function mas poderia ter puxado como testes().then(function(res){alert(res)})
.catch((err)=>{ //para pegar o erro no alert ou console e afins
    console.log(err);
})

//ASYNC (uma forma mais elegante de retornar uma promise)
async function testes2(){
    alert('ola');
}
testes2();
