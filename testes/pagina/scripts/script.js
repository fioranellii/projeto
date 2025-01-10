function showWelcomeMessage() {
    if (!sessionStorage.getItem('welcomeMessageShown')) {
        alert("Bem-vindo ao site de Receitas! Esperamos que você encontre receitas deliciosas.");
        sessionStorage.setItem('welcomeMessageShown', 'true'); 
    }
}

function validateForm(event) {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        event.preventDefault(); 
    } else if (!emailPattern.test(email)) {
        alert("Por favor, insira um endereço de email válido.");
        event.preventDefault(); 
    } else {
        alert("Mensagem enviada com sucesso!");
        clearForm();
    }
}

function clearForm() {
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensagem').value = '';
}

window.onload = showWelcomeMessage;

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', validateForm);
    }
});