/*modal com popup interativo */
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const modalImagem = document.getElementById("modal-imagem");
    const modalTitulo = document.getElementById("modal-titulo");
    const modalDescricao = document.getElementById("modal-descricao");
    const fecharModal = document.getElementById("fechar-modal");

    const dadosPaises = {
        "paris.jpg": {
            titulo: "Paris, França",
            descricao: "Paris é conhecida como a Cidade Luz, famosa pela Torre Eiffel, Museu do Louvre e sua rica gastronomia. Um destino imperdível para os amantes de arte e cultura."
        },
        "tokyo.jpg": {
            titulo: "Tokyo, Japão",
            descricao: "Tokyo é uma metrópole vibrante que combina tradição e modernidade. Visite o Templo Senso-ji, o cruzamento de Shibuya e experimente a culinária japonesa."
        },
        "novayork.jpeg": {
            titulo: "Nova York, EUA",
            descricao: "Nova York, a cidade que nunca dorme, oferece atrações como a Estátua da Liberdade, Central Park e a Times Square. Ideal para compras e entretenimento."
        },
        "rio.jpg": {
            titulo: "Rio de Janeiro, Brasil",
            descricao: "O Rio de Janeiro é famoso pelo Cristo Redentor, Pão de Açúcar e suas praias deslumbrantes, como Copacabana e Ipanema. Um destino cheio de vida e beleza natural."
        },
        "londres.jpg": {
            titulo: "Londres, Reino Unido",
            descricao: "Londres é uma cidade histórica com atrações como o Big Ben, Palácio de Buckingham e o Museu Britânico. Um destino rico em cultura e história."
        },
        "sidney.jpg": {
            titulo: "Sydney, Austrália",
            descricao: "Sydney é conhecida pela Ópera de Sydney, Ponte da Baía de Sydney e suas praias incríveis, como Bondi Beach. Um destino perfeito para quem ama natureza e urbanismo."
        }
    };

    document.querySelectorAll(".galeria-item img").forEach(img => {
        img.addEventListener("click", function () {
            const src = this.getAttribute("src").split("/").pop(); 
            modalImagem.src = this.src; 
            modalTitulo.textContent = dadosPaises[src].titulo; 
            modalDescricao.textContent = dadosPaises[src].descricao;
            modal.style.display = "flex"; 
            setTimeout(() => {
                modal.classList.add("active"); 
            }, 10);
        });
    });
/*botao x para fechar modal */
    fecharModal.addEventListener("click", function () {
        modal.classList.remove("active"); 
        setTimeout(() => {
            modal.style.display = "none"; 
        }, 300);
    });
/*fechar modal ao clicar fora do popup */
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.remove("active"); 
            setTimeout(() => {
                modal.style.display = "none"; 
            }, 300);
        }
    });
});