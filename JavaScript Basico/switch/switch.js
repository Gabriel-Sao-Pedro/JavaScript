var a = prompt('Digite um número entre 1 e 3')
var b = 'Parâmetro 1'
var c = 'Parâmetro 2'
var d = 'Default'

a = parseInt(a)

switch(a) {
    case 1:
        document.getElementById('resultado').textContent = b
        break

    case 2:
        document.getElementById('resultado').textContent = c
        break
    default:
        document.getElementById('resultado').textContent = d
}