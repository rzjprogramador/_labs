
class Todo {
    constructor(texto, entrega) {
        this.texto = texto
        this.entrega = entrega
    } 
}

// dado para-instancia
const data = { texto: 'Texto1', entrega: new Date("2022-02-01") }

// Instanciacao
const newTodo = new Todo(data)
console.log(newTodo)