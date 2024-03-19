var media = 7
var faltas_maximas = 16

var nota = prompt("Digite a nota do aluno");
var falta = prompt("Digite a quantidade de faltas do aluno");


if(nota >= media && falta <= faltas_maximas){
    document.write("Aprovado");
}
else{
    document.write("Reprovado");
    if ( nota <4  || falta > 32){
    document.write(" Sem Conselho de classe");
    }
    else{
    document.write(" Conselho de classe");
    }   
}

if(!(nota==falta)){
    document.write(" Verdadeiro");
}
else{
    document.write(" Falso");
}
var resultado = nota >= media && falta <= faltas_maximas ? " Aprovado" : " Reprovado";
document.write(resultado);