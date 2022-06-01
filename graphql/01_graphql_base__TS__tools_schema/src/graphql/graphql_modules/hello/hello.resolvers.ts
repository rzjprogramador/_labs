
/*
* METODOS RESOLVEDORES DE CONSULTA E MODIFICAOES :: REFERENCIAR NO EXPORTADOR 
*/


const hello = () => {
  return {
    texto: 'Hello Texto',
    logico: true
  }
}


/*
* APONTAMENTO DE RESOLVERS
*/

export default {
  Query: {
    hello,

  },

  // Mutation: {}
  
}
