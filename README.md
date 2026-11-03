# Bulbe Presente

> Projeto em Ciência de Dados I · Ibmec BH · 2º semestre de 2026  
> Cliente: **Bulbe Energia** · Turma **A** · Squad **06**

O **Bulbe Presente** é um protótipo web que orienta o cliente entre a adesão e a primeira fatura. A proposta é oferecer informações acessíveis mesmo quando uma mensagem de WhatsApp não chega.

**Situação em 03/11/2026:** MVP em integração. A `main` contém a estrutura da HU01 e a página da HU04. A finalização da HU01 está na [PR #46](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/pull/46), ainda aberta nesta verificação. HU02, HU03 e HU05 ainda não possuem páginas na pasta `pages/` da `main`. Confira o andamento atualizado na aba [Pull requests](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/pulls).

## 1. Problema e evidências

Os dados apresentados pela Bulbe ao squad indicam dificuldades de comunicação e de pagamento durante a entrada de novos clientes:

- Clientes chegaram a passar **até 20 dias sem comunicação** durante o onboarding. Trata-se de um caso histórico observado, **não de um prazo padrão de conexão**.
- Aproximadamente **20% das mensagens de WhatsApp falham** na entrega, inclusive comunicações sobre a fatura.
- A inadimplência da primeira fatura foi de **32,4%** no período de setembro de 2025 a julho de 2026, segundo os dados utilizados pelo grupo.

**Dor central escolhida:** silêncio no onboarding, entre a adesão e a primeira fatura.  
**Indicador principal que a solução pretende melhorar:** entregabilidade das comunicações, considerando o recebimento das mensagens e o acesso alternativo às orientações.  
**Indicadores secundários:** churn no primeiro mês e pagamento da primeira fatura.

Esses números contextualizam o problema. **O protótipo não comprova, por si só, melhorias reais nesses indicadores.**

## 2. Personas e jornada

A solução considera **Fernando**, cliente de 34 anos, em Belo Horizonte, que precisa de orientações objetivas, e **Helena**, cliente de 63 anos, em Contagem, que busca segurança e clareza na contratação.

- [Mapas de jornada e evidências](docs/jornada.md)
- [Histórias de usuário e critérios de aceite](docs/historias.md)
- [Wireframes](docs/wireframes/)

## 3. Telas do MVP e rastreabilidade

| Tela | Função | História e oportunidade de origem | Indicador |
| --- | --- | --- | --- |
| **HU01 · Boas-vindas** | Confirma o recebimento da adesão e orienta sobre contas e próximas etapas | [HU01 #16](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/16) · [OP01 #18](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/18) | Entregabilidade |
| **HU02 · Contatos** | Permite conferir dados e canais de comunicação | [HU02 #14](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/14) · [OP02 #19](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/19) | Entregabilidade |
| **HU03 · Avisos** | Reúne avisos e pendências em um só lugar | [HU03 #17](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/17) · [OP01 #18](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/18) | Entregabilidade |
| **HU04 · Energia** | Mostra o andamento da conexão e a estimativa de economia | [HU04 #15](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/15) · [OP03 #20](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/20) | Churn no 1º mês |
| **HU05 · Primeira fatura** | Explica a cobrança inicial e onde buscar orientações | [HU05 #13](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/13) · [OP01 #18](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/18) | Pagamento da 1ª fatura |

**Fluxo proposto, sujeito à confirmação do grupo:** HU01 → HU02 → HU04 → HU05. A HU03 funcionaria como central de avisos. O registro da Sprint Review I ainda pede validação desse fluxo. A navegação integral depende de todas as páginas estarem integradas.

## 4. Como executar

**Requisitos:** navegador atualizado, VS Code e extensão **Live Server** (ou outro servidor HTTP local). Não são necessárias bibliotecas JavaScript externas.

1. Clone o repositório ou baixe o ZIP pelo GitHub:

   ```bash
   git clone https://github.com/MariaCeciliaCotta/202602-projeto1-a-06.git
   ```

2. Abra a pasta do projeto no VS Code.
3. Abra `index.html` com **Open with Live Server**.
4. Para testar a primeira etapa do fluxo, abra `pages/hu01.html`.
5. Para testar o acompanhamento, abra `pages/acompanhe-sua-energia.html`.

**Página inicial atualmente na `main`:** `index.html` ainda é uma página de exemplo, com o título provisório “Nome da solução do squad”. Ela carrega dados **fictícios** de `data/clientes.json` com `fetch`, por meio de `assets/js/main.js` e `assets/js/api.js`. A abertura com `file://` pode impedir a leitura do JSON; use o Live Server.

### Situação dos arquivos de navegação

| Tela | Caminho em `pages/` | Situação na `main` em 03/11/2026 |
| --- | --- | --- |
| HU01 | `hu01.html` | Estrutura disponível; finalização na PR #46 |
| HU02 | `confirmar-contatos.html` | Nome proposto; arquivo ausente |
| HU03 | `central-de-avisos.html` | Nome proposto; arquivo ausente |
| HU04 | `acompanhe-sua-energia.html` | Arquivo disponível |
| HU05 | `primeira-fatura.html` | Nome proposto; arquivo ausente |

**Atenção:** os nomes das três páginas ausentes são um contrato de integração **proposto**, não links publicados. Antes de renomear ou referenciar essas páginas no código, confirme os nomes com os responsáveis. Consulte [os templates](docs/templates.md).

## 5. Tecnologias e estrutura

- **HTML5**, **CSS3** (incluindo responsividade) e **JavaScript puro**.
- Dados fictícios em **JSON**, lidos com `fetch` quando necessário.
- **GitHub Issues, branches, Pull Requests e Projects** para organizar as entregas.

```text
index.html                 Página inicial provisória
assets/css/               Estilos compartilhados e das telas
assets/js/                Scripts e leitura dos dados JSON
assets/img/               Logos e imagens
data/                     Clientes e faturas fictícios
docs/jornada.md           Personas e jornadas
docs/historias.md         Histórias e critérios de aceite
docs/wireframes/          Wireframes e imagens
docs/sprints/             Registro de Sprint Reviews
pages/                    Páginas do MVP (integração em andamento)
```

## 6. Organização e evidências de desenvolvimento

- [PR #39 — README e padronização dos wireframes](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/pull/39)
- [PR #41 — Template compartilhado](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/pull/41)
- [PR #42 — Template exclusivo da HU01](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/pull/42)
- [PR #44 — Implementação da HU04](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/pull/44)
- [PR #45 — Estrutura e layout da HU01](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/pull/45)
- [PR #46 — Finalização da HU01 (aberta em 03/11/2026)](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/pull/46)
- [PR #47 — Atualização da documentação](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/pull/47)

O grupo organiza alterações em branches e PRs, com revisão antes da integração à `main`. Os critérios de aceite estão descritos em [docs/historias.md](docs/historias.md) e devem ser marcados após verificação.

**Quadro:** [aba Projects do repositório](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/projects). O link direto do quadro do squad ainda depende de confirmação.

## 7. Equipe

| Integrante | GitHub | Responsabilidade |
| --- | --- | --- |
| Bernardo Paolucci | [@bpaolucci](https://github.com/bpaolucci) | HU04 · Energia |
| Daniel Ferreira | [@danielferreira88](https://github.com/danielferreira88) | HU03 · Avisos |
| Laura Amorim | [@amorimplaura](https://github.com/amorimplaura) | HU02 · Contatos |
| Maria Cecília Cotta | [@MariaCeciliaCotta](https://github.com/MariaCeciliaCotta) | HU05 · Primeira fatura |
| Ygor | [@bygor840](https://github.com/bygor840) | HU01 · Pós-adesão |

## 8. Entregas e acompanhamento

| Etapa | Registro |
| --- | --- |
| Jornada, oportunidades e histórias | [Jornada](docs/jornada.md), [histórias](docs/historias.md) e Issues |
| Wireframes | [Pasta de wireframes](docs/wireframes/) |
| Sprint Review I | [Registro](docs/sprints/README.md) |
| Implementação e Sprint Review II | Roteiro em preparação: `docs/sprints/sprint-review-ii.md` |
| Verificação de aceite e entrega final | Checklist em preparação: `docs/avaliacao-final.md` |

**Limites atuais:** faltam integrar as cinco telas, verificar links de navegação e realizar testes finais do fluxo com o grupo. Não há registro de teste de ponta a ponta de todas as telas integradas na `main`.
