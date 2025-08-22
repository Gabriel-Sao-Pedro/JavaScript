var num1 = prompt('Digite um número')
var num2 = prompt('Digite um número')

var num1 = parseFloat(num1)
var num2 = parseFloat(num2)



document.getElementById('resultado').textContent = num1 + num2
document.getElementById('resultado2').textContent = num1 - num2
document.getElementById('resultado3').textContent = num1 * num2
document.getElementById('resultado4').textContent = num1 / num2
document.getElementById('resultado5').textContent = num1 % num2
document.getElementById('resultado6').textContent = num1++
document.getElementById('resultado7').textContent = num2--
document.getElementById('resultado8').textContent = num1 + num2
document.getElementById('resultado9').textContent = ++num1
document.getElementById('resultado10').textContent = --num2

//Precedência dos operadores

document.getElementById('resultado11').textContent = (num1 + num2) * (num1 - num2)
document.getElementById('resultado12').textContent = (8 * 5 + 5 - 6 /7)
