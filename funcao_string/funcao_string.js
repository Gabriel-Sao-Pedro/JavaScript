//length conta o numero de caracteres
// charAt() informa o caractere na posição especificada
//indexOf() informa a posição da primeira ocorrência de um caractere
//replace() substitui uma parte da string por outra
//substring() retorna uma parte da string entre os índices inicial e final
//trim() remove espaços em branco do início e do fim da string

var nome = ' Jorge Sant Ana '

document.getElementById('resultado').innerHTML = '<h2>Nome:</h2><p>' + nome 
                                                + '</p><h2>Quantidade de caracteres:</h2><p>' 
                                                + nome.length + '</p>'
                                                + '<p>' + nome.charAt(7) + '</p>'
                                                + '<p>' + nome.indexOf('a') + '</p>'
                                                + '<p>' + nome.replace('Sant Ana', 'Silva') + '</p>'
                                                + '<p>' + nome.substring(6, 10) + '</p>'
                                                + '<p>' + nome.toLowerCase() + '</p>'
                                                + '<p>' + nome.toUpperCase() + '</p>'
                                                + '<p>' + '-' + nome.trim() + '-' + '</p>'