//Segunda Missão Estelar JS
/**
        Apertem os cintos para adentramos
    ao hiper-espaço rumo a uma nova Missão 
    Estelar JS!:)
 */
var missao = "Segunda Missão Estelar JS";
console.log(missao);
console.log("A variável 'missao' é do tipo: ", typeof missao);

var hiperespaco = new String("Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)");
console.log(hiperespaco);
console.log("A variável 'hiperespaco' é do tipo: ", typeof hiperespaco);

var nomeCliente = new String('Arthur Matias');
var renda = new Number(4000);
var dataNascimento = new Date(1996-11-18);
var ativo = new Boolean(false);

function exibirDadosClienteVariaveis(){
    console.log(nomeCliente);
    console.log(renda);
    console.log(dataNascimento);
    var ativadoOuN =  ativo==true?'O ativo está: Ativado':'O ativo está: Desativado'
    console.log(ativadoOuN);
}exibirDadosClienteVariaveis()
console.log("---------------------------------------------------")
var clienteArray = [nomeCliente, renda, dataNascimento, ativo]
function exibirDadosClienteArray(){
    for (const i of clienteArray) {
        console.log("i: ", i);
    }
}exibirDadosClienteArray()

var clienteObject = {nome: nomeCliente, salário: renda, nascimento: dataNascimento, ativado: ativo}

for(let i in clienteObject){
    console.log("Valor: ", clienteObject[i])
}
console.log("---------------------------------------------------")

function retornaDataAtualFormatada(){
    let dataAtual = new Date();
    let dd = dataAtual.getDate()
    let mm = dataAtual.getMonth()+1
    let yyyy = dataAtual.getFullYear()
    if(mm<10){
        console.log(dd+"/0"+mm+"/"+yyyy)
    }else{
        console.log(dd+"/"+mm+"/"+yyyy)
    }
}retornaDataAtualFormatada()

var hiperEspacoRegExp= new RegExp('Estelar')