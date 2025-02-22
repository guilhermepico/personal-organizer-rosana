// Obtém o botão e o popup
const openPopupBtn = document.getElementById("open");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

// Quando o botão é clicado, mostra o popup
openPopupBtn.addEventListener('click', function() {
    popup.style.display = 'flex';
});

// Quando o botão de fechar é clicado, esconde o popup
closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
});

// Fechar o popup se o usuário clicar fora da caixa de conteúdo
window.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
