type GuardaItems = { nome: string; preco: number }

export class ConceitoG {
    private readonly _items: GuardaItems[] = []

    addItem(item: GuardaItems): void {
        this._items.push(item)
    }

    removeItem(index: number): void {
        this._items.splice(index, 1)
    }

    get items(): Readonly<GuardaItems[]> {
        return this._items
    }

    total(): number {
        return +this._items
            .reduce((total, next) => total + next.preco, 0)
            .toFixed(2)
    }
}

/* Instanciacao */
const conceitoG = new ConceitoG()

/* Utilizanodo Metodo add() - Adicionar */
conceitoG.addItem({ nome: 'Entrega1', preco: 15 })
conceitoG.addItem({ nome: 'Entrega2', preco: 10.9998 })
conceitoG.addItem({ nome: 'Entrega3', preco: 9.2345 })

/* Mostrar / Imprimir >>  */
// MostrandoUtilizando metodo GETTER para leitura :: imprimindo no console
console.log(conceitoG.items)

// Mostrando total
console.log(conceitoG.total())
