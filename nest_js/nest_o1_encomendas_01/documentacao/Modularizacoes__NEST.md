# DESABILITAR CORRECAO ORTOGRAFICA NO PROJETO
> VAI CRIAR O ARQUIVO extensions.json NO .vscode do projeto com: 
F1 / create a CS Spell configuration >> crie o arquivo cspell.json 
e adicione no final após o import: [], a propriedade :

"enabled": false

---

# GRAPHQL NO NEST

### Para ter endPoint para o Client :
- (REST) criar Modulo / Controler // Service 
- (GRAPHQL) criar classe Object Type / Classe Resolver // Service

> MODULARIZACAO :
>> diferente do Rest :: Nao cria modulo, 
- Cria a classe modelo de tipo de objeto  @ObjectType e mescla a tipagem ts com graphql ...

> ROTA // ENDPOINT NO GRAPHQL SAO OS METODOS DA CLASSE RESOLVER :
- classeResolver : É declarada com o decorador @Resolver() 
> Fluxo : 
- criar a classe modelo da entidade com os campos mesclados entre tipos: " TS com typeFunctionGraphQL"
- Endpoint // Rota : são os seus metodos que resolvem os modelos tipados ao Client  

> Metodos Resolvers com decorador @Query:
- são para consulta , quando o client quer somente buscar uma informacao do modelo
> Metodos Resolvers com decorador @Mutation:
- são para mutacoes, quando o cliente quer mudar uma informacao.

A classe Resolvers seria como um modulo controller, que recebe as requisicoes pedidos do ClientHTTP e devolve uma resposta via metodos resolvers com auxilio dos atributos injetados de servicos 

> Integracoes de atributos servicais :
- pode injetar e usar inumeros servicos avontade.

> Recebendo requisicoes pedidos do ClientHTTP :
>> somente nos metodos resolvers e mutations em seus parametros :
- utilizamos os decoradores @Args , @Body e assim capturamos as requisicoes 
- isto é semelhante aos controlllers do Rest que capta os Argumentos do Client.

---



