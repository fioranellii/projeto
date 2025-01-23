/*scroll suave */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
/*botao de voltar ao topo */
document.addEventListener("DOMContentLoaded", function () {
    const botaoTopo = document.getElementById("voltar-ao-topo");

    botaoTopo.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            botaoTopo.style.display = "block";
        } else {
            botaoTopo.style.display = "none";
        }
    });
});
