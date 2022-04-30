/*
match === partida
FUNCOES match executa de dentro da string :: encontra o procurado em //

*/

const { texto2, texto3 } = require('./ajuda/fonte2')



const regex2 = /Reinaldo|Renata|gustavo/gi;
// console.log(texto1.match(regex2))

const regex3 = /Rock/gi;
console.log(texto3.match(regex3))

/* Substituir com replace colocando a regex no primeiro parametro a ser mudado
com  flag >>  gi  ele pega todas ocorrencias desejadas */
console.log(texto2.replace(/Rock/gi, 'Samba'))

// TROCOU TODOS PEDIDOS PELO DEFINIDO NO 2º PARAMS
console.log(texto3.replace(/usa|Canada|MExiCO/gi, 'AMERICA'))

/*
 guardando grupos em variaveis $1, $2 ... e repassando pra elas o que fizer ao seu entorno no 2º param
  REFLETIU SOMENTE NOS VALORES PEDIDOS
*/
console.log(texto3.replace(/(usa|BRASIL)/gi, '<h1>$1</h1>'))

// Guardando em mais variaveis e modificando no 2º param --obs: ta zando todo o texto junto!
console.log(texto3.replace(/(USA) , (CANADA) , (MEXICO)/gi, '$1 "$2" <<$3>>'))

// FUNÇÕES JS NO 2º PARAM
// Utilizando uma função para Transformar em caixa alta os desejados
console.log(texto3.replace(/(usa|canada)/gi, function(input) {
    return input.toUpperCase()
}))

// O QUE COLOCAR NO RETURN VAI RETORNAR EX:
console.log(texto3.replace(/(usa|canada)/gi, function(input) {
    return '#############' + input.toUpperCase() + '>>>>>>>>>>>>>>>>>>>>>>'
}))

// O QUE COLOCAR NO RETURN VAI RETORNAR + EX:
console.log(texto3.replace(/(usa|canada)/gi, function(input) {
    return `%%%%%%%%%%%% ## ${input.toUpperCase()} >>>>>>>>>>>>>>>>>###########`
}))