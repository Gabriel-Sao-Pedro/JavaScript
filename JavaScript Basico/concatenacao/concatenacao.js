var nome = prompt('Digite o seu nome:')
var idade = prompt('Digite a sua idade:')
idade2 = 50

console.log(idade)
console.log(idade2)

document.getElementById('mensagem').textContent= 'Olá '+ nome +', tudo bem?'
document.getElementById('complemento').textContent = 'Estou vendo aqui que você tem ' + idade + ' anos.'