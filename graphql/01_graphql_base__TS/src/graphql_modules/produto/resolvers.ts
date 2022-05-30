import { collection_Produtos_HARD } from '../../utils_gql/hardcoders/objetos_helpers/produtos_hardcode'


const getProduto = (_: any, args: any) => {
  const { id, } = args
  return collection_Produtos_HARD.find(item => item.id === id)
}


/*
* APONTAMENTO DE RESOLVERS
* REGISTRAR NO RESOLVERS CENTRALIZERS
*/

export const produtoResolvers = {
  Query: {
    getProduto,

  },

  // Mutation: {}
  
}