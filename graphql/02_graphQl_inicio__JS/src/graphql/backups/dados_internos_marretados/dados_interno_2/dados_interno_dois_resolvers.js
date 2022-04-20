const createDadoInternoDois = () => {
  return { id: '1', texto: 'texto 1', numero: 10 };
};

const dadoInternoDoisAll = () => {
  return [
    { id: '1', texto: 'texto 1', numero: 10 },
    { id: '2', texto: 'texto 2', numero: 20 },
    { id: '3', texto: 'texto 3', numero: 30 },
  ];
};

export const resolverDadosInternosDois = {
  Query: {
    dadoInternoDois: createDadoInternoDois,
    dadoInternoDoisAll,
  },
};
