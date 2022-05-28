const pedidos = () => {
  return [
    {
      id: '1 MARRETADO',
      preco: 15.1,
      indexRef: 1,
      createdAt: '2022-03-09T15:15:18.817Z',
    },
    {
      id: '2 MARRETADO',
      preco: 15.1,
      indexRef: 1,
      createdAt: '2022-03-09T15:15:18.817Z',
    },
  ];
};

const pedido = () => {
  return {
    id: '1 MARRETADO',
    preco: 15.1,
    indexRef: 1,
    createdAt: '2022-03-09T15:15:18.817Z',
  };
};

export const pedidosResolvers = {
  Query: {
    pedido,
    pedidos,
  },
};
