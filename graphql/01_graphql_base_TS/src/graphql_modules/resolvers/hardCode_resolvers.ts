import { USER_TEST_HARD_UM, USER_TEST_HARD_DOIS  } from '../../utils/helpers_obj/hardcode/objects'

export const hardCodeResolvers = {

  Query: {
    texto: () => {
      return `Texto -->  1  <----`
    },

    logico: () => true,

    numeroInteiro: () => 10,

    userTest: () => {
      return USER_TEST_HARD_UM 
    },

    allUserTest: () => {
      return [
        USER_TEST_HARD_UM, USER_TEST_HARD_DOIS
      ]
    }

  },
  // Mutation: {}
}

/**
 * RESOLVENDO AS DEFINICOES DE TIPOS
*/