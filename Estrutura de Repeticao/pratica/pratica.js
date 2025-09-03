var lista_frutas = ['Banana', 'Maçã', 'Morango', 'Uva']

var y = lista_frutas.length
var x = 0

while (x < y){
    document.getElementById('resultado').innerHTML += '<ul> <li>' + lista_frutas[x] + '</li> </ul>'
    x++
}
