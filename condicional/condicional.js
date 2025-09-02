var a = ' Aprovado'
var b = ' Reprovado'

var nota = prompt('Digite sua nota')
var media = 7 

if (nota >= media){
    document.getElementById('resultado').textContent = a
}
else {
    document.getElementById('resultado2').textContent = b
}