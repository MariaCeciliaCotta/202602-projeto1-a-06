document.addEventListener('DOMContentLoaded', () => {

    /* =========================================================
       1. LÓGICA DO JSON (TELA DE BOAS VINDAS)
       ========================================================= */
    const elementoNome = document.getElementById('nome-cliente');

    // Só tenta fazer o fetch se o elemento de nome existir na página atual
    if (elementoNome) {
        fetch('../data/clientes.json')
            .then(response => response.json())
            .then(clientes => {
                if (clientes && clientes.length > 0) {
                    const nomeCompleto = clientes[0].nome;
                    const primeiroNome = nomeCompleto.split(' ')[0];
                    elementoNome.textContent = primeiroNome;
                }
            })
            .catch(erro => {
                console.error("Erro ao carregar JSON:", erro);
            });
    }

    /* =========================================================
       2. LÓGICA DOS BOTÕES DE RÁDIO (TELA DA SIMULAÇÃO)
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