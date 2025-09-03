
const lista_coisas = Array();

lista_coisas['frutas'] = Array('Banana', 'Maçã', 'Laranja')
lista_coisas['Pessoas'] = []
lista_coisas['Pessoas']['a'] = 'João'
lista_coisas['Pessoas']['b'] = 'Maria'
lista_coisas['Pessoas']['c'] = 'José'

document.getElementById('resultado').innerHTML = '<ul> <li>' + lista_coisas['frutas'][0]+ '</li>  '
    + '<li>' + lista_coisas['frutas'][1]+ '</li>  '
    + '<li>' + lista_coisas['frutas'][2]+ '</li>  '
    + '<li>' + lista_coisas['Pessoas']['a'] + '</li>'
    + '<li>' + lista_coisas['Pessoas']['b'] + '</li>'
    + '<li>' + lista_coisas['Pessoas']['c'] + '</li>'
    + '</ul>'
