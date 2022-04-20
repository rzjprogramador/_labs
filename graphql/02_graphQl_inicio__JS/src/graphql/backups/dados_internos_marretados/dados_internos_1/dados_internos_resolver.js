const createDadoInterno = () => {
  return {
    id: '1',
    texto: 'texto',
    numero: 'numero',
    decimal: 10,
    logico: true,
  };
};

const listDadosInternos1 = () => {
  return [
    { id: '1', texto: 'texto', numero: 10, decimal: 100.11, logico: true },
    {
      id: '2',
      texto: 'texto2',
      numero: 20,
      decimal: 200.22,
      logico: false,
    },
    { id: '3', texto: 'texto3', numero: 30, decimal: 300.33, logico: true },
  ];
};

export const resolverDadoInterno = {
  Query: {
    interno1: createDadoInterno,
    internos1: listDadosInternos1,
  },
};
