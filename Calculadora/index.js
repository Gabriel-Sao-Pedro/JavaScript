function calcular(tipo, acao){
        if(tipo === 'acao'){
            if(acao === 'c'){
                //limpar o visor
                document.getElementById('resultado').value = '';
            }
            if(acao === '+' || acao === '-' || acao === '*' || acao === '/' || acao === '.'){
                document.getElementById('resultado').value += acao;
            }
            if(acao === '='){
                var valor_campo = eval(document.getElementById('resultado').value);
                document.getElementById('resultado').value = valor_campo;
            }
        } else if(tipo === 'valor'){
            document.getElementById('resultado').value += acao;
        }
      }