// Escopo global
// variáveis declaradas aqui podem ser usadas em qualquer lugar
var serie = 'Friends'
if(true){
    // Escopo do bloco if
    // variáveis declaradas aqui podem ser usadas em qualquer lugar
    var serie2 = 'Game of Thrones'
    document.getElementById('resultado').textContent = serie
}
document.getElementById('resultado2').textContent = serie2

function x(){
    // Escopo da função
    // variáveis declaradas aqui só podem ser usadas dentro da função
    var serie3 = 'Breaking Bad'
    document.getElementById('resultado1').textContent = serie
    document.getElementById('resultado3').textContent = serie2
}
x(); // Chama a função para atualizar o resultado1

document.getElementById('resultado3').textContent = serie3