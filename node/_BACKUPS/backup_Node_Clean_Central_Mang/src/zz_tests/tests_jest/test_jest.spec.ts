import { soma } from '@/zz_tests/importacao_de_modulos/soma/soma'

describe('Tests Jest', () => {

    it('Inicio', () => {

        expect(1 + 1).toBe(2)
    })

    it('Testar Modulo soma', () => {
        const sut = soma({ a: 10, b: 10 })

        expect(sut).toBe(20)
    })

})