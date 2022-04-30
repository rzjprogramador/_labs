/* LAMBDA FILTRAR PRIMEIRO NOME DOS IITEMS DA LISTA */

const nomes = ['Reinaldo Zacharias', 'Gustavo Eduardo', 'Leonardo Eduardo', 'Gabriel Arthur']

const primeiroNome = nomes.map((item) => item.split(' ')[0])
console.log(primeiroNome)

/* Fez um split recortou em nomes na posicao 0 onde estao os primeiros nomes  */
