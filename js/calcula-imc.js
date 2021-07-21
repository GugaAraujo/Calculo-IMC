
var pacientes = document.querySelectorAll(".paciente")

for(var i=0; i < pacientes.length; i++){
    var tdNome = pacientes[i].querySelector(".info-nome")
    var nome = tdNome.textContent

    var tdPeso = pacientes[i].querySelector(".info-peso")
    var peso = tdPeso.textContent

    var tdAltura = pacientes[i].querySelector(".info-altura")
    var altura = tdAltura.textContent

    var tdImc = pacientes[i].querySelector(".info-imc")

// validações

    var alturaEhValida = validaAltura(altura)
    var pesoEhValido = validaPeso(peso)

    if(!pesoEhValido){
        console.log(`${nome} -> Peso inválido!`)
        tdImc.textContent = "Peso inválido!"
        pesoEhValido = false
    }
    if(!alturaEhValida){
        console.log(`${nome} -> Altura inválida!`)
        tdImc.textContent = "Altura inválida!"
        alturaEhValida = false
    }
    if(alturaEhValida && pesoEhValido){
        var imc = calculaImc(peso,altura)
        tdImc.textContent = imc
        classificaImc(imc,tdImc)

    }
//fim do for <---
}

function validaPeso(peso){
    if(peso > 0 && peso < 1000){
        return true
    } else {
        return false
    }
}

function validaAltura(altura){
    if(altura > 0 &&  altura < 3.00){
        return true
    } else {
        return false
    }
}

function calculaImc(peso,altura){
    var imc = 0
    imc = peso / (altura * altura)
    //classificaImc(imc,tdImc)


    return imc.toFixed(1)
}

function classificaImc(valorImc, variavel){
   if(valorImc < 18.5){
        return variavel.setAttribute('class','imc-abaixo')
    }
    else if (valorImc >= 18.5 && valorImc < 25.0){
        return variavel.setAttribute('class','imc-saudavel')
    }
    else if (valorImc > 24.9 && valorImc < 29.9){
        return variavel.setAttribute('class','imc-sobrepeso')
    }
    else if (valorImc > 30.0 && valorImc < 34.9){
        return variavel.setAttribute('class','imc-obeso1')
    }
    else if (valorImc > 35.0 && valorImc < 39.9){
        return variavel.setAttribute('class','imc-obeso2')
    }
    else if (valorImc > 40.0){
        return variavel.setAttribute('class','imc-obeso3')
    }
}
