/* o tipo é um obj então para definir -> usar : Dois Pontos.... */
/* Primeiro tem que definir o tipo e depois usar 

    Sintaxe :: <acesso> <nomeProp> : <tipoDaProp>
*/

// Boolean ::
let aberto: boolean
// eslint-disable-next-line @typescript-eslint/no-unused-vars
aberto = true

// String
let nome: string
nome = 'Reinaldo'

/* Number */
let total: number
total = 43

/* Number >> aceita hexadecimal tbm */
let hexadecimal: number
hexadecimal = 0xff0

/* array :: pode usar anotacaoes normal ou generica */

/* anotacao normal  :: define com tipo[]  */
let items: number[]
items = [1, 2, 3]

/* anotacao generic  >>  como Anotacao Generic : Array<tipo> */
let itemsString: Array<string>
itemsString = []

/* tuple >> è um array que sabemos o numero de items e o tipo */
let tupla: [number, string, boolean]
tupla = [43, 'Reinaldo', true]

/* enum >> enumerator passa uma chave mas o valor é outro*/
enum Colors {
    branco = '#fff',
    preto = '000',
}
console.log(Colors.branco)

/* any >> qualquer coisa -- evitar */
let coisa: any
coisa = 'qualquer tipo pode ser - melhor nem tipar entao'

/* void >> vazio :: quando nao retorna nada -- nao preciso nem tipar -- só por convencao*/
/* exemplo : console.log --nao retorna nada só joga info no console */
function logger(): void {
    console.log('foo')
}

/* null / undefined >> da informacao de falsy - nao definido 
    - evite usar como tipoprimitivo pq depois nao consegue mudar o valor da var */
type Bla = string | undefined

/* never >> nunca >> nunca vai retornar .. pode ser usado para excessao ..esta nunca vai retornar */
function error(): never {
    throw new Error('jogando erro - é um erro nunca vai retornar')
}

/* object >> Que esteja dentro de chaves e tbm Tudo aquilo que nao seja um tipo primitivo -- */
let carrinho: object

carrinho = {
    chave: 'foo',
}
console.log(carrinho)

/* INFERENCIA DE TIPOS -- type Inference >> variaveis assinaladas ja recebem seu tipo nao precisa tipar */
const mensagem2 = 'mensagem ja assinalei como string - encoste o mouse e veja'

window.addEventListener('click', evento => {
    evento.target
})
