var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    console.log("Buscando pacientes...");
    var xhr = new XMLHttpRequest();

    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes")
    
    xhr.addEventListener("load", ()=>{
        var erroAjax = document.querySelector("#erro-ajax")
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel")
            var resposta = xhr.responseText
            var pacientes = JSON.parse(resposta)
            pacientes.forEach((paciente) => {
                paciente.imc = paciente.imc.toFixed(1) 
            adicionaPacienteNaTabela(paciente)
        });
        }else{
            console.log(xhr.status)
            console.log(xhr.responseText)

            erroAjax.classList.remove("invisivel")
            erroAjax.setAttribute("id","mensagens-erro")
        }


        

    })
    
    xhr.send();
});