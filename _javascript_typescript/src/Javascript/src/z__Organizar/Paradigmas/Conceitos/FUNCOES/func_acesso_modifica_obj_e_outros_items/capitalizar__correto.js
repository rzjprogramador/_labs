export function captalizar(colecao, attr) {
    if (colecao.length > 0) {
        if (typeof colecao[0] == 'object' && attr) {
            colecao.map((item) => (item[attr] = item[attr].charAt(0).toUpperCase() + item[attr].slice(1)))
        } else {
            colecao.map((item) => (item = item.charAt(0).toUpperCase() + item.slice(1)))
        }

        return colecao
    }
}

/*
<CONDICIONAL> :: Certificar que o que foi passado tem items
<CONDICIONAL> :: Certificar que o que foi passado na primeira posicao é um obj E qualquer tipo
<MAPEAR> :: mapear o interavel pegando o item e a cada item na posicao que foi passado

  <TRANFORMAR> :: Transformar cada item com funcoes modificadoras :: 
  :: MAPEAR O INTERAVEL - E PRA CADA ITEM DELE -- MODIFICAR O ITEM -- CONCATENANDO AS MODIFICACOES
  pegando a primeira letra e passando pra caixaAlta e ja concatenar com o item na posicao modificar o resto apartir da primeira posicao
  juntando assim a primeira modificada com o restante "Tudo direto sem ficar guardando em variaveis"

<else>
Senao for a primeira condicao: 
<MAPEAR> :: MAPEAR O INTERAVEL - E PRA CADA ITEM DELE -- MODIFICAR O ITEM -- CONCATENANDO AS MODIFICACOES
<RETORNAR> :: NO FIM RETORNAR O INTERAVEL QUE FOI PASSADO DE VOLTA

OBS:: EVITAR QUARDAR RESULTADOS EM VARIAVEIS 
:: PROCURAR CADA INSTRUCAO JA RESOLVER DENTRO DA EXPRESSAO
*/