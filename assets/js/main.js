import { buscarClientes } from './api.js';

const STATUS = {
  aguardando_qualificacao: 'Aguardando qualificação',
  em_conexao: 'Em conexão',
  conectado: 'Conectado'
};

async function iniciar() {
  const lista = document.querySelector('#lista-clientes');
  try {
    const clientes = await buscarClientes();
    lista.innerHTML = clientes
      // Cada cliente abre as telas com ?cliente=N (veja assets/js/cliente-atual.js)
      .map((c) => `<li><a href="pages/acompanhe-sua-energia.html?cliente=${c.id}"><strong>${c.nome}</strong></a> · ${c.cidade} · ${STATUS[c.status] ?? c.status}</li>`)
      .join('');
  } catch (erro) {
    lista.innerHTML = '<li>Não foi possível carregar os dados. O projeto está aberto pelo Live Server?</li>';
    console.error(erro);
  }
}

iniciar();
