# Sprint Review I

> Projeto em Ciência de Dados I · Turma A · Squad 06
> Data: 21/10/2026 · Sprint 1 (Desenhar): 12/10 a 22/10

## 1. Dor escolhida e evidência

- **Dor:** silêncio no onboarding
- **Evidência:** clientes chegaram a ficar até 20 dias sem nenhuma comunicação da Bulbe, e cerca de 20% das mensagens de WhatsApp falham
- **Indicador principal:** entregabilidade das comunicações
- **Indicadores secundários:** churn do 1º mês (HU04) e pagamento da 1ª fatura (HU05)

## 2. Personas e momentos críticos

- **Fernando, 34 anos:** analista de RH, rotina corrida, espera ser avisado quando precisar agir
- **Helena, 63 anos:** aposentada, aderiu com ajuda do filho, pouca familiaridade com tecnologia e medo de golpe
- **Momentos críticos da jornada:** Adesão e Espera pela conexão, quando o cliente fica sem sinal de que o processo está andando

Mapa completo: [docs/jornada.md](../jornada.md)

## 3. Histórias priorizadas para o MVP

| ID | Tela | Dor → momento | Indicador | Prioridade |
| --- | --- | --- | --- | --- |
| HU01 | Boas-vindas pós-adesão | Silêncio → Adesão | Entregabilidade das comunicações | alta |
| HU02 | Confirme seus contatos | Silêncio → Espera pela conexão | Entregabilidade das comunicações | alta |
| HU03 | Central de avisos | Silêncio → Espera pela conexão | Entregabilidade das comunicações | alta |
| HU04 | Acompanhe sua energia | Silêncio → Espera pela conexão | Churn do 1º mês | alta |
| HU05 | Entenda sua primeira fatura | Silêncio → Espera pela conexão | Pagamento da 1ª fatura | alta |

Histórias completas e critérios de aceite: [docs/historias.md](../historias.md)

## 4. Wireframes e navegação

| Tela | Wireframe |
| --- | --- |
| HU01 · Boas-vindas pós-adesão | [hu01-boas-vindas-pos-adesao.png](../wireframes/hu01-boas-vindas-pos-adesao.png) |
| HU02 · Confirme seus contatos | [hu02-confirmar-contatos.png](../wireframes/hu02-confirmar-contatos.png) |
| HU03 · Central de avisos | [hu03-central-de-avisos.png](../wireframes/hu03-central-de-avisos.png) |
| HU04 · Acompanhe sua energia | [hu04-acompanhe-sua-energia.png](../wireframes/hu04-acompanhe-sua-energia.png) |
| HU05 · Entenda sua primeira fatura | [hu05-primeira-fatura.png](../wireframes/hu05-primeira-fatura.png) |

**Fluxo de navegação:**

```
HU01 Boas-vindas ──► HU02 Confirme seus contatos ──► HU04 Acompanhe sua energia
                                                          │
                                                          └──► HU05 Primeira fatura

HU03 Central de avisos: acessível pelo sininho no cabeçalho de todas as telas
```

[AJUSTAR: confirmar o fluxo acima com o grupo]

## 5. O que foi entregue na Sprint 1

- [x] Repositório no padrão, com a estrutura-base e todos os integrantes como colaboradores
- [x] 5 personas individuais e 2 personas escolhidas (Fernando e Helena)
- [x] Mapas de jornada com dores ligadas a dados da Bulbe
- [x] Oportunidades registradas como Issues (label `oportunidade`)
- [x] 5 histórias de usuário com critérios de aceite, uma por integrante
- [x] 5 wireframes, um por tela, nomeados com o ID da história
- [x] README preenchido

## 6. O que ficou pendente

- [ ] [AJUSTAR: listar o que não foi concluído, ex.: oportunidades OP04 e OP05, padronização da barra de navegação]

## 7. Feedback recebido

- [AJUSTAR: anotar os comentários do professor durante a review]

## 8. Planning da Sprint 2 (26/10 a 06/11)

| Tarefa | Issue | Responsável |
| --- | --- | --- |
| Layout base, cabeçalho com sininho e barra de navegação | #[ ] | [] |
| Dados fictícios em `data/` (clientes, avisos, status) | #[ ] | [] |
| Implementar HU01 · Boas-vindas pós-adesão | #[ ] | [@bygor840] |
| Implementar HU02 · Confirme seus contatos (formulário com validação) | #[ ] | [@amorimplaura] |
| Implementar HU03 · Central de avisos | #[ ] | [@danielferreira88] |
| Implementar HU04 · Acompanhe sua energia | #[ ] | [@bpaolucci] |
| Implementar HU05 · Entenda sua primeira fatura | #[ ] | [@MariaCeciliaCotta] |
| Ajustes para celular e revisão final | #[ ] | [] |

**Regras da Sprint 2:** cada tarefa em uma branch própria, entrando na `main` só por Pull Request revisado por outro integrante.

**Meta da Sprint 2:** até 30/10, layout base, navegação e a primeira versão de cada tela lendo dados JSON com `fetch`; até 06/11, todas as telas concluídas, formulário com validação e layout ajustado para celular.

## 9. Próximos passos

1. Criar no quadro as Issues de implementação (label `implementacao`) com os responsáveis
2. Aplicar o feedback da review em `docs/historias.md` e nos wireframes
3. Começar a implementação na semana de 26/10