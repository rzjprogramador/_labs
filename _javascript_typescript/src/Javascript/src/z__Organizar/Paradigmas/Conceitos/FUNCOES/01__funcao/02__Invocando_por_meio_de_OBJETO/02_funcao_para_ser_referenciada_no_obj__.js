// Esta funcao sera acessada dentro do obj
let getIdade = function() {
    return this.idade
}

// Objeto
let pessoa = {
    nome: 'Joao',
    idade: 20,

    getIdade: getIdade
}

console.log( pessoa.getIdade() )