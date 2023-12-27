var num1 = document.querySelector('#num1')
var num2 = document.querySelector('#num2')
var sinal = document.querySelector('#sinal')
var resultado = document.querySelector('#resultado')

var calcular = document.querySelector('#calcular')
calcular.addEventListener('click', calc)

alert ('testando')

function calc(){
    var numero1 = parseFloat(num1.value)
    var numero2 = parseFloat(num2.value)
    var operacao = sinal.value

    switch (operacao) {
        case 'soma':
            resultado.innerHTML = `O resultado é ${numero1 + numero2}`
            break;    
        case 'subtracao':
            resultado.innerHTML = `O resultado é ${numero1 - numero2}`
            break;
        case 'multiplicacao':
            resultado.innerHTML = `O resultado é ${numero1 * numero2}`
            break;    
        case 'divisao':
            resultado.innerHTML = `O resultado é ${numero1 / numero2}`
            break;
        default:
            alert('default');
            break;
    }
}