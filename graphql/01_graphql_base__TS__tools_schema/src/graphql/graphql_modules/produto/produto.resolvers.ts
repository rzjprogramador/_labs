import { mergeResolvers } from '@graphql-tools/merge'

import { collection_Produtos_HARD } from '../generics_graphql/hardcoders/repositorios_hardcode/produtos_hardcode'

/*
* METODOS RESOLVEDORES DE CONSULTA E MODIFICAOES :: REFERENCIAR NO EXPORTADOR 
*/

const getProduto = (_: any, args: any) => {
  const { id, } = args
  return collection_Produtos_HARD.find(item => item.id === id)
}


/*
* APONTAMENTO DE RESOLVERS
* CENTRALIZAR MODULO NO CENTRALIZERS/RESOLVERS
*/

export const produtoResolvers = {
  Query: {
    getProduto,

  },

  // Mutation: {}
  
}

