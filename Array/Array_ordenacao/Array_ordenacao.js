// usar o sort() para ordenar alfabeticamente
var lista_frutas = []

lista_frutas[0] = 'Maçã'
lista_frutas[1] = 'Uva'
lista_frutas[2] = 'Banana'
lista_frutas[3] = 'Morango'

console.log(lista_frutas)
var ordenacao = lista_frutas.sort()
console.log(ordenacao)

lista_numeros = []

lista_numeros[0] = 12
lista_numeros[1] = 40
lista_numeros[2] = 3
lista_numeros[3] = 7
lista_numeros[4] = 19
lista_numeros[5] = 1

console.log(lista_numeros)
var ordnenacao2 = lista_numeros.sort()  
console.log(ordnenacao2)

function ordenaNumeros(a, b){
    return a - b
    // valor < 0 = a ordenando antes de b
    // valor > 0 = a ordenando depois de b
    // valor = 0 = a e b são iguais
    
}

console.log(lista_numeros.sort(ordenaNumeros))