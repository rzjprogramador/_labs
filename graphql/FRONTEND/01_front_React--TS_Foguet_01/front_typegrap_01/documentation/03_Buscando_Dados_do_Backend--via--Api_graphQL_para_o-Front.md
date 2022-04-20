# BUSCAR DADOS DO BACKEND VIA API GRAPHQL PARA FRONT 
> no arquivo do front
## NO ESCOPO FUNCOES :: FORA DO ESCOPO DO APP QUE SERÁ MOSTRADO :
> criar uma variavel de operacao passando para ela o gql do apollo:
- ::  const GET_USER = gql``
- dentro do template literals - fazer a consulta semelhante ao feito no playground
query {
  recurso {
    campos que quer retornar
  }
}

# NO ESCOPO DA FUNCAO APP QUE SERÁ MOSTRADO NA FRONT
> USAR A FUNCAO DO APOLLO useQuery() passando nossa operacao para ela e nos retornando um capturado data com os dados
> extraimos o data e o loading
> data == trará os dados que podemos ver no console 
> loading == é o carregamento da pagina podemos fazer algo com ele , alguma acao enquanto carrega os dados ... primeiro usa o loading e depois usa o data no jsx
> FAZER CONDICAO:
> if tiver usando loading mostre um paragrafo Carregando...
> senao retorna o que quero os dados :: 

## FAZER UM LOOP PARA MOSTRAR TODOS OS DADOS DO ARRAY
> retorne o seguinte: retorn()
> em html uma lista :: <ul>
> nela ::{ percorre o data.ARRAYusers . USA O LOOP MAP 
> .map( para cada item 
> coloca um elemento html <li key={item.id}>
> dentro desta lista vamos colocar o campo que vem dos dados da api que queremos mostrar ex:
> {data.nome} 
> ) }
> obs: como usamos tyoescript informar qual é o tipo desta Entidade que estamos usando 
> tipo um type DTO criamos o type com as props da Entidade e passamos como paramGenerico  para o useQuery()

## PASSANDO TIPO DA ENTIDADE BUSCADA PARA O USEQUERY GENERICAMENTE:
> NA HORA QUE FAZ A QUERY no useQuery dentro dos param de generico <>
> < passa a referencia do que ela vai receber : e o que ela será , se for objeto tudo dentro de chaves. > 
> ex: useQuery< { users: User[] } > // Vai receber uma ref de array : que será um MonteDestaEntidade[]