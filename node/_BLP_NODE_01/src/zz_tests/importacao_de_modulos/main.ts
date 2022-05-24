import { soma } from '@soma/soma'
// import { soma } from '@/zz_tests/importacao_de_modulos/soma/soma'
import { subtracao } from '@/zz_tests/importacao_de_modulos/sub/subtracao'

const somaUm = soma({ a: 1, b:1 })
console.log(somaUm)

const subUm = subtracao({a: 100, b:50})
console.log(subUm)