/* Desafio : Criar uma Lista com Nomes com Espaço */

const nomes = ['Reinaldo Zacharias', 'Gustavo Eduardo', 'Leonardo', 'Renata', 'Mara']

/* Resolvendo de Forma Funcional :
Dado que tenho uma lista de dados ::
minhaLista faça um fitro onde o item a cada acao este item se tiver incluso o que eu passar 
guarde na minha variavel reservada para o resultado

*/
const nomeComEspaco = nomes.filter(nome => nome.includes(' '))
console.log(nomeComEspaco)

/* ----------------------------------------------------------------------- */

/* Exemplo com Programacao Imperativa :
reservo na memoria um array vazio para receber o que espero guardar
faço um loop no meu array que tem os dados nao tratados e guarda numa var cada item da lista
em cada item guardo a cada interacao o item numa variavel
Comparacao : si a cada item tiver incluso o que espero o espaço 
coloco o que capturei nesta lista que tinha deixado reservada para guardar os dados que eu queria .
*/
// const nomeComEspaco = []
// for (const nome of nomes) {
//     if (nome.includes('')) {
//         nomeComEspaco.push(nome)
//     }
// }


