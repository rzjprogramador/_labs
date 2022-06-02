import 'module-alias/register'
import { addAliases } from 'module-alias'

addAliases({
  '@/': `${__dirname}/../../src/`,
  // '@services': `${__dirname}/services`,
})

// instalar tipos module alias : @types/module-alias