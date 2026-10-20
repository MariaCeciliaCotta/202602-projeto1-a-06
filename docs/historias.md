# Histórias de usuário

> Entregável da aula 20. Cada história nasce de uma oportunidade do mapa de jornada e vira uma Issue com o label `historia`.

| ID | História | Oportunidade de origem | Prioridade | Issue |
| --- | --- | --- | --- | --- |
| HU01 | Como [persona], quero [ação] para [benefício]. | [ ] | [alta/média/baixa] | #[ ] |
| HU04 | Como Helena, aposentada que aderiu com a ajuda do filho e quase não usa aplicativo, quero ver numa tela simples em que ponto está a minha adesão, da usina até a minha casa, e quanto vou economizar, para ter certeza de que o processo está andando enquanto ainda pago a Cemig e não desistir achando que caí em golpe. | OP03 #20 – Visibilidade do andamento da contratação | alta | #15 |
| HU05 | Como Helena, aposentada que aderiu à Bulbe com a ajuda do filho e tem dificuldade com tecnologia, quero acessar uma explicação simples sobre como funcionará minha primeira fatura, para saber o que esperar da cobrança, entender a relação entre as contas da Cemig e da Bulbe e não ficar preocupada enquanto aguardo. | OP01 #18 Orientações sobre a primeira fatura durante o pós-adesão | alta | #13 |


## Critérios de aceite

### HU01
- [ ] [critério verificável]

### HU04
**Persona:** Helena (persona 2) · **Momento da jornada:** Adesão → Espera pela conexão
**Dor e evidência:** silêncio no onboarding; clientes chegaram a ficar 20 dias sem nenhuma comunicação da Bulbe, e a falta de entendimento do produto é o principal motivo de churn (27,7%, acumulado desde 2022).
**Indicador que pretende mover:** churn do 1º mês
**Tela:** "Acompanhe sua energia" (`docs/wireframes/hu04-acompanhe-sua-energia.png`)

- [ ] A tela abre no celular, pelo site, sem instalar app e sem criar senha
- [ ] Uma ilustração animada mostra o caminho usina → rede da Cemig → casa, e a energia avança até a etapa atual, de acordo com o `status` do cliente em `data/clientes.json` (`aguardando_qualificacao`, `em_conexao`, `conectado`)
- [ ] Cada etapa tem uma frase simples dizendo o que está acontecendo e se a cliente precisa fazer algo (sim/não)
- [ ] Antes da conexão, a tela mostra a data prevista da conexão e a economia estimada por mês, calculada a partir do consumo médio e do desconto do cliente
- [ ] Depois da conexão, um gráfico (rosca em CSS) mostra a energia recebida da Bulbe e a economia acumulada
- [ ] A tela mostra quando os dados foram atualizados pela última vez ("Atualizado em dd/mm às hh:mm")
- [ ] Um aviso fixo explica "Continue pagando a Cemig até a conexão" e o porquê
- [ ] Se a etapa passar do prazo previsto, aparece um aviso de atraso com uma nova previsão
- [ ] Toda informação da animação também aparece em texto, e a animação é desligada quando o celular pede menos movimento (`prefers-reduced-motion`)
- [ ] Fonte grande, bom contraste e botões grandes, legíveis em tela de celular

### HU05

**Persona:** Helena (persona 2) · **Momento da jornada:** Espera pela conexão → Chegada da primeira fatura

**Dor e evidência:** A primeira fatura é um momento crítico da jornada do cliente pessoa física. A Bulbe registrou 32,4% de inadimplência na primeira fatura no acumulado de setembro de 2025 a julho de 2026 e identifica esse primeiro pagamento como um dos principais desafios da entrada do cliente. Além disso, a versão anterior da fatura apresentava transparência de custos limitada, baixo nível de instrução aos usuários e não comunicava de forma clara a economia proporcionada pela Bulbe. A falha média de 20% na entrega de mensagens pelo WhatsApp também pode impedir que clientes recebam comunicações e a própria fatura.

**Indicador que pretende mover:** inadimplência da 1ª fatura

**Tela:** "Entenda sua primeira fatura" (`docs/wireframes/hu05-primeira-fatura.png`)

- [ ] A tela pode ser acessada pelo celular, por meio do site, sem necessidade de instalar um aplicativo.
- [ ] A tela apresenta uma explicação simples sobre como funciona a primeira fatura da Bulbe.
- [ ] Uma seção explica a diferença entre a cobrança da Cemig e a cobrança da Bulbe, esclarecendo por que o cliente pode receber contas das duas empresas.
- [ ] A tela orienta o cliente sobre quais pagamentos devem continuar sendo realizados durante o período de espera pela conexão.
- [ ] A tela informa os canais utilizados pela Bulbe para enviar a primeira fatura, como WhatsApp e e-mail.
- [ ] Uma seção explica o que fazer caso a primeira fatura não seja recebida, indicando como buscar ajuda pelos canais oficiais da Bulbe.
- [ ] As informações permanecem disponíveis para consulta mesmo que o cliente não receba as mensagens de comunicação da Bulbe.
- [ ] A tela utiliza linguagem simples, fontes legíveis, bom contraste, botões adequados para navegação pelo celular e elementos acessíveis para usuários com pouca familiaridade com tecnologia.
