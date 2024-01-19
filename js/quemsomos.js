function abrirPagina(pagina) {
    if (pagina === 'quem-somos') {
        window.location.href = 'quem-somos.html';
    } else {
        window.location.href = pagina + '.html';
    }
}