function calcular(tipo, valor) {
    const resultado = document.getElementById('resultado');

    if (tipo === 'acao') {
        if (valor === 'c') {
            resultado.value = '';
        } else if (valor === '+' || valor === '-' || valor === '*' || valor === '/') {
            if (resultado.value !== '' && !isNaN(resultado.value.slice(-1))) {
                resultado.value += valor;
            }
        } else if (valor === '.') {
            let partes = resultado.value.split(/\+|-|\*|\//);
            let ultimoNumero = partes[partes.length - 1];
            if (ultimoNumero.indexOf('.') === -1) {
                resultado.value += valor;
            }
        } else if (valor === '=') {
            try {
                resultado.value = eval(resultado.value) ?? '';
            } catch (e) {
                resultado.value = 'Erro';
            }
        }
    } else if (tipo === 'valor') {
        if (resultado.value === '0' ) {
            resultado.value = '' + valor;
        } else {
            resultado.value += valor;
        }
    }
}
