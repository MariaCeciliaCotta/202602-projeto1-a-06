# Sprint Review I — Registro do Squad 06

> Projeto em Ciência de Dados I · Ibmec BH · Turma A · Squad 06  
> Sprint 1 (Desenhar): 12/10 a 22/10/2026 · Review indicada no registro original: 21/10/2026

Este documento preserva as entregas e o planejamento da **Sprint 1**. O andamento posterior da implementação aparece em uma seção separada, para não confundir planejamento com entregas concluídas.

## 1. Problema e evidências

- **Dor central:** silêncio durante o onboarding após a adesão.
- **Evidências apresentadas pela Bulbe:** houve casos de até 20 dias sem comunicação; aproximadamente 20% de falha média na entrega de mensagens de WhatsApp.
- **Indicador principal pretendido:** entregabilidade das comunicações.
- **Indicadores secundários:** churn no primeiro mês e pagamento da primeira fatura.

O período de 20 dias representa casos históricos relatados, **não um prazo habitual de conexão**. O protótipo não mede diretamente a melhora desses indicadores.

## 2. Personas e momentos críticos

- **Fernando, 34 anos:** cliente em Belo Horizonte, rotina corrida, espera orientações quando precisa agir.
- **Helena, 63 anos:** cliente em Contagem, aderiu com a ajuda do filho, busca segurança e explicações simples.
- **Momentos críticos:** adesão, espera pela conexão e preparação para a primeira fatura.

Consulte os [mapas de jornada](../jornada.md) e as [histórias e seus critérios de aceite](../historias.md).

## 3. Histórias priorizadas

| História | Tela | Oportunidade | Indicador | Prioridade |
| --- | --- | --- | --- | --- |
| HU01 | Boas-vindas pós-adesão | [OP01 #18](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/18) | Entregabilidade | Alta |
| HU02 | Confirme seus contatos | [OP02 #19](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/19) | Entregabilidade | Alta |
| HU03 | Central de avisos | [OP01 #18](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/18) | Entregabilidade | Alta |
| HU04 | Acompanhe sua energia | [OP03 #20](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/20) | Churn no 1º mês | Alta |
| HU05 | Entenda sua primeira fatura | [OP01 #18](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/18) | Pagamento da 1ª fatura | Alta |

## 4. Wireframes e fluxo proposto

| História | Wireframe |
| --- | --- |
| HU01 | [Boas-vindas](../wireframes/hu01-boas-vindas-pos-adesao.png) |
| HU02 | [Contatos](../wireframes/hu02-confirmar-contatos.png) |
| HU03 | [Avisos](../wireframes/hu03-central-de-avisos.png) |
| HU04 | [Energia](../wireframes/hu04-acompanhe-sua-energia.png) |
| HU05 | [Primeira fatura](../wireframes/hu05-primeira-fatura.png) |

**Fluxo planejado:** HU01 → HU02 → HU04 → HU05, com acesso à HU03 pela central de avisos. A navegação integral **ainda precisa ser confirmada e testada** com todas as páginas integradas.

## 5. Entregas registradas na Sprint 1

- Estrutura inicial do repositório e dados fictícios em JSON.
- Cinco personas individuais e duas selecionadas para representar os momentos críticos.
- Mapas de jornada com dores relacionadas às evidências da Bulbe.
- Oportunidades documentadas nas Issues [#18](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/18), [#19](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/19) e [#20](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/20).
- Histórias HU01–HU05 com critérios de aceite no arquivo [`docs/historias.md`](../historias.md).
- Wireframes das cinco telas, com histórico de contribuições e PRs no GitHub.

A padronização posterior do README e dos wireframes foi integrada em 22/10/2026 pela [PR #39](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/pull/39). Isso não significa que a implementação das telas já estivesse pronta na Sprint 1.

## 6. Pendências e feedback da Sprint Review I

**Feedback do professor:** o registro disponível não contém comentários específicos. Se o grupo tiver anotações da apresentação, acrescentar apenas o que foi efetivamente dito, identificando a origem.

**Pendências encaminhadas para a Sprint 2:** implementar as telas, integrar a navegação, validar os critérios de aceite e realizar testes de funcionamento e responsividade. Não foi encontrada uma lista histórica confirmada de outras tarefas não concluídas na Sprint 1.

## 7. Planejamento da Sprint 2 (26/10 a 06/11)

| Entrega | Responsável | Referência conhecida |
| --- | --- | --- |
| Template compartilhado e navegação | Squad | [PR #41](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/pull/41) |
| HU01 · Pós-adesão | [@bygor840](https://github.com/bygor840) | [História #16](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/16) · PRs [#42](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/pull/42), [#45](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/pull/45), [#46](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/pull/46) |
| HU02 · Confirmação de contatos | [@amorimplaura](https://github.com/amorimplaura) | [História #14](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/14) |
| HU03 · Central de avisos | [@danielferreira88](https://github.com/danielferreira88) | [História #17](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/17) |
| HU04 · Acompanhamento | [@bpaolucci](https://github.com/bpaolucci) | [História #15](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/15) · [PR #44](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/pull/44) |
| HU05 · Primeira fatura | [@MariaCeciliaCotta](https://github.com/MariaCeciliaCotta) | [História #13](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/13) |
| Dados fictícios, integração e testes mobile | Squad | Issues de implementação específicas a confirmar |

**Organização prevista:** uma branch para cada implementação, com revisão por Pull Request antes da integração na `main`.

## 8. Estado observado em 03/11/2026 (após a Sprint 1)

- **Integradas na `main`:** template compartilhado ([PR #41](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/pull/41)), template HU01 ([PR #42](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/pull/42)), estrutura HU01 ([PR #45](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/pull/45)) e HU04 ([PR #44](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/pull/44)).
- **Aguardando revisão e integração:** finalização da HU01 ([PR #46](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/pull/46)).
- **Ainda sem arquivos de página na `main`:** HU02, HU03 e HU05, na verificação realizada nesta data.
- **Ainda não demonstrados como concluídos:** navegação integral, testes das cinco telas, fechamento dos critérios de aceite e feedback da Sprint Review II.

O roteiro da Sprint Review II será registrado em `docs/sprints/sprint-review-ii.md`, e a conferência final em `docs/avaliacao-final.md`. Esses arquivos ainda precisam ser adicionados na atualização de documentação.
