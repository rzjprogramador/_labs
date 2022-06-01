import { collection_Produtos_HARD } from '../generics_graphql/hardcoders/repositorios_hardcode/produtos_hardcode'

/*
* METODOS RESOLVEDORES DE CONSULTA E MODIFICACOES 
*/

const getProduto = (_: any, args: any) => {
  const { id, } = args
  return collection_Produtos_HARD.find(item => item.id === id)
}


/*
* EXPORT REFERENCIAS RESOLVERS
*/

export default {
  Query: {
    getProduto,

  },

  // Mutation: {}
  
}

