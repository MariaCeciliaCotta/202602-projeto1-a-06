# Bulbe Presente

> Projeto em Ciência de Dados I · Ibmec BH · 2º semestre de 2026  
> Cliente: **Bulbe Energia** · Turma **A** · Squad **06**

O **Bulbe Presente** é um protótipo web do app da Bulbe que acompanha o cliente entre a adesão e a primeira fatura. A proposta é que o cliente encontre no app tudo o que precisa saber, mesmo quando uma mensagem de WhatsApp não chega.

**Situação em 05/11/2026:** MVP **concluído**. As cinco telas do MVP estão implementadas e integradas na `main`, com navegação entre elas, dados fictícios lidos de JSON e o mesmo visual em todas as telas.

## 1. Problema e evidências

Os dados apresentados pela Bulbe ao squad indicam dificuldades de comunicação e de pagamento durante a entrada de novos clientes:

- Clientes chegaram a passar **até 20 dias sem comunicação** durante o onboarding. Trata-se de um caso histórico observado, **não de um prazo padrão de conexão**.
- Aproximadamente **20% das mensagens de WhatsApp falham** na entrega, inclusive comunicações sobre a fatura.
- A inadimplência da primeira fatura foi de **32,4%** no período de setembro de 2025 a julho de 2026, segundo os dados utilizados pelo grupo.
- A falta de entendimento do produto é o principal motivo de churn (**27,7%**, acumulado desde 2022).

**Dor central escolhida:** silêncio no onboarding, entre a adesão e a primeira fatura.  
**Indicador principal que a solução pretende melhorar:** entregabilidade das comunicações, considerando o recebimento das mensagens e o acesso alternativo às orientações.  
**Indicadores secundários:** churn no primeiro mês e pagamento da primeira fatura.

Esses números contextualizam o problema. **O protótipo não comprova, por si só, melhorias reais nesses indicadores.**

## 2. Personas e jornada

O mapa de jornada oficial usa **Fernando**, 34 anos, em Belo Horizonte, que precisa de orientações objetivas, e **Helena**, 63 anos, em Contagem, que busca segurança e clareza. As personas individuais de cada integrante também viraram clientes de demonstração (veja a seção 4).

- [Mapas de jornada e evidências](docs/jornada.md)
- [Personas](docs/personas/)
- [Histórias de usuário e critérios de aceite](docs/historias.md)
- [Wireframes](docs/wireframes/)

## 3. Telas do MVP e rastreabilidade

