var nome = prompt('Digite seu nome')
var altura = prompt('Informe sua altura em centímetros')
var peso = prompt('Informe seu peso em KG')

var peso = parseFloat(peso)
var altura = parseFloat(altura)

var alt_metros = altura/100

var imc = peso / (alt_metros**2)
var classificacao = null

switch(true){
    case(imc < 16):
        classificacao = 'Baixo peso muito grave'
        break
    case (16 < imc && imc < 16.99):
        classificacao = 'Baixo peso grave'
        break
    case(17 < imc && imc < 18.49):
        classificacao= 'Baixo peso'
        break
    case(18.5 < imc && imc < 24.99):
        classificacao = 'Peso normal'
        break
    case(25 < imc && imc < 29.99):
        classificacao = 'Sobrepeso'
        break
    case(30 < imc && imc < 34.99):
        dclassificacao = 'Obesidade grau I'
        break
    case(35 < imc && imc < 39.99):
        classificacao = 'Obesidade grau II'
        break
    case(imc > 40):
        classificacao = 'Obesidade grau III'
        break
}
document.getElementById('resultado').textContent = nome + ' possui indice de massa corporal igual a ' + imc.toFixed(2) + ', sendo classificado como ' + classificacao