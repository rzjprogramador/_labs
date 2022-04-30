// Modo simples
// Sem construtor pra iniciar as props ..é usado o construtor padrao embutido

class Persona1 {
    nome: string = ''
    energia: number = 0
    vida: number = 0
    ataque: number = 0
    defesa: number = 0
}

// Instanciar os valores das props vem do client
// Criar um obj apartir desta classe :: instanciando:
let person2 = new Personagem()
console.log(person1)

// Preencher valores para esta instancia
person1.nome = 'Reinaldo'
person1.energia = 10

// acessando props do obj instancia
console.log(`Agora ${person2.nome} -- tem energia ${person2.energia}`)
