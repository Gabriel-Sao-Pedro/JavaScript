var lista_frutas = ['Banana', 'Maçã', 'Morango', 'Uva']
var y = lista_frutas.length

for(x = 0; x< y; x++){
    document.getElementById('lista').innerHTML += '<ul><li>' + lista_frutas[x] + '</li></ul>'
}

var a = 1


while(a <= 10){
    b = 1
    while(b <= 10){
        document.getElementById('tabuada').innerHTML += '<ul><li>' + a + 'x' + b + '=' + a*b + '</li></ul>'
        b++
    }
a++
}
  