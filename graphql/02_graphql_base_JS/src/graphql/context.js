import fetch from 'node-fetch';

const url_api = 'http:localhost:9999';
const url_produtoEncomenda = '/produtos_encomenda';
const useFinalPath = '/';

export const context = () => {
  return {
    getUsersAPI: (path = useFinalPath) => fetch(url_api + '/usuarios' + path),

    getAllProdutosEncomendaAPIContext: (path = useFinalPath) =>
      fetch(`${url_api}${url_produtoEncomenda}${path}`),

    getUniqueUsersAPIContext: (path = useFinalPath) =>
      fetch(url_api + '/produtos_encomenda' + path),
  };
};
