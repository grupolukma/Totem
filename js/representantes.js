document.addEventListener("DOMContentLoaded", function () {
    var elementoSP = document.getElementById("state-sp");
    var paragrafoMensagem = document.getElementById("mensagem");

    if (elementoSP && paragrafoMensagem) {
        elementoSP.addEventListener("click", function () {
            // Atualiza o conteúdo do parágrafo com a mensagem de boas-vindas
            paragrafoMensagem.textContent = "Bem-vindo a São Paulo!";
        });
    }
});