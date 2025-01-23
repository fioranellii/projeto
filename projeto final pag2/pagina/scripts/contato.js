document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form-contato");
    const btnLimpar = document.getElementById("limpar");
/*previni de redefinir a página */
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }
/*validar email */
        if (!validateEmail(email)) {
            alert("Por favor, insira um e-mail válido.");
            return;
        }

        function validateEmail(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }
/*mensagem de confirmaçao */
        alert("Mensagem enviada com sucesso!");
        form.reset();
    });
/*limpar formulario */
    btnLimpar.addEventListener("click", function () {
        form.reset();
    });

    
});