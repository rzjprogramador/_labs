const user = async (_, { id }, { getUsersAPI }) => {
  const user = await getUsersAPI('/' + id);
  return user.json();
};

const users = async (_, __, { getUsersAPI }) => {
  const users = await getUsersAPI();
  return users.json();
};

// EXPORTANDO AS REFERECNIAS RESOLVIDAS
export const userResolvers = {
  Query: {
    user,
    users,
  },
};

export default 1;
