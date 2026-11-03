# Sprint Review II — Preparação da demonstração

> Projeto em Ciência de Dados I · Ibmec BH · Turma A · Squad 06
>
> Sprint 2 (Implementar): 26/10 a 06/11/2026
>
> Última verificação do repositório: 03/11/2026

**Estado deste documento:** roteiro de preparação. Não representa uma Sprint Review II já realizada.

## 1. Objetivo da Sprint

Implementar e integrar o MVP Bulbe Presente, permitindo que novos clientes encontrem orientações sobre sua adesão, comunicação, andamento da conexão e primeira fatura.

**Problema abordado:** silêncio durante o onboarding.

**Indicador principal pretendido:** entregabilidade das comunicações, considerando o acesso alternativo às informações.

**Indicadores secundários:** churn no primeiro mês e pagamento da primeira fatura.

O MVP utiliza dados fictícios. Ainda não há evidência de impacto real nesses indicadores.

## 2. Situação das entregas em 03/11/2026

| História | Responsável | Situação verificada |
| --- | --- | --- |
| HU01 · Pós-adesão | @bygor840 | Estrutura na main; finalização na PR #46 |
| HU02 · Contatos | @amorimplaura | Página ainda não integrada à main |
| HU03 · Avisos | @danielferreira88 | Página ainda não integrada à main |
| HU04 · Energia | @bpaolucci | Implementação integrada pela PR #44 |
| HU05 · Primeira fatura | @MariaCeciliaCotta | Página ainda não integrada à main |

A presença de um arquivo na main não significa que todos os critérios de aceite foram testados ou aprovados.

Referências:

- [HU01 — PR #46](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/pull/46)
- [HU04 — PR #44](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/pull/44)
- [Histórias e critérios de aceite](../historias.md)
- [Documentação principal](../../README.md)

## 3. Roteiro de demonstração

### Abertura — Contexto do problema

Apresentar o Bulbe Presente como proposta para reduzir a desinformação dos novos clientes entre a adesão e a primeira fatura.

Explicar as evidências utilizadas:
- Casos históricos de até 20 dias sem comunicação.
- Aproximadamente 20% de falha na entrega das mensagens de WhatsApp.
- Inadimplência de 32,4% na primeira fatura, conforme dados utilizados pelo squad.

Não afirmar que o protótipo já reduziu esses indicadores.

### HU01 — Boas-vindas e pós-adesão

**Demonstrar quando a implementação estiver disponível:**

1. A confirmação do recebimento da adesão.
2. As orientações sobre as próximas etapas.
3. A explicação das contas Cemig e Bulbe.
4. A confirmação obrigatória de leitura.
5. O bloqueio do avanço quando a leitura não for confirmada.
6. O comportamento após a confirmação.

**Atenção:** a navegação para HU02 depende da existência e integração da página de destino.

### HU02 — Confirmação de contatos

**Demonstrar após integrar:**

1. Exibição dos dados de contato fictícios.
2. Edição ou confirmação do telefone e do e-mail.
3. Escolha dos canais de comunicação.
4. Validação dos campos e mensagem de confirmação.

### HU03 — Central de avisos

**Demonstrar após integrar:**

1. Listagem de avisos.
2. Destaque das pendências e seus prazos.
3. Identificação de mensagens não lidas.
4. Comportamento quando não houver pendências.
5. Leitura dos dados fictícios em JSON.

### HU04 — Acompanhamento de energia

**Demonstrar e verificar:**

1. Identificação da etapa atual da adesão.
2. Representação do caminho da energia.
3. Orientações sobre as próximas ações.
4. Informações de previsão e economia.
5. Comportamento em diferentes estados fictícios.
6. Legibilidade e acessibilidade no celular.

### HU05 — Primeira fatura

**Demonstrar após integrar:**

1. Explicação da primeira cobrança.
2. Diferenças entre as contas da Cemig e da Bulbe.
3. Orientações sobre pagamentos durante a espera.
4. Canais de recebimento da primeira fatura.
5. Como buscar ajuda se a fatura não chegar.

## 4. Testes necessários antes da apresentação

- [ ] Abrir o projeto usando um servidor HTTP local, como Live Server.
- [ ] Confirmar que o JSON fictício é carregado corretamente onde utilizado.
- [ ] Verificar o funcionamento da HU01.
- [ ] Verificar a validação do formulário da HU02.
- [ ] Verificar a listagem e as pendências da HU03.
- [ ] Verificar os estados e as informações da HU04.
- [ ] Verificar as orientações da HU05.
- [ ] Testar a navegação entre as cinco telas.
- [ ] Conferir erros no console do navegador.
- [ ] Testar as telas em larguras de celular.
- [ ] Conferir legibilidade, contraste e interação dos botões.
- [ ] Comparar as implementações com os critérios em `docs/historias.md`.

As caixas devem ser marcadas somente depois da execução e verificação dos respectivos testes.

## 5. Evidências para apresentar

Reunir, conforme disponíveis:

- Issues das histórias de usuário e oportunidades.
- Wireframes correspondentes às cinco telas.
- Pull Requests com as implementações.
- Demonstração funcional das páginas integradas.
- Resultados dos testes realizados.
- Evidências de correções, quando houver.

O histórico das alterações deve permanecer acessível no GitHub.

## 6. Pendências conhecidas

Na verificação de 03/11/2026:

- A PR #46 da HU01 aguardava integração.
- As páginas HU02, HU03 e HU05 ainda não estavam na main.
- O fluxo completo não tinha comprovação de teste ponta a ponta.
- Os critérios de aceite ainda precisavam de revisão funcional pelo grupo.
- A data e o feedback da Sprint Review II não estavam registrados.

Esses itens devem ser atualizados conforme novas entregas forem verificadas.

## 7. Registro posterior da Sprint Review II

**Data da apresentação:** não registrada neste roteiro.

**Funcionalidades efetivamente demonstradas:** registrar após a apresentação.

**Resultados dos testes apresentados:** registrar evidências verificáveis.

**Feedback do professor:** registrar somente comentários efetivamente recebidos.

**Ajustes solicitados:** registrar após a review, com responsáveis e referências às Issues ou PRs correspondentes.

## 8. Próxima etapa

Concluir a integração do MVP, executar os testes, registrar evidências e preparar a entrega final.

A documentação da avaliação será organizada em `docs/avaliacao-final.md`.
