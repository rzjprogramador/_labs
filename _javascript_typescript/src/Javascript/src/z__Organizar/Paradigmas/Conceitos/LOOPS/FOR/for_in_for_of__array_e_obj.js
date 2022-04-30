let colecao = [{nome: 'Rei', idade: 43, jogando: true},
                {nome: 'Gu', idade: 11, jogando: true},
                {nome: 'Leo', idade: 04, jogando: true},]

let objeto = {nome: 'ReiObj', idade: 43, jogando: true}


for (let assume in objeto) {
console.log(objeto[assume])
}

for (let assume of colecao) {
  console.log(assume)
}