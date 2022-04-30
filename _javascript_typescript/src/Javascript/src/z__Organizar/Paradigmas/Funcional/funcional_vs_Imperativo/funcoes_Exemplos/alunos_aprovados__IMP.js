/* ALUNOS APROVADOS 
   VERSÃO :: PROPCEDURAL IMPERATIVO */

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


const aprovados = []

for (let i = 0; i < alunos.length; i++) {
    if(alunos[i].nota >= 7) {
        aprovados.push(alunos[i])
    }
}

console.log( aprovados )