function exibirArtigo(id, callbackSucesso, callbackErro){
    //logica: recuperar o id via requisição http
    if(false){
        callbackSucesso('Funções de callback em JS', 'Conteúdo do artigo sobre funções de callback');
    }
    else{
        callbackErro('Não foi possível recuperar o artigo');
    }
}
var callbackSucesso = function(titulo, descricao){
    document.getElementById('resultado').innerHTML = 
        '<h2>' + titulo + '</h2>'
        + '<p>' + descricao + '</p>';

}
var callbackErro = function(erro){
    document.getElementById('resultado').innerHTML = '<p>' + erro + '</p>';
}

exibirArtigo(1, callbackSucesso, callbackErro)