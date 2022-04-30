/* ALUNOS APROVADOS 
   VERSÃO :: DECLARATIVA >> FUNCIONAL */

// import { alunos } from '../../../../Estrutura_de Dados/dados/alunos'
// const alunos = require('../../../../Estrutura_de Dados/dados/alunos')

const alunos = [
    { nome: 'Reinaldo', nota: 9.9 },
    { nome: 'Gustavo', nota: 4.9 },
    { nome: 'Leonardo', nota: 7.9 },
    { nome: 'Victor', nota: 3.9 },
    { nome: 'Gabriel', nota: 8.9 },
    { nome: 'Felipe', nota: 3.9 },
    { nome: 'Dara', nota: 9.0 },
]

const estaAprovado = (aluno) => aluno.nota >= 7
const aprovados = alunos.filter(estaAprovado)

console.log( aprovados )

/* 
desafio:: ALUNOS APROVADOS ** versao :: DECLARATIVA >> FUNCIONAL 

1ª funcao:: intero no alvo- passo minha regra - espero receber um boleano
* Funcao anonima que retorna boleano :: 
    passo o interador<varNomeLivre> e a cada volta deste interador.propAlvo 
    e compara se é correspondente a minha regra maior ou igual a 7 para ser true

2ª funcao:: Usa injetando o resultado da primeira ::
* no array . faço um  filter() passando a informacao que traz meu alvo e guardo
.. guardar a informacao do resultado deste filtro 
e usar este guardado que tem a informacao completa agora
*/