# Template das telas

Todas as telas usam o mesmo cabeçalho e o mesmo menu de baixo, com as cores e a fonte do app atual da Bulbe. É só HTML e CSS.

## Arquivos

| Arquivo | O que é |
| --- | --- |
| `pages/_modelo.html` | Página com o cabeçalho e o menu prontos |
| `assets/css/bulbe-ui.css` | Estilo do cabeçalho, do menu e do sininho |
| `assets/css/cores.css` | Cores, fonte e medidas de todas as telas (já importado pelo `bulbe-ui.css`) |
| `assets/js/app.js` | Código comum: mantém o cliente entre as telas e acende o sininho |
| `assets/img/logo-bulbe-branco.svg` | Logo do cabeçalho |

## Como usar

1. Copie `pages/_modelo.html` e renomeie com o nome da sua tela:

   | Tela | Arquivo |
   | --- | --- |
   | HU02 Confirme seus contatos | `pages/confirmar-contatos.html` |
   | HU03 Central de avisos | `pages/central-de-avisos.html` |
   | HU04 Acompanhe sua energia | `pages/acompanhe-sua-energia.html` |
   | HU05 Entenda sua 1ª fatura | `pages/primeira-fatura.html` |

   Os links do menu usam esses nomes. Com outro nome, o menu não acha a sua tela.

2. No menu de baixo, coloque `class="ativo"` no link da sua tela e tire do link de Energia.
3. Escreva o conteúdo dentro de `<main>`.
4. Os estilos da sua tela vão num CSS seu (ex.: `assets/css/central-de-avisos.css`). Não altere o `bulbe-ui.css` sem combinar com o squad.
5. Use as variáveis do `cores.css` (ex.: `var(--cor-verde)`) em vez de escrever as cores, para a tela ficar igual às outras.

A tela de boas-vindas (HU01) não tem menu de baixo: é só apagar o `<nav class="menu">`.
