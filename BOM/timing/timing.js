setTimeout(() => {
    document.getElementById('resultado').innerText = 'Executado após 2 segundos';
}, 2000);
var contador = 10;
var x = setInterval(() => {
    document.getElementById('resultado2').innerHTML = 'contagem regressiva: ' + contador;
    
    if(contador <= 0){
        clearInterval(x)
    }
    contador--;
},1000);
