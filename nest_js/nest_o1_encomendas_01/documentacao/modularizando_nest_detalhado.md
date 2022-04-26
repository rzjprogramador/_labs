# MODULARIZANDO
> MODULO ROOT É O INICIAL
> 
# CONTROLE
> CADA CONTROLE É UMA ROTA REST JA PADRAO DO NEST COLOCAMOS EM STRING DENTRO DA ANOTACAO DO MODULO O RECURSO/ENDERECO DA ROTA

> SOB O CONTROLE
> - As Rotas São definidas no Controle
- Controle é a entrada das requisicoes externas http e 
> ele faz o mapeamento
- Pega a requisicao do Navegador ..
- manda esta requisicao para algum lugar ..
- e retorna a resposta apra quem fez a requisicao.
> ROTEAMENTO DE ROTAS REST: No nest os Routers são os controllers

### CRIANDO ROTA 
Importe o metodo Get dentro de '@nestjs/common'
use o decorator @Get('Em string o nome da rota que vai ter antes automaticamente o nome do modulo')
- abaixo crie a funcao que vai retornar algo nesta rota
---

## DELETAR UM MODULO 
- Tem que deletar as linhas onde ele esta sendo importado : provavelmente no App module Root Principal
- E o Query do GraphQL tem que ter aumenos uma Query Root ..para ser considerado um servidor valido de graphql
- solucao: senao tiver nenhuma Query em uso: entrar no app module Root Principal e comentar o GraphQLMOdule.forRoot inteiro.
- 