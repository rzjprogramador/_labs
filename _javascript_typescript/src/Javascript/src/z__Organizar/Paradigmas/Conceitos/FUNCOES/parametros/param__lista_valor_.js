// ---------------------------------------
// ENTRADA DE DADOS

lista1 = ['Programar', 'Dancar', 'Jogar']
listaObj = [{ nome: 'Reinaldo', idade: 43 }, { nome: 'Gustavo', idade: 11 }, { nome: 'Leonardo', idade: 04 }, ]


// ---------------------------------------
// LISTA DE ITEMS -- FUNCAO PRA BUSCAR DADOS POR ARG SEM MUDAR A LISTA

function hobbies(args) {
    return args
}
console.log(hobbies(lista1))

// ---------------------------------------
// LISTA DE ITEMS -- FUNCAO PRA BUSCAR DADOS PELA POSICAO - SEM MUDAR 

function hobbiesPosicao(args) {
    return args[1]
}
console.log(hobbiesPosicao(lista1))
// ---------------------------------------


// ---------------------------------------
/* LISTA DE ITEMS - FUNCAO PRA BUSCAR DADOS PELA POSICAO  -- E -- TRANSFORMANDO 
// Para modificar os items do array temos que acessar os items com loop de mapeamento 
e modificar com funcoes modificadoras */

function hobbiesMaiusculos(args) {
    return args.map((items) => items.toUpperCase())
}
console.log(hobbiesMaiusculos(lista1))

// ---------------------------------------

// ---------------------------------------
/* LISTA DE OBJETOS -- FUNCAO PRA BUSCAR DADOS PELA POSICAO
// Para modificar os items do array temos que acessar os items com loop de mapeamento 
e modificar com funcoes modificadoras */

function hobbiesObjProp(args) {
    return args.map((items) => items.nome)
}
console.log(hobbiesObjProp(listaObj))
// ---------------------------------------

// ---------------------------------------
/* LISTA DE OBJETOS -- FUNCAO PRA BUSCAR DADOS PELA POSICAO E MODIFICAR */

function propObjMaiusculo(args) {
    return args.map((items) => items.nome.toUpperCase())
}
console.log(propObjMaiusculo(listaObj))
// ---------------------------------------