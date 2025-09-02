function inputFocus(){
    document.getElementById('campo_texto').className = 'focado'
}
function inputBlur(){
    var qtd_caracter = document.getElementById('campo_texto').value.length

    if(qtd_caracter < 3){
        document.getElementById('campo_texto').className = 'desfocado_3'
    }
    else {
        document.getElementById('campo_texto').className = 'desfocado_plus'
    }
}