
/*
* METODOS RESOLVEDORES DE CONSULTA E MODIFICAOES :: REFERENCIAR NO EXPORTADOR 
*/

import { mergeResolvers } from '@graphql-tools/merge'

const hello = () => {
  return {
    texto: 'Hello Texto',
    logico: true
  }
}


/*
* APONTAMENTO DE RESOLVERS
*/

export const helloResolvers = {
  Query: {
    hello,

  },

  // Mutation: {}
  
}

// EXPORTAR RESOLVER PARA MERGE_RESOLVERS
// export const resolvers = mergeResolvers([ helloResolvers, ])