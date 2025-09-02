var idade = prompt('Digite sua idade:')

var idade = parseInt(idade)
var a = 'Criança'
var b = 'Jovem'
var c = 'Adulto'
var d = 'Idoso'
if (0 <= idade && idade < 15 ){
    document.getElementById('Resultado').textContent = a
}
else if (15 <= idade && idade < 30){
    document.getElementById('Resultado').textContent = b
}
else if(30 <= idade && idade < 60){
    document.getElementById('Resultado').textContent = c
}
else if(idade >= 60){
    document.getElementById('Resultado').textContent = d
}