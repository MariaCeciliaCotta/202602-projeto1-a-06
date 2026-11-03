Bulbe Presente
Projeto em Ciência de Dados I · Ibmec BH · 2º semestre de 2026
Cliente: Bulbe Energia · Turma A · Squad 06

O Bulbe Presente é um protótipo web para orientar o cliente entre a adesão e a primeira fatura. A proposta é manter as informações acessíveis mesmo quando uma mensagem de WhatsApp não chega.

Situação em 03/11/2026: MVP em integração. O repositório tem a estrutura da HU01 e a HU04 na main; a finalização da HU01 está na PR #46. HU02, HU03 e HU05 ainda não aparecem na pasta pages/ da main; sua integração permanece pendente. A situação atual deve ser conferida na aba Pull requests.
1. Problema e evidências
Os dados apresentados pela Bulbe ao squad indicam dificuldades na comunicação e no primeiro pagamento durante a entrada de novos clientes:
- Clientes chegaram a passar até 20 dias sem comunicação durante o onboarding. Esse é um caso observado, não um prazo padrão de conexão.
- Aproximadamente 20% das mensagens de WhatsApp falham, inclusive comunicações relacionadas à fatura.
- A inadimplência da primeira fatura foi de 32,4% no período de setembro de 2025 a julho de 2026, segundo os dados utilizados pelo grupo.
Dor central escolhida: silêncio durante o onboarding, entre a adesão e a primeira fatura.
Indicador principal que a solução pretende melhorar: entregabilidade das comunicações — possibilidade de o cliente receber ou consultar as informações por canais alternativos.
Indicadores secundários: churn no primeiro mês e pagamento da primeira fatura.

Esses números contextualizam o problema. O protótipo não mede, por si só, melhorias reais nesses indicadores.
2. Personas e jornada
A solução considera Fernando, cliente de 34 anos, em Belo Horizonte, que precisa de orientações objetivas, e Helena, cliente de 63 anos, em Contagem, que busca segurança e clareza na contratação.
- [Mapas de jornada e evidências](docs/jornada.md)
- [Histórias de usuário e critérios de aceite](docs/historias.md)
- [Wireframes](docs/wireframes/)
3. Telas do MVP e rastreabilidade
Tela	Função	História / origem	Indicador
HU01 · Boas-vindas	Confirma o recebimento da adesão e orienta sobre as contas e etapas	#16 · OP01 #18	Entregabilidade
HU02 · Contatos	Permite conferir dados e canais de comunicação	#14 · OP02 #19	Entregabilidade
HU03 · Avisos	Reúne avisos e pendências em um só lugar	#17 · OP01 #18	Entregabilidade
HU04 · Energia	Mostra o andamento da conexão e a estimativa de economia	#15 · OP03 #20	Churn no 1º mês
HU05 · Primeira fatura	Explica a cobrança inicial e como consultar orientações	#13 · OP01 #18	Pagamento da 1ª fatura


Fluxo proposto, ainda sujeito à confirmação do grupo: HU01 → HU02 → HU04 → HU05; a HU03 seria acessível como central de avisos. A Sprint Review I ainda registra a necessidade de validar esse fluxo. A navegação integral depende de todas as páginas estarem integradas.
4. Como executar
Requisitos: navegador atualizado, VS Code e extensão Live Server (ou outro servidor HTTP local). Não é necessário instalar bibliotecas JavaScript.
1. Faça o clone do repositório ou baixe seu ZIP pelo GitHub.
2. Abra a pasta do projeto no VS Code.
3. Abra index.html com Open with Live Server.
4. Para testar a primeira etapa do fluxo, abra pages/hu01.html.
5. Para testar o acompanhamento de energia, abra pages/acompanhe-sua-energia.html.
Estado atual da página inicial: na main, o index.html ainda é um exemplo de estrutura inicial (mostra o título provisório "Nome da solução do squad"), e não a página final do MVP. Ele apresenta dados fictícios carregados de data/clientes.json com fetch, por meio de assets/js/main.js e assets/js/api.js. Abrir o HTML diretamente com file:// pode impedir a leitura do JSON. Use o Live Server.
Arquivos de navegação
Tela	Caminho relativo em pages/	Situação na main em 03/11/2026
HU01	hu01.html	Estrutura disponível; finalização pendente na PR #46
HU02	confirmar-contatos.html	Nome proposto; arquivo ainda ausente
HU03	central-de-avisos.html	Nome proposto; arquivo ainda ausente
HU04	acompanhe-sua-energia.html	Arquivo disponível
HU05	primeira-fatura.html	Nome proposto; arquivo ainda ausente


Importante: os nomes das três páginas ainda ausentes são propostas de integração, não caminhos já publicados. Devem ser confirmados com os responsáveis antes de fixar links definitivos. Consulte [os templates](docs/templates.md).
5. Tecnologias e estrutura
- HTML5, CSS3 (Flexbox, Grid, responsividade) e JavaScript puro.
- Dados fictícios em JSON, lidos com fetch onde necessário.
- GitHub Issues, branches, Pull Requests e Projects para organizar as entregas.
index.html                 Página inicial e dados de exemplo
pages/                     Telas do MVP
assets/css/                Estilos compartilhados e das telas
assets/js/                 Scripts e leitura dos dados JSON
assets/img/                Logos e imagens
data/                      Clientes e faturas fictícios
docs/jornada.md           Personas e jornadas
docs/historias.md         Histórias e critérios de aceite
docs/wireframes/          Wireframes e imagens das telas
docs/sprints/             Registro das Sprint Reviews
docs/avaliacao-final.md   Checklist planejado (ainda não publicado na main)
6. Organização e evidências de desenvolvimento
- PR #39 — README e padronização dos wireframes
- PR #41 — Template compartilhado
- PR #42 — Template exclusivo da HU01
- PR #44 — Implementação da HU04
- PR #45 — Estrutura e layout da HU01
- PR #46 — Finalização da HU01 (em revisão na data deste registro)
A regra registrada na Sprint Review I prevê integrar alterações à main por PR revisada por outro integrante. Os critérios de aceite são registrados em docs/historias.md e devem ser marcados somente após verificação.

Quadro: Aba Projects do repositório. O link direto do quadro utilizado pelo squad ainda precisa ser confirmado pelos integrantes.
7. Equipe
Integrante	GitHub	Responsabilidade
Bernardo Paolucci	@bpaolucci	HU04 · Energia
Daniel Ferreira	@danielferreira88	HU03 · Avisos
Laura Amorim	@amorimplaura	HU02 · Contatos
Maria Cecília Cotta	@MariaCeciliaCotta	HU05 · Primeira fatura
Ygor	@bygor840	HU01 · Pós-adesão


8. Entregas e acompanhamento
Etapa	Registro
Jornada, oportunidades e histórias	[Jornada](docs/jornada.md), [Histórias](docs/historias.md) e Issues
Wireframes	[Pasta de wireframes](docs/wireframes/)
Sprint Review I	[Registro](docs/sprints/README.md)
Implementação e Sprint Review II	[Preparação da Review II](docs/sprints/sprint-review-ii.md) — documento preparado, publicação pendente
Verificação de aceite e entrega final	[Checklist de avaliação](docs/avaliacao-final.md) — documento preparado, publicação pendente


Limites atuais: a aplicação ainda depende da integração das cinco telas, da verificação dos links e dos testes finais do grupo. Não há evidência de testes de ponta a ponta de todas as telas na main. Os dois documentos indicados como 'publicação pendente' acima precisam ser adicionados na mesma branch antes da abertura da PR de documentação.