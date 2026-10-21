# Bulbe Presente

> Projeto em Ciência de Dados I · Ibmec BH · 2º semestre de 2026
> Cliente: **Bulbe Energia** · Turma **A** · Squad **06**

Aplicação web que acompanha o cliente novo da Bulbe entre a adesão e a primeira fatura, para que ele nunca fique sem saber o que está acontecendo, mesmo quando as mensagens de WhatsApp não chegam.

---

## 1. Problema

Os dados apresentados pela Bulbe mostram que o problema está na entrada do cliente, não na carteira: a inadimplência da 1ª fatura é de 32,4%, contra 1,6% na carteira com mais de 4 meses. Entre as causas apontadas pela empresa, o squad escolheu atacar o período entre o "sim" do cliente e a chegada da primeira fatura, quando ele fica sem nenhum sinal de que o processo está andando.

- **Dor escolhida:** silêncio no onboarding
- **Evidência:** clientes chegaram a ficar até 20 dias sem nenhuma comunicação da Bulbe, e cerca de 20% das mensagens de WhatsApp falham (inclusive a que leva a fatura)
- **Indicador principal que a solução pretende mover:** entregabilidade das comunicações, entendida como o percentual de clientes novos que recebem e veem as informações do onboarding por qualquer canal (WhatsApp, e-mail ou site)
- **Indicadores secundários:** churn do 1º mês (HU04) e pagamento da 1ª fatura (HU05)

## 2. Persona e jornada

- **Persona A:** Fernando, 34 anos, analista de RH em Belo Horizonte; aderiu pelo celular, tem rotina corrida e espera ser avisado quando precisar agir
- **Persona B:** Helena, 63 anos, aposentada em Contagem; aderiu com a ajuda do filho, tem pouca familiaridade com tecnologia e medo de golpe
- **Mapa de jornada:** [docs/jornada.md](docs/jornada.md)
- **Momentos críticos:** Adesão e Espera pela conexão

## 3. Solução

Cinco telas, uma por integrante, que mantêm o cliente informado durante a espera sem depender só do WhatsApp.

| Tela | O que faz | História relacionada | Indicador |
| --- | --- | --- | --- |
| Boas-vindas pós-adesão | Confirma a adesão e explica as próximas etapas e por que o cliente ainda paga a Cemig | HU01 | Entregabilidade das comunicações |
| Confirme seus contatos | Permite confirmar ou corrigir telefone e e-mail e escolher os canais de atualização | HU02 | Entregabilidade das comunicações |
| Central de avisos | Reúne as mensagens enviadas pela Bulbe e as pendências do cliente, com prazo | HU03 | Entregabilidade das comunicações |
| Acompanhe sua energia | Mostra em que etapa está a adesão, da usina até a casa, e a economia estimada | HU04 | Churn do 1º mês |
| Entenda sua primeira fatura | Explica como será a primeira cobrança e o que fazer se ela não chegar | HU05 | Pagamento da 1ª fatura |

- **Histórias de usuário:** [docs/historias.md](docs/historias.md)
- **Wireframes:** [docs/wireframes/](docs/wireframes/)

## 4. Tecnologias

- HTML, CSS e JavaScript puro (vanilla)
- Dados fictícios em JSON, lidos com `fetch` (pasta [`data/`](data/))
- Git e GitHub (Issues, Projects e Pull Requests)

## 5. Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/MariaCeciliaCotta/202602-projeto1-a-06.git
   ```
2. Abra a pasta no VS Code.
3. Instale a extensão **Live Server** (o VS Code vai sugerir automaticamente).
4. Clique com o botão direito em `index.html` e escolha **Open with Live Server**.

> Abrir o `index.html` direto no navegador (duplo clique) não funciona: o `fetch` dos arquivos JSON exige um servidor.

## 6. Estrutura do repositório

```
├── index.html            # Página inicial
├── pages/                # Demais telas da solução
├── assets/
│   ├── css/style.css     # Estilos
│   ├── js/main.js        # Lógica da página inicial
│   ├── js/api.js         # Leitura dos dados (fetch)
│   └── img/              # Imagens e ícones
├── data/
│   ├── clientes.json     # Clientes fictícios
│   └── faturas.json      # Faturas fictícias
├── docs/
│   ├── jornada.md        # Personas e mapas de jornada
│   ├── historias.md      # Histórias de usuário e critérios de aceite
│   ├── personas/         # Personas criadas por cada integrante
│   ├── wireframes/       # Wireframes das telas (hu01 a hu05) e mapas de jornada
│   └── sprints/          # Registro das Sprint Reviews
└── .github/              # Modelos de Issue e de Pull Request
```

## 7. Quadro do projeto

- **GitHub Projects:** [LINK_DO_QUADRO]

## 8. Equipe

| Integrante | GitHub | Papel principal |
| --- | --- | --- |
| Bernardo Paolucci | [@bpaolucci](https://github.com/bpaolucci) | [HU04] — [Acompanhamento de energia] |
| Daniel Ferreira | [@danielferreira88](https://github.com/danielferreira88) | [HU03] — [Central de avisos] |
| Laura Amorim | [@amorimplaura](https://github.com/amorimplaura) | [HU02] — [Confirmação de contatos] |
| Maria Cecília Cotta | [@MariaCeciliaCotta](https://github.com/MariaCeciliaCotta) | [HU05] — [Primeira fatura] |
| Ygor | [@bygor840](https://github.com/bygor840) | [HU01] — [Boas vindas e pós adesão] |

## 9. Entregas

| Marco | Aula | Status |
| --- | --- | --- |
| Mapa de jornada | 19 | ✅ Concluído |
| Histórias de usuário | 20 | ✅ Concluído |
| Wireframes | 21–23 | ✅ Concluído |
| Sprint Review I | 24 | ⏳ Em andamento |
| Implementação | 25–28 | — |
| Sprint Review II | 29 | — |
| Versão final | 30 | — |
