var a = 10
var b = 20
var c = null

document.getElementById('a').textContent = a
document.getElementById('b').textContent = b
document.getElementById('c').textContent = c

c = a
a = b
b = c
c = null

document.getElementById('mensagem').textContent = 'Alteração dos valores das variaveis'
document.getElementById('newa').textContent = a
document.getElementById('newb').textContent = b
document.getElementById('newc').textContent = c