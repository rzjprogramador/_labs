
#  RETORNO COLECAO  */
_array: ContextoItem [] = []
// retorno de uma colecao, de um tipo array que inicia vazio - para iniciar vazio e ir adicionando items

#  ADICIONAR ITEM  */
adicionar item na colecao()
recebe um item : retorna vazio >> /adiciona o item no array/ ex:  _array.push( no item )

// UTILIZAR :
const obj1 = new Classe()
obj1.addItem({ nome: 'EntregaZonaLeste', preco: 14.9 })

---

#  REMOVER ITEM DA COLECAO */
remover item na colecao()
recebe o indice : retorna vazio >> /remove com slice o item no array, no 2º passando quantos vai remover > 1/ 
ex:  _array.splice(index, 1)

// UTILIZAR
removeItem(< Passa o id do item a ser removido >)

---

#  LISTAR - VISUALIZAR O CONTEUDO ATUAL DA COLECAO - com GETTER  */

/* 
    get array sem _ que é uma funcao do tipo < SóLeitura de ContextoItem array[]> e
    devolve a colecao  

    ... Para acessar na utilizacao 
    faz um :: classe.array
*/


get <array sem o _ anderline> (): Readonly<ContextoItem[]> {
    return this._array
}
    console.log( classe.array)

---

#  MUDAR UM STATUS COM GETTER 
    - type com as opcoes - variavel privada do tipo deste tipo de opcoes*/
  
-- Define as opcoes do status com type
-- atribui as opcoes na prop privada com o tipo do Status e a opcao default
-- faz a acao get do Status() do tipo ContextoStatus 
-- devolve a propriedade com o status
-- uTILIZAR :: contexto.acaoStatus

type ContextoStatus = 'aberto' | 'fechado'

private _variavelStatus: ContextoStatus = '<opcao de inicio>'

get acaoStatus (): ContextoStatus {
    return this._variavelStatus
}
// UTILIZAR
carrinhoCompra.pedidoStatus


---

# TOTALIZAR ITEM DE UMA VARIAVEL DA COLECAO (no caso preco dos vendidos) 

-- acao que retorna um number
devolve +array.reduce( (total, next) => {},0 ) o reduce inicializa o total com zero  
// colocado "+" no +array para converter fazer um casting para number
na funcao do reduce total + next.variavel a ser somada ),  valor de inicializacao  


total (): number {
    return +this.colecao.reduce((total, next) => total + next.variavel, 0).toFixed()
}

// UTILIZAR
contextoObjeto.total()

---

## FUNCOES AUXILIAR PARA METODO DA CLASSE -- NAO NA UTILIZACAO

## COMPARADORA ::acao::  ehVazio() retornara um boolean
devolve o array. tamanho identico a zero
sintaxe:
return this.array.length === 0

onde for usar :
if (this.ehVazio()) {}

---

## MENSAGEIRA ::acao::  enviarMensagem() :string

enviarMensagem (msg: string) :void {
        console.log( `Mensagem enviada : ${msg}` )
}

---


## SEM IMPLEMENTAR AINDA --> PODE USAR SERVICO PRA SALVAR::acao::  enviarMensagem() :string

salvarContexto (): void {
    console.log( `Pedido com o total de R$ ${this.total()} reais ..salvo com sucesso...` )
}

---


## LIMPADORA ::acao::  limparArray() : void

-- acao limpar() retorna vazio
-- no bloco -- atribui zero ao array ex:   _array = 0

limparArray (): void {
        console.log( `Carrinho de Compras foi limpo...!` )
        this._array.length = 0
}

---

# FINALIZADORA TRANSACAO :: acao :: (): void 

-- compara if (ehVazio ) { se for : faz algo  --- return no final pra encerrar daqui

Caso contrario se for vazio entao faz } >>  utiliza as funcoes auxiliares

this._pedidoStatus = 'fechado'
        this.enviarMensagem('Seu pedido foi recebido')
        this.salvarPedido()
        this.limparCarrinho()


sintaxe ::

finalizarCompra (): void {
        if (this.ehVazio()) {
            console.log( `Seu carrinho esta vazio` )
            return
        }

        this._pedidoStatus = 'fechado'
        this.enviarMensagem('Seu pedido foi recebido')
        this.salvarPedido()
        this.limparCarrinho()

    }

// UTILIZAR

console.log( `Status do Pedido ANTES da Compra >> ${carrinhoCompra.pedidoStatus}` )

carrinhoCompra.finalizarCompra()

console.log( `Status do Pedido DEPOIS da Compra >> ${carrinhoCompra.pedidoStatus}` )

---


