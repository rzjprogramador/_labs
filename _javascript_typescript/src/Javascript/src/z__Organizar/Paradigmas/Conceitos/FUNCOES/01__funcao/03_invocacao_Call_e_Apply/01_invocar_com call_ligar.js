/* 
CALL == ligar    &      APPLY == aplicar
UMA FUNCAO É UM OBJETO SE DIGITAR O NOME DA FUNCAO SEGUIDOD E PONTO VERA OS METODOS QUE PODE USAR

AQUI USAREMOS ENTRE ELES CALL E APPLY
ELES SAO UTILIZADOS APRA INDICAREM EM QUAL ESCOPO UMA FUNCAO TEM QUE SER EXECUTADA


*/

let getIdade = function() {
    return this.idade
    /* a funcao esta pedindo this --qual escopo quem chama esta onde ela for usada  */
}

// Objeto
let pessoa = {
    nome: 'Joao',
    idade: 20,

    getIdade: getIdade
}

/* ANALISANDO INVOCAÇÕES  */

console.log( pessoa.getIdade() )  /* = 20 -- O this se refere ao objeto pessoa por isso deu ok  */
console.log( getIdade() )  /* = undefined -- Deu indefinido porque o this se refere ao escopo global - a funcao esta pedindo this --qual escopo quem chama esta  */
console.log( getIdade.call(pessoa) )  /* = 20 -- deu ok --ligou o objeto com o call() e passou por contexto o objeto. e nele foi conferido o objeto ao this */
