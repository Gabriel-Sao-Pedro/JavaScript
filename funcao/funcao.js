function calcularAreaTerreno(largura, comprimento){
    var area = largura * comprimento;
    return area
}

var largura = prompt('Digite a largura do terreno')
var comprimento = prompt('Digite o comprimento do terreno')

var largura = parseFloat(largura)
var comprimento = parseFloat(comprimento)

var area = calcularAreaTerreno(largura, comprimento)
var resultado = 'o terreno possui ' + area + ' metros'

document.getElementById('resultado').textContent = resultado

function soma(a,b,c){
    c = c===undefined ? 0 : c
    return a + b + c
}
console.log(soma(7,7))
console.log(soma(7,7,9,10))