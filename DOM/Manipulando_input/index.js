function distribuiCaracter(){

    //seleciona o caracter digitado
    var caracter =  document.getElementById("entrada").value

    //limpa o campo de digitação
    document.getElementById("entrada").value  = ''

    //limpa espaços em branco 
    caracter.trim()

    switch(caracter){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            //se for um número
            document.getElementById("numeros").value += caracter
            break
        default:
            //se for um caracter
            document.getElementById("letras").value += caracter
    }

            

}