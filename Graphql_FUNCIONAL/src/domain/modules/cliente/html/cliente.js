const { singleton } = require('../../../../../dist/src/domain/modules/cliente/Cliente')

function createCliente() {
  const newCliente = singleton.createCliente()
}

console.log(singleton)

console.log('Oiii --1 ---')
