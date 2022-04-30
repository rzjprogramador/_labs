type carroTem = {
    body: any
}

class AcessoriosController {
    constructor (private readonly suspensao: SuspensaoEssencial) {} 
        /* METODO PARA USAR O QUE OBTIVE DA REQUISICAO POR MEIO DO METODO auxiliar()  abaixo : 
            Metodo criado para a instancia para preencher os dados do objeto depois da instanciacao*/ 
        handleCar (rq: carroTem) {
            
            const { rodas, pneu } = rq.body
            this.suspensao.ajustar(rodas, pneu)

        } 
}

class SuspensaoEssencial {
    /* METODO PRA OBTER OS DADOS DO QUE VOU USAR DA REQUISICAO */ 
    ajustar(rodas: string, pneu: string) {
        console.log(rodas, pneu)
        return true
    }
}

/* UTILIZAR */
const suspensao1 = new SuspensaoEssencial()
const acessorio1 = new AcessoriosController(suspensao1)

acessorio1.handleCar({
    body: {
        rodas: 'rodas passadas',
        pneu: 'pneu passado'
    }
})


/* 
NA INTENCIAÇÃO -- HORA DE UTILIZAR AS CLASSES COMO OBJETOS
 Para o objeto que tem uma funcao esperando dados para agir 
sobre eles eu apsso o objeto que tem esses dados esperados

E para a funcao dentro da classe que espera algo devollvo o que ela espera no formato que ela espera

Como o preenchimento do Obj de Instancia vai vir do body 
que é um objeto que traz obj dentro este preenchimento é feito depois da instanciacao
chamando o metodo criado para receber este obj


 */
