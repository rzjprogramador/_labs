describe('O QUE VAMOS TESTAR', () => {
    it('sub descricao >> it', () => {
        const varTestar = 10
        expect(varTestar).toBe(10)
        expect(varTestar).toBeLessThanOrEqual(30)
        expect(varTestar).toBeCloseTo(9.999)
        
    })

})


describe('OBJETOS', () => {
    it('Testando Assertions em Objetos', () => {
        const pessoa1 = { nome: 'Reinaldo', idade: 43, casado: true  }
        const anotherPessoa = { ...pessoa1 }

        expect(pessoa1).toEqual(anotherPessoa)
        expect(pessoa1).toHaveProperty('idade', 43)
        
    })

})