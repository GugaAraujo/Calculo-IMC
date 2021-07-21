
var botao = document.querySelector("#adicionar-paciente")

botao.addEventListener("click", (event)=>{
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona")
    var paciente = obtemPacienteDoFormulario(form)
    
    var erros = validaPaciente(paciente)
    console.log(erros)
    if(erros.length > 0){
        exibeMensagemDeErro(erros)
        return
    }

    adicionaPacienteNaTabela(paciente)

    form.reset()
    mensagensErro = document.querySelector("#mensagens-erro")
    mensagensErro.innerHTML = ""

})

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente)
    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)

}


function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagens-erro")
    ul.innerHTML = ""
    erros.forEach((erro) => {
        var li = document.createElement("li")
        li.textContent = erro
        ul.appendChild(li)

    });
}

function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }
    return paciente
}



function montaTr(paciente) {
    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")

    var nomeTd = document.createElement("td")
    nomeTd.textContent = paciente.nome
    nomeTd.classList.add("info-nome")

    var pesoTd = montaTd(paciente.peso,"info-peso")
    var alturaTd = montaTd(paciente.altura,"info-altura")
    var gorduraTd = montaTd(paciente.gordura,"info-gordura")
    var imcTd = montaTd(paciente.imc,"info-imc")



    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

   classificaImc(imcTd.textContent,imcTd)

    return pacienteTr
}

function montaTd(dado,classe){
    var td = document.createElement("td")
    td.textContent = dado
    td.classList.add(classe)

    return td
}

function validaPaciente(paciente){

    var erros = []

    if(paciente.nome.length ==0){
        erros.push("É necessário preencher o nome.")
    }

    if(!validaPeso(paciente.peso)) erros.push("O peso é inválido. ")
    

    if(!validaAltura(paciente.altura)) erros.push("A altura é inválida. ")

    if(paciente.gordura.length ==0){
        erros.push("É necessário preencher o índice de gordura.")
    }

    if(paciente.peso.length ==0){
        erros.push("É necessário preencher o peso.")
    }

    if(paciente.altura.length ==0){
        erros.push("É necessário preencher a altura.")
    }
    return erros
}