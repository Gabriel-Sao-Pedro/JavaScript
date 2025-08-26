var data = new Date()

function formatarData(data){
    return data.getDate() + '/' + ('0' + (data.getMonth() + 1)).slice(-2) + '/' + data.getFullYear();
}
var hoje = formatarData(data); // Salva a data atual formatada


// adicionar e remover dias
data.setDate(data.getDate() + 1); // Altera para amanhã
var amanha = formatarData(data); 
data.setDate(data.getDate() - 2); // Altera para ontem
var ontem = formatarData(data);

// adicionar e remover meses

data.setMonth(data.getMonth() + 1); // Altera para o próximo mês
var proximoMes = formatarData(data);
data.setMonth(data.getMonth() - 2); // Altera para o mês anterior
var mesAnterior = formatarData(data);

// adicionar e remover anos
data.setFullYear(data.getFullYear() + 1); // Altera para o próximo ano
var proximoAno = formatarData(data);
data.setFullYear(data.getFullYear() - 2); // Altera para o ano anterior
var anoAnterior = formatarData(data);

// Calculo entre datas

var data1 = new Date(2017, 0, 15)
var data2 = new Date(2017, 1, 23)
var mili_data1 = data1.getTime()
var mili_data2 = data2.getTime()
var diferenca = Math.abs(mili_data2 - mili_data1)
var dia_milissegundos = (1000 * 60 * 60 * 24)
var dias_diferenca = diferenca / dia_milissegundos

document.getElementById('resultado').innerHTML = 
    '<h2>Data Atual: </h2><p>' + hoje + '</p>' +
    '<h2>Amanhã: </h2><p>' + amanha + '</p>' +
    '<h2>Ontem: </h2><p>' + ontem + '</p>' +
    '<h2>Próximo Mês: </h2><p>' + proximoMes + '</p>' +
    '<h2>Data 1 Mês Atrás: </h2><p>' + mesAnterior + '</p>' +
    '<h2>Próximo Ano: </h2><p>' + proximoAno + '</p>' +
    '<h2>Data 1 Ano Atrás: </h2><p>' + anoAnterior + '</p>' +
    data1.toString() + '<br/>' + data2.toString() +
    ' <hr/> ' + 'um dia tem : ' + dia_milissegundos + ' milissegundos' + '<br/>' +
    'o dia 1 tem : ' + mili_data1 +  ' milissegundos' + '<br/>' + 'o dia 2 tem : ' + mili_data2 +  ' milissegundos' +
    '<h2>Diferença em Milissegundos: </h2><p>' + diferenca + '</p>' +
    '<h2>Diferença em Dias: </h2><p>' + Math.floor(dias_diferenca) + '</p>'
