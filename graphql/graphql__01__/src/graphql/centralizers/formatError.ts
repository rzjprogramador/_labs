import { MSG } from '../../generics_app/helpers/mensagens/error_mensagens'

// FORMATACOES DE ERROS

const notCadastro = (err: any): Error | any => {
  if(err.message.startsWith(`${MSG.ERR_EXCEPTION}`)) {
    return new Error(err.message)
  }
  return err // RETORNA ERRO QUE NAO É CONTROALDO PELA APP - EX: ERRO SINTAXE
}

// SÓ PARA EXPORTAR - TODO CONSEGUIR EXPORTAR MAIS QUE UM TRATAMENTO DE ERRO
export const formatErrorControll = notCadastro
