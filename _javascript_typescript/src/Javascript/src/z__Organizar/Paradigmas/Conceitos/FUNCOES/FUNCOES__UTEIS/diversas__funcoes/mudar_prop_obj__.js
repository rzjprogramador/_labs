/* MUDAR PROPRIEDADE DE OBJETO  */

const carro = { marca: 'Toyota', modelo: 'Accord', ano: 1998 }

function mudarModeloCarro(obj) {
    obj.modelo = 'NovoModelo'
}
mudarModeloCarro(carro)
console.log(carro.modelo)


/*
FUNCAO MUDAR VALOR DE PROP DO OBJETO :

criar o objeto alvo


Criar funcao minha funcao -- passar obj de entrada
devolva a esta entrada alguma prop que vai querer MUDAR do obj alvo 


invocar a funcao passando o obj -- 

DEPOIS ACESSAR A MUDANCA :
objeto.propriedade que desejava mudar

*/
