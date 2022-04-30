/* Este arquivo tera tudo que tem no jest.config e mais a prop que vou alterar/ sobreescrever aqui */

const config = require('./jest.config')

// sobreescrever no jest.config a prop testMatch --que vai rodar qualquer arquivo .test.ts

config.testMatch = ['**/*.test.ts']

module.exports = config
