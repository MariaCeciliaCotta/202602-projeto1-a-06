document.addEventListener('DOMContentLoaded', () => {

    /* =========================================================
       1. LÓGICA DOS BOTÕES DE RÁDIO (TELA DA SIMULAÇÃO)
       ========================================================= */
    const radioAguardando = document.getElementById('radio-aguardando');
    const radioConfirmada = document.getElementById('radio-confirmada');

    // Só tenta escutar os botões se eles existirem na página atual
    if (radioAguardando && radioConfirmada) {
        const labelAguardando = document.getElementById('label-aguardando');
        const labelConfirmada = document.getElementById('label-confirmada');
        const iconeAguardando = document.getElementById('icone-aguardando');
        const iconeConfirmada = document.getElementById('icone-confirmada');
        const resultadoAguardando = document.getElementById('resultado-aguardando');
        const resultadoConfirmada = document.getElementById('resultado-confirmada');

        function atualizarTela() {
            if (radioAguardando.checked) {
                labelAguardando.classList.add('selecionado');
                iconeAguardando.classList.replace('inativo', 'ativo');
                labelConfirmada.classList.remove('selecionado');
                iconeConfirmada.classList.replace('ativo', 'inativo');
                resultadoAguardando.classList.remove('oculto');
                resultadoConfirmada.classList.add('oculto');
            } else if (radioConfirmada.checked) {
                labelConfirmada.classList.add('selecionado');
                iconeConfirmada.classList.replace('inativo', 'ativo');
                labelAguardando.classList.remove('selecionado');
                iconeAguardando.classList.replace('ativo', 'inativo');
                resultadoConfirmada.classList.remove('oculto');
                resultadoAguardando.classList.add('oculto');
            }
        }

        radioAguardando.addEventListener('change', atualizarTela);
        radioConfirmada.addEventListener('change', atualizarTela);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // 1. Verifica se o usuário já passou por esta tela
    if (localStorage.getItem('primeiraFaturaVista') === 'true') {
        // Se já viu, redireciona diretamente para a tela definitiva (ex: central-orientacoes.html)
        // Usamos window.location.replace para que a pessoa não consiga voltar para a tela temporária clicando em "Voltar"
        window.location.replace('central-orientacoes.html');
        return; // Interrompe a execução do resto do código
    }

    // 2. Lógica para marcar que a tela foi vista quando clicar em "Iniciar"
    const btnIniciar = document.getElementById('btn-iniciar-fatura');

    if (btnIniciar) {
        btnIniciar.addEventListener('click', () => {
            // Salva no navegador que o usuário já concluiu o primeiro contato
            localStorage.setItem('primeiraFaturaVista', 'true');
        });
    }
});