

function gerarTabuada(){
    for(i = 1; i <= 10; i++){
        console.log(i);
        for(j = 1; j <= 10; j++){
            console.log(j);
            const x = i * j;
            document.getElementById('resultado').innerHTML += 
            '<h3> Essa é a tabuada do ' + i + '</h3>' +
            i + 'x' + j + '=' + x
        }
    }
        
}