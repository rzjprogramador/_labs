import { MSG } from '../utils_gql/mensagens/error_mensagens'

// FORMATACOES DE ERROS

const notCadastro = (err: any) => {
  if(err.message.startsWith(`${MSG.NOT_CADASTRO}`)) {
    return new Error(err.message)
  }
}

// SÓ PARA EXPORTAR - TODO CONSEGUIR EXPORTAR MAIS QUE UM TRATAMENTO DE ERRO
export const formatErrorControll = notCadastro
