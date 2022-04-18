# Configurar Servidor Graph
> no arquivo lib/apollo.ts ::
Importar do @apollo/client as classes ApolloClient e InMemoryCache
- criar um client que será um objeto com a instancia do new ApolloClient()
- opcoes do obj ::usar a propriedade uri 

## CONSUMIR API :: PELA PROP : URI
> prop. uri do ApolloClient permite acessar e utilizar uma url de api
- nela passamos a api que queremos consumir

## DEFINIR CACHE EM MEMORIA :: PELA PROP : CACHE 
- A prop cache que vamos criar neste obj d econfiguracao será uma instancoa da classe apollo new InMemoryCache() // obs: Sem nenhum param

# ENVOLVENDO NOSSO APP COM ESTAS CONFIGURACOES DO SERVIDOR APOLLO
> No arquivo inicial da app main.ts 
> POR VOLTA do componente principal <App> inserimos o componente <ApolloProvider>
> e para ele passamos as propriedades de objetos configurados no apollo :
> passamos o client={client} // que é o que configuramso como instancia do ApolloCliente({})


>> VAMOS BUSCAR DADOS DO BACKEND VIA API GRAPHQL PARA FRONT >> continua ...