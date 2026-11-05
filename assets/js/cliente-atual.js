// =========================================================
// Cliente atual (dados fictícios)
// Guarda qual cliente está sendo visto para ele continuar o mesmo
// ao trocar de tela ou recarregar a página.
//
// - Se a URL tem ?cliente=N, esse cliente passa a ser o atual.
// - Se não tem, usa o último cliente escolhido e coloca ?cliente=N
//   na URL. Assim o JS de cada tela continua lendo da URL, sem mudar nada.
//
// Este arquivo precisa ser carregado no <head>, antes dos outros scripts.
// Para trocar de cliente: abra o index.html ou use ?cliente=N na URL.
// =========================================================

(function () {
  const CHAVE = 'bulbe-cliente-atual';
  const url = new URL(window.location.href);
  const daUrl = Number(url.searchParams.get('cliente'));

  try {
    if (daUrl) {
      localStorage.setItem(CHAVE, String(daUrl));
      return;
    }

    const salvo = Number(localStorage.getItem(CHAVE));
    if (salvo) {
      url.searchParams.set('cliente', salvo);
      history.replaceState(null, '', url);
    }
  } catch {
    // Sem localStorage, cada tela usa o cliente padrão.
  }
})();
