document.addEventListener('DOMContentLoaded', () => {
    const radioAguardando = document.getElementById('radio-aguardando');
    const radioConfirmada = document.getElementById('radio-confirmada');

    const labelAguardando = document.getElementById('label-aguardando');
    const labelConfirmada = document.getElementById('label-confirmada');

    const iconeAguardando = document.getElementById('icone-aguardando');
    const iconeConfirmada = document.getElementById('icone-confirmada');

    const resultadoAguardando = document.getElementById('resultado-aguardando');
    const resultadoConfirmada = document.getElementById('resultado-confirmada');

    // Função para atualizar a tela baseada na seleção
    function atualizarTela() {
        if (radioAguardando.checked) {
            // Estilos do cartão 1
            labelAguardando.classList.add('selecionado');
            iconeAguardando.classList.replace('inativo', 'ativo');

            // Estilos do cartão 2
            labelConfirmada.classList.remove('selecionado');
            iconeConfirmada.classList.replace('ativo', 'inativo');

            // Exibe resultado 1 e esconde resultado 2
            resultadoAguardando.classList.remove('oculto');
            resultadoConfirmada.classList.add('oculto');

        } else if (radioConfirmada.checked) {
            // Estilos do cartão 2
            labelConfirmada.classList.add('selecionado');
            iconeConfirmada.classList.replace('inativo', 'ativo');

            // Estilos do cartão 1
            labelAguardando.classList.remove('selecionado');
            iconeAguardando.classList.replace('ativo', 'inativo');

            // Exibe resultado 2 e esconde resultado 1
            resultadoConfirmada.classList.remove('oculto');
            resultadoAguardando.classList.add('oculto');
        }
    }

    // Escuta as mudanças nos inputs de rádio
    radioAguardando.addEventListener('change', atualizarTela);
    radioConfirmada.addEventListener('change', atualizarTela);
});