document.addEventListener("DOMContentLoaded", function () {
    
    const toggleInput = document.getElementById("modoEscuroToggle");

    const body = document.body;

    console.log("Script escuro.js carregado!");

    const modoEscuroAtivo = localStorage.getItem("modoEscuro") === "true";

    if (modoEscuroAtivo) {
        body.classList.add("modo-escuro"); 
        toggleInput.checked = true; 
    }

    toggleInput.addEventListener("change", function () {
        console.log("Toggle alterado!"); 

        body.classList.toggle("modo-escuro");

        const modoEscuroAtivo = body.classList.contains("modo-escuro");

        localStorage.setItem("modoEscuro", modoEscuroAtivo);

        console.log("Modo escuro ativo:", modoEscuroAtivo); 
    });
});