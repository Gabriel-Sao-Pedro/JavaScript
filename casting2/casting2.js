var a = prompt('Digite sua nota')
var b = prompt('Digite suas faltas')

var a = parseFloat(a)
var b = parseInt(b)
var media = 7
var faltas = 16

/* if(a >= media && b <= faltas){
    document.getElementById('resultado').textContent = 'Aprovado'
}
else if(4 < a < media && b <= faltas){
    document.getElementById('resultado').textContent = 'Recuperação'
}
else if (a < media || b > faltas){
    document.getElementById('resultado').textContent = 'Reprovado'
}*/

var resultado = a >= media && b <= faltas ? 'Aprovado' : 'Reprovado';
document.getElementById('resultado').textContent = resultado;
