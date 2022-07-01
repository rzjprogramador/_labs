import { MSG_EXCEPTION } from '@src/globals/message/messages'

import { GraphQLError, GraphQLFormattedError } from 'graphql'

// FORMATACOES DE ERROS GRAPHQL

export const formatError = (error: GraphQLError): GraphQLFormattedError => {
  if (error.message.startsWith(`${MSG_EXCEPTION.DEFAULT}`)) {
    return new Error(error.message)
  }
  if (error && error.extensions) {
    // ENVIADO POR SOLUCOES
    error.extensions.code = `${MSG_EXCEPTION.DEFAULT}`
  }
  return error
}
