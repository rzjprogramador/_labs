# FALTA DO OBJETO Query
a falta do objeto Query: {} dentro da funcaode exportacao que traz os resolvers() :::estoura o seguinte erro ::

throw new Error(`"${typeName}" defined in resolvers, but has invalid value "${resolverValue}". The resolver's value must be of type object.`);

---
# ERRO DE INTERAVEL NA CONSULTA DA API EXTERNA
- Se der erro de interavel na consulta da api externa 
- O erro é devido a chave pesquisada nao esta de acordo com a chave passada na configuracao da url da api no context
- no erro esta passando a chave e a linha do erro uqe esta na api externa
- erro :
- Expected Iterable, but did not find one for field \"Query.getProdutoEncomendaAPI\"."

# RETORNANDO NULO
SE UM CAMPO CONSULTADO RETORNAR NULO É PORQUE NAO FOI RESOLVIDO()

