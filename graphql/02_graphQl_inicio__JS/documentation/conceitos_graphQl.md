# OBJETO CONTEXTO 
> USADO paRA BUSCAR DADOS EXTERNOS E DISPONIBILIZAR EM TOdDOS RESOLVERS
4 parametros disponiveis: (obj, arg, context, info)
> DETALHAMENTO CADA PARAMETRO ::
- 1-obj :: tambem definido como parent :: 

- 2- arg ::argumentos que podem ser passados para o resolver.

- 3 -context :: pode ser passado informacoes por contexto :: util apra passar informacoes apra todos os resolvers...
ex: fazer login de usuario pode passar por contexto o token do usuario.
ex: quando quiser passar um fetch especifico para cada usuario .
ex: quando for passar uma conexao de banco de dados para cada resolver.
ex: passar data source , data loader...

- 4- info.

>> Uso nos params : cada posicao que nao for usar passar um underline 
ex: para usar somente o contexto : (_,__, context)
passe um handerline, dois hunderline , o context, senao for usar o ultimo passe não passe nada.

---
# BUSCANDO DADOS EXTERNOS :: DE UMA API
No resolver singular :: busco na fonte de dados e nela passo o id primeiramente hardCode inserindo no fim da url o /id em numero
e retorno o dado no formato exigido json() o graph ja resolve em json nativamente.

No resolver plural de array :; busco na url que traz os dados e retorno os dados no formato.

### BUSCAR DADOS EXTERNOS VIA PARAMS
Para buscar via param usar o 2 parametro do resolver que é o arg de argumentos pode extrair o id porque sabe que ele virá.
Tem que definir na Tipagem e na Consulta via param e valor do param... que vai buscar por parametro algo tambem.