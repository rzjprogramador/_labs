import { USER_TEST_HARD_UM, USER_TEST_HARD_DOIS  } from '../../utils/helpers_obj/hardcode/objects'

// IMPLEMENTACOES DAS REFERENCIAS DE RESOLVERS
const texto = () => `Texto -->  1  <----`

const logico = () => true

const numeroInteiro = () => 10

const getUserTest = () => USER_TEST_HARD_UM 

const getAllUserTest = () => {
  return [
    USER_TEST_HARD_UM, USER_TEST_HARD_DOIS
  ]
}

// REFERENCIAS
export const hardCodeResolvers = {

  Query: {
    texto,
    logico,
    numeroInteiro,
    getUserTest,
    getAllUserTest,

  },
  // Mutation: {}
}

/**
 * RESOLVENDO AS DEFINICOES DE TIPOS
*/