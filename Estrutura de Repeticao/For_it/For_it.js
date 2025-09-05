var lista_funcionarios = []

lista_funcionarios['x'] = 'Jorge'
lista_funcionarios[10] = 'Jamilton'
lista_funcionarios['zebra'] = 'José'
lista_funcionarios[11] = 'Ana'
lista_funcionarios[true] = 'Maria'

var f = function(valor,indice){
    console.log( valor + ' ' + indice )
}
lista_funcionarios.forEach(f)

/*console.log(lista_funcionarios)
document.writeln(lista_funcionarios[3])
lista_funcionarios.forEach(function(valor, indice, array){
    console.log('indice ' + indice +'| valor ' + valor)
    if(valor == 'Lucas'){
        array[indice] = 'Um novo valor'
    }

    }
)
console.log(lista_funcionarios)
document.writeln(lista_funcionarios[3])
*/