var numero = Math.random() 


document.getElementById('resultado').innerHTML = '<h2>Número:</h2><p>' + numero + '</p>'
                                                + '<h2>Arredondado para cima:</h2><p>' + Math.ceil(numero) + '</p>'
                                                + '<h2>Arredondado para baixo:</h2><p>' + Math.floor(numero) + '</p>'
                                                + '<h2>Arredondado para o mais próximo:</h2><p>' + Math.round(numero) + '</p>'
                                                + '<h2>Inteiro:</h2><p>' + Math.floor(numero) + '</p>'
                                                + '<h2>Decimal:</h2><p>' + numero.toFixed(2) + '</p>'