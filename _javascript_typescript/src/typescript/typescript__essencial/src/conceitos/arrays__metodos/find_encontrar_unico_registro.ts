/*
find() == buscar()
Buscar unico registro dentro de um array
- A verificacao é exata ao que foi passado 
ele vai verificar em cada campo especificado o que procuro 
A verificacao tem que utilizar um operador boleano
*/

// Meus usuarios
const reinaldo1 = { nome: "Reinaldo", empresa: "Rzj", idade: 43, salario: 10_000 }
const renata1 = { nome: "Renata", empresa: "Renata Empresa", idade: 40, salario: 20_000  }
const gustavo1 = { nome: "Gustavo", empresa: "Guga Express", idade: 11, salario: 30_000  }

// Array dos meus usuarios
const usuarios = [ reinaldo1, renata1, gustavo1 ] 


// ----------------------------------------------------


// biscar Usuario com nome Renata
const usuario = usuarios.find(u => u.nome === 'Renata') 
// console.log(usuario)


// Buscar usuario que trabaçlha exatamente na empresa Guga Express
const trabalhaEmpresaGuga = usuarios.find(e => e.empresa === 'Guga Express')
// console.log(trabalhaEmpresaGuga)


// Buscar quem tem salario maior que 20_000
const salario20M = usuarios.find(s => s.salario > 20_000)
console.log(salario20M)