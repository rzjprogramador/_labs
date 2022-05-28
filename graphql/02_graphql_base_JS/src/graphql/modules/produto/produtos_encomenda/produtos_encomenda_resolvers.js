import {
  colecaoProdutosEncomendaFAKES,
  prodEncomendaFAKE1,
} from '../../../utils/fakes/produto_encomenda_obj.js';

const getProdutoEncomendaMARRETADO = () => {
  return prodEncomendaFAKE1;
};

const getAllProdutosEncomendaMARRETADO = () => {
  return colecaoProdutosEncomendaFAKES;
};

const getAllProdutoEncomendaAPI = async (_, { inputPaginacao }, context) => {
  const prodPaginacaoApi = new URLSearchParams(inputPaginacao);
  const colecaoProduto = await context.getAllProdutosEncomendaAPIContext(
    `?${prodPaginacaoApi}`,
  );
  return colecaoProduto.json();
};

const getProdutoEncomendaApi = async (_, { id }, context) => {
  const uniqueProduto = await context.getUniqueUsersAPIContext('/' + id);
  return uniqueProduto.json();
};

const trivial_preco_final = ({ preco_base, acrescimo, desconto }) => {
  const preco_final = preco_base + acrescimo - desconto;
  return preco_final;
};

export const produtoEncomendaResolvers = {
  Query: {
    // OBS: IMPORTANTE TODAS ESSAS CONSULTAS TEM QUE ESTAR DEFINIDAS NA TIPAGEM QUE HABILITA ESTAS CONSULTAS
    getAllProdutosEncomendaMARRETADO,
    getProdutoEncomendaMARRETADO,
    getAllProdutoEncomendaAPI,
    getProdutoEncomendaApi,
  },
  ProdutoEncomenda: {
    trivial_preco_final,
  },
};
