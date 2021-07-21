var pacientes = document.querySelectorAll(".paciente")

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",(event)=>{


    if (event.target.tagName == "TD"){
        event.target.parentNode.classList.add("fadeOut")
        setTimeout(()=>{
            event.target.parentNode.remove()
        },400)
    }  
})





// pacientes.forEach((paciente)=>{
//     paciente.addEventListener("dblclick",()=>{
//         console.log("deu dublo click aqui")
//         paciente.remove()
//     })
// })