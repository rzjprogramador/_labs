/* FUNCAO COMO TIPO  :: CONTRATO / ASSINALAR / UTILIZAR */

/* CONTRATO - METODO  */
type Calculador = (x: number, y: number) => number

/* ASSINALANDO  */
const add: Calculador = (x, y) => x + y
const sub: Calculador = (x, y) => x - y
const mult: Calculador = (x, y) => x * y
const div: Calculador = (x, y) => x / y

/* UTILIZACAO ::  */
const somaDupla = console.log( add(2, 2) )
const subtracaoDupla = console.log(sub(10, 3))
const multDupla = console.log(mult(5, 5))
const divisaoDupla = console.log(div(20, 5))