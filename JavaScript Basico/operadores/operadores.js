var num1 = prompt('Digite um número')
var num2 = prompt('Digite um número')

var a = 'a soma entre ' + num1 + ' e ' + num2 + ' é igual a: '
var b = 'a subtração entre ' + num1 + ' e ' + num2 + ' é igual a: '
var c = 'a multiplicação entre ' + num1 + ' e ' + num2 + ' é igual a: '
var d = 'a divisão entre ' + num1 + ' e ' + num2 + ' é igual a: '
var e = 'o incremento de ' + (num1++) + ' é igual a: '
var f = 'o decremento de ' + (num2--) + ' é igual a: '

document.getElementById('resultado').textContent = a + (parseInt(num1) + parseInt(num2))
document.getElementById('resultado2').textContent = b + (parseInt(num1) - parseInt(num2))
document.getElementById('resultado3').textContent = c + (parseInt(num1) * parseInt(num2))
document.getElementById('resultado4').textContent = d + (parseInt(num1) / parseInt(num2))
document.getElementById('resultado5').textContent = e + (num1)
document.getElementById('resultado6').textContent = f + (num2)