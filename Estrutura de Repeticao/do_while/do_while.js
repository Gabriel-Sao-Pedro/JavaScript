var x = 0

do{
    document.writeln(x + '<br/>')
    if ( x == 9){
        document.writeln(
            'falta 1 para sair <br/ >'
        )
        x = x + 1
        document.writeln(x + '<br/>')
        break
    }
    else{
        x ++
        continue
    }
}while( x <= 10)