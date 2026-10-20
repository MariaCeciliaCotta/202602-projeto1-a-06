# Histórias de usuário

> Entregável da aula 20. Cada história nasce de uma oportunidade do mapa de jornada e vira uma Issue com o label `historia`.

| ID | História | Oportunidade de origem | Prioridade | Issue |
| --- | --- | --- | --- | --- |
| HU01 | Como [persona], quero [ação] para [benefício]. | [ ] | [alta/média/baixa] | #[ ] |

## Critérios de aceite

### HU01
- [ ] [critério verificável]
### HU03

**Persona:** Fernando (persona 1) · **Momento da jornada:** Adesão → Espera pela conexão · **Dor e evidência:** silêncio no onboarding; clientes chegaram a ficar 20 dias sem nenhuma comunicação da Bulbe, e cerca de 20% das mensagens de WhatsApp falham, então o cliente pode perder avisos importantes. · **Indicador que pretende mover:** churn do 1º mês · **Tela:** "Central de avisos" (*imagem*)

- [ ] Lista os avisos do cliente lidos de um arquivo JSON com fetch, do mais recente para o mais antigo
- [ ] Cada aviso mostra data, título, texto curto e canal de envio (WhatsApp, e-mail ou app)
- [ ] Pendências aparecem no topo, destacadas e com prazo
- [ ] Sem pendências, a tela exibe "Nenhuma pendência. Seu processo está andando."
- [ ] Avisos não lidos aparecem destacados e são marcados como lidos ao abrir
- [ ] Layout funciona no celular (360px) sem rolagem horizontal
- [ ] Página carrega sem erros no console