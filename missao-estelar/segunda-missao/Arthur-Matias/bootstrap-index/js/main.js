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
console.log("---------------------------------------------------")

var hiperEspacoRegExp= new RegExp('Estelar');
var textoMissao = "Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)";
console.log(hiperEspacoRegExp.test(textoMissao));
console.log(hiperEspacoRegExp.exec(textoMissao));

try {
    for(let i = 30; i>0; i--){
        if(i!=29){
            console.log(i);
        }else{
            throw Error('Número 29');
        }
        
        
    }
    
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

}




var objDadosForm = new Object();

function recebeDadosFormBoot(objDadosForm){
    
        objDadosForm.nome = document.getElementById('nomeBoot');
        objDadosForm.email = document.getElementById('emailBoot');
        objDadosForm.checkboxNewsletter = document.getElementById('emailPromocionalCheckBoot');
        objDadosForm.contatoTelefone = document.getElementById('formaContatoTelefoneRadioBoot');
        objDadosForm.contatoEmail = document.getElementById('formaContatoEmailRadioBoot');
        objDadosForm.estadoSelect = document.getElementById('estadoSelectBoot');
    
    console.log("typeof objFormElementos: "+ typeof objDadosForm)
    console.log(Object.prototype.toString.call(objDadosForm))
    console.log('nome: ', objDadosForm.nome.value);
    console.log('E-mail: ', objDadosForm.email.value)
    console.log('Deseja receber newsletter: ', objDadosForm.checkboxNewsletter.checked);
    console.log('Forma de contato por telefone: ', objDadosForm.contatoTelefone.checked);
    console.log('Forma de contato por e-mail: ', objDadosForm.contatoEmail.checked);
    console.log('Estado: ', objDadosForm.estadoSelect.value);
}

function preencherFormHtml(ObjDados, objDadosForm){
    objDadosForm.nome = document.getElementById('nomeBoot').value;
    objDadosForm.email = document.getElementById('emailBoot').value;
    objDadosForm.checkboxNewsletter = document.getElementById('emailPromocionalCheckBoot').checked;
    objDadosForm.contatoTelefone = document.getElementById('formaContatoTelefoneRadioBoot').checked;
    objDadosForm.contatoEmail = document.getElementById('formaContatoEmailRadioBoot').checked;
    objDadosForm.estadoSelect = document.getElementById('estadoSelectBoot').checked;
    
    var ObjDados = new Object();
        ObjDados.nome = document.getElementById('nomeHtml').value;
        ObjDados.email = document.getElementById('emailHtml').value;
        ObjDados.checkboxNewsletter = document.getElementById('emailPromocionalCheckHtml').checked;
        ObjDados.contatoTelefone = document.getElementById('formaContatoTelefoneRadioHtml').checked;
        ObjDados.contatoEmail = document.getElementById('formaContatoEmailRadioHtml').checked;

    if(ObjDados.nome != objDadosForm.nome){
        ObjDados.nome = objDadosForm.nome
    }
    if(ObjDados.email != objDadosForm.email){
        ObjDados.email != objDadosForm.email
    }
    if (objDadosForm.checkboxNewsletter){
        ObjDados.checkboxNewsletter = objDadosForm.checkboxNewsletter
    }
    if(objDadosForm.contatoEmail){
        ObjDados.contatoEmail = objDadosForm.contatoEmail
    }else if(objDadosForm.contatoTelefone){
        ObjDados.contatoTelefone = objDadosForm.contatoTelefone
    }
}