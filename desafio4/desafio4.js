var num1 = prompt('Digite um numero')
var operacao = prompt('Informe a operação desejada(soma, subtração, multiplicação, divisão)')
var num2 = prompt('Digite outro numero')

function calculo(num1, num2, operacao){
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    switch(operacao) {
        case 'soma':
            var resultado = num1 + num2
            break;
        case 'subtração':
            var resultado = num1 - num2
            break;
        case 'multiplicação':
            var resultado = num1 * num2
            break;
        case 'divisão':
            var resultado = num1 / num2
            break;
        default:
            var resultado = 'Operação inválida, digite uma operação válida'
    }
    return resultado
}

document.getElementById('resultado').innerHTML = '<h2> O Resultado é: <p>' + calculo(num1, num2, operacao) + '</p>'