interface Leitor2 {
    ler(arquivo: string): void 
}



/* ------------------------------------------- */


class Manipulador2 {
    leitor: Leitor2

    constructor() {}
}
/* Instanciando e Utilizando a class Manipuladora  */

const objManipulador2 = new Manipulador2()
objManipulador2.leitor.ler(`Lendo na Instanciacao`)


/*  
Ainda nao deu certo ! #ToDO
*/