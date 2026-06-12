function mudarEstacao(idEstacao) {
    // Esconde todas as estações tirando a classe 'ativo'
    const estacoes = document.querySelectorAll('.conteudo-estacao');
    estacoes.forEach(estacao => estacao.classList.remove('ativo'));

    // Remove a classe 'ativo' de todos os botões para resetar o visual
    const botoes = document.querySelectorAll('.btn-estacao');
    botoes.forEach(botao => botao.classList.remove('ativo'));

    // Mostra a estação selecionada adicionando a classe 'ativo'
    document.getElementById(idEstacao).classList.add('ativo');

    // Encontra o botão baseado no parâmetro idEstacao e o destaca
    const botaoClicado = Array.from(botoes).find(btn => btn.getAttribute('onclick').includes(idEstacao));
    if (botaoClicado) {
        botaoClicado.classList.add('ativo');
    }
}