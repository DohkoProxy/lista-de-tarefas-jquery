$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        const novaTarefa = $('form input').val();
        const inclusaoDeLinha = $('<li></li>');
        inclusaoDeLinha.text(novaTarefa);
        $('ul').append(inclusaoDeLinha);
        $('form input').val('');

        // Adiciona o evento de clique no <li>
        inclusaoDeLinha.on('click', function() {
            // Obtém a posição do <li> clicado
            const posicao = inclusaoDeLinha.offset();
            const alturaLi = inclusaoDeLinha.outerHeight();

            // Exibe o menu de opções logo abaixo do <li> clicado
            $('#menu-opcoes').css({
                top: posicao.top + alturaLi + 'px', // Ajusta a posição vertical
                left: posicao.left + 'px' // Ajusta a posição horizontal
            }).show();

            // Define as ações para os botões
            $('#concluir').off('click').on('click', function() {
                inclusaoDeLinha.css('text-decoration', 'line-through');
                $('#menu-opcoes').hide();
            });

            $('#corrigir').off('click').on('click', function() {
                const novoTexto = prompt("Digite o novo texto:");
                if (novoTexto) {
                    inclusaoDeLinha.text(novoTexto);
                }
                $('#menu-opcoes').hide();
            });

            $('#excluir').off('click').on('click', function() {
                inclusaoDeLinha.remove();
                $('#menu-opcoes').hide();
            });
        });
    });

    // Ocultar o menu ao clicar fora dele
    $(document).on('click', function(e) {
        if (!$(e.target).closest('li, #menu-opcoes').length) {
            $('#menu-opcoes').hide();
        }
    });
});
