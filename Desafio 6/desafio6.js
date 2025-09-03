var objetos = Array('Cadeira','Impressora','Garfo')




function adicionarObjeto(){
    var objeto = document.getElementById('objeto').value
    objeto = objeto.trim()
    if (objeto == ''){
        alert('Informe um valor vãlido')
    }
    else{
        if(objetos.indexOf(objeto) != -1){
            alert('Objeto já adicionado')
        }
        else{
            objetos.push(objeto)
            console.log(objetos)
            document.getElementById('objeto').value = ''
        }
    }
}
function ordenarObjeto(){
    objetos.sort()
    console.log(objetos)
}