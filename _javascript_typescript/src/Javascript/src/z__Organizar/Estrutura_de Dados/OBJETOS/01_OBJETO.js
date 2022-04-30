/* Objeto Literal -- Com valores ja preenchidos*/

const pessoa = {
    nome: 'Reinaldo',
    sobrenome: 'Zacharias',
    idade: 21,
    profissao: 'Programador',

    fazAniversario() {
        this.idade++
    },
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    },
}


console.log(pessoa.fazAniversario())
console.log(pessoa.fazAniversario())
console.log(pessoa.fazAniversario())
console.log(pessoa.fazAniversario())
console.log(pessoa)

console.log(pessoa.nomeCompleto())
// console.log(pessoa)
