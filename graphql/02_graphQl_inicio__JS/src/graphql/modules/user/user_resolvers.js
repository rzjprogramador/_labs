/* eslint-disable no-unused-vars */

const user = async (_, { id, teste }, { getUsersAPI }) => {
  console.log(teste);
  const user = await getUsersAPI('/' + id);
  return user.json();
};

const users = async (_, { inputPaginacao }, { getUsersAPI }) => {
  const usersPaginacaoApi = new URLSearchParams(inputPaginacao);
  // console.log(paginacaoApi.toString());

  const users = await getUsersAPI('?' + usersPaginacaoApi);
  return users.json();
};

// RESOLVER TRIVIAL :: RESOLVENDO RESULTADO DE OPERACOES ENTRE CAMPOS EXISTENTES NO OBJETO
const campo_Resultado_Operacao_Trivial_Entre_Campos = ({ nome, email }) => {
  return `O resultado de nome e email juntos será ${nome} + ${email}`;
};

// MAPEAMENTO DE RESOLVERS :: E EXPORTANDO AS REFERECNIAS RESOLVIDAS
export const userResolvers = {
  Query: {
    user,
    users,
  },
  User: {
    campo_Resultado_Operacao_Trivial_Entre_Campos,
  },
};