| Tela | Arquivo | Função | História e oportunidade | Indicador |
| --- | --- | --- | --- | --- |
| **HU01 · Boas-vindas** | `pages/hu01.html` | Confirma o recebimento da adesão e orienta sobre as próximas etapas e sobre qual conta pagar | [HU01 #16](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/16) · [OP01 #18](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/18) | Entregabilidade |
| **HU02 · Contatos** | `pages/confirmar-contatos.html` | Formulário com validação em JS para conferir celular, e-mail e canal preferido | [HU02 #14](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/14) · [OP02 #19](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/19) | Entregabilidade |
| **HU03 · Avisos** | `pages/central-de-avisos.html` | Reúne avisos e pendências; o que foi lido fica salvo no navegador | [HU03 #17](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/17) · [OP01 #18](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/18) | Entregabilidade |
| **HU04 · Energia** | `pages/acompanhe-sua-energia.html` | Tela principal: caminho da energia, etapa atual, atraso, pendência e economia | [HU04 #15](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/15) · [OP03 #20](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/20) | Churn no 1º mês |
| **HU05 · Primeira fatura** | `pages/primeira-fatura.html` + 4 telas de explicação | Explica a primeira fatura, qual conta pagar e como ela chega | [HU05 #13](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/13) · [OP01 #18](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/issues/18) | Pagamento da 1ª fatura |

**Fluxo do app:** no primeiro acesso depois da adesão, a HU01 leva à HU02 e dá acesso às outras telas. Nos acessos seguintes, a tela principal é a HU04. O menu de baixo (Energia · Avisos · Fatura · Contatos) liga todas as telas, e o sininho do cabeçalho mostra uma bolinha quando há pendência ou aviso não lido.

## 4. Como executar

**Requisitos:** navegador atualizado, VS Code e extensão **Live Server** (ou outro servidor HTTP local). Não são necessárias bibliotecas externas. Abrir os arquivos direto (`file://`) impede a leitura dos JSON.

1. Clone o repositório:

   ```bash
   git clone https://github.com/MariaCeciliaCotta/202602-projeto1-a-06.git
   ```

2. Abra a pasta do projeto no VS Code.
3. Abra `index.html` com **Open with Live Server**.
4. Escolha um cliente. O app abre na tela de Energia com os dados dele, e o mesmo cliente é mantido ao navegar entre as telas.

### Clientes de demonstração

Os clientes de `data/clientes.json` são fictícios e baseados nas personas. Cada um mostra um estado diferente das telas:

| Cliente | Energia (HU04) | Avisos (HU03) |
| --- | --- | --- |
| 1 · Helena Martins | Em conexão, no prazo | 1 pendência: confirmar o WhatsApp |
| 2 · Fernando Lima | Conectado: energia recebida e economia | Sem pendências; 1ª fatura a caminho |
| 3 · Mariana Souza | Adesão parada: falta a conta de luz | 2 pendências |
| 4 · Lucas Almeida | Aguardando a análise da conta | Sem pendências |
| 5 · Geraldo Costa | Conexão atrasada, com nova previsão | Sem pendências |

Para trocar de cliente, toque no ícone de menu do cabeçalho (volta para o `index.html`) ou use `?cliente=N` na URL de qualquer tela. Para voltar os dados ao estado inicial, limpe o armazenamento local do navegador (DevTools → Application → Local Storage).

## 5. Tecnologias e estrutura

- **HTML5**, **CSS3** e **JavaScript puro**, com layout pensado primeiro para celular.
- Dados fictícios em **JSON**, lidos com `fetch`.
- **GitHub Issues, branches e Pull Requests** para organizar as entregas.

```text
index.html                 Entrada da demonstração (escolha do cliente)
pages/                     Telas do app
assets/css/cores.css       Cores, fonte e medidas de todas as telas
assets/css/bulbe-ui.css    Cabeçalho, menu de baixo e sininho
assets/css/<tela>.css      Estilo de cada tela
assets/js/api.js           Leitura dos JSON
assets/js/app.js           Código comum: cliente atual, regras dos avisos e sininho
assets/js/<tela>.js        Comportamento de cada tela
assets/img/                Logos
data/                      Clientes, avisos e faturas fictícios
docs/                      Jornada, personas, histórias, wireframes e sprints
```

Para criar uma nova tela, veja [o modelo de página](docs/templates.md).

## 6. Organização e evidências de desenvolvimento

O grupo trabalhou com uma branch por tarefa e Pull Requests revisados antes da integração à `main`. Principais PRs da implementação:

- [PR #41](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/pull/41) — Template compartilhado com cabeçalho e menu
- [PR #44](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/pull/44) — HU04 · Acompanhe sua energia
- [PR #45](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/pull/45) e [PR #46](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/pull/46) — HU01 · Boas-vindas
- [PR #48](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/pull/48) — HU02 · Confirme seus contatos
- [PR #51](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/pull/51) e [PR #53](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/pull/53) — HU05 · Primeira fatura e telas de explicação
- [PR #52](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/pull/52) — HU03 · Central de avisos
- [PR #54](https://github.com/MariaCeciliaCotta/202602-projeto1-a-06/pull/54) — Pendência de contato confirmado e cliente mantido entre telas
- Branch `feat/personas-clientes` — clientes das personas, visual unificado, sininho em todas as telas e limpeza do repositório

Os critérios de aceite estão em [docs/historias.md](docs/historias.md).

## 7. Equipe

| Integrante | GitHub | Responsabilidade |
| --- | --- | --- |
| Bernardo Paolucci | [@bpaolucci](https://github.com/bpaolucci) | HU04 · Energia |
| Daniel Ferreira | [@danielferreira88](https://github.com/danielferreira88) | HU03 · Avisos |
| Laura Amorim | [@amorimplaura](https://github.com/amorimplaura) | HU02 · Contatos |
| Maria Cecília Cotta | [@MariaCeciliaCotta](https://github.com/MariaCeciliaCotta) | HU05 · Primeira fatura |
| Ygor | [@bygor840](https://github.com/bygor840) | HU01 · Pós-adesão |

## 8. Entregas

| Etapa | Registro |
| --- | --- |
| Jornada, oportunidades e histórias | [Jornada](docs/jornada.md), [histórias](docs/historias.md) e Issues |
| Wireframes | [Pasta de wireframes](docs/wireframes/) |
| Sprint Review I | [Registro](docs/sprints/README.md) |
| Sprint Review II | [Roteiro da demonstração](docs/sprints/sprint-review-ii.md) |
| MVP | Telas em `pages/`, entrada em `index.html` |

**Limites do protótipo:** os dados são fictícios e o que a pessoa confirma ou lê fica salvo só no navegador. O botão "Falar com a Bulbe no WhatsApp" e o perfil do cabeçalho são ilustrativos e não levam a nenhum lugar. O ícone de menu (hambúrguer) do cabeçalho volta para o `index.html`. Essa é uma adaptação para a apresentação, e não a função real do ícone: o protótipo representa só uma parte do app da Bulbe (o período entre a adesão e a primeira fatura), e no app completo esse ícone abriria o menu lateral com as demais áreas. Aqui ele serve para trocar o cliente da demonstração.
