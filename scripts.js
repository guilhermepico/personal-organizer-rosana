
// Referências aos elementos
const openPopupBtn = document.getElementById("open");
const popup = document.getElementById("popup");



// Função para abrir o popup
openPopupBtn.addEventListener("click", () => {
    popup.classList.add("show");
});


// Fechar o popup se o fundo (fora do conteúdo) for clicado
popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.classList.remove("show");
    }
});
