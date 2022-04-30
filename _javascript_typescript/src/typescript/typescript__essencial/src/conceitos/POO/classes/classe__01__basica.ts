
class User1 {
    name: string
    age: number

    constructor(
        name: string,
        age: number,
    ) 
    {
        this.name = name
        this.age = age
    }
    
    logDetails() {
        console.log(`Retornando Nome: ${this.name} e Idade: ${this.age} ...`)
    }
    
}

class UserConta1 extends User1 {
     #nickname: string
    nivel: number

    constructor(nickname: string, nivel: number, name: string, age: number) {
        super(name, age)

        this.#nickname = nickname
        this.nivel = nivel
    }

    get getNickname() {
        return this.#nickname
    }

    set setNickname(nick: string) {
        this.#nickname = nick
    }

    logDetails() {
        console.log(`Retornando de UserConta de Nickname ${this.#nickname} e nivel ${this.nivel}
                     com nome: ${ this.name } e idade ${this.age}`)
    }
}

/*  Utilizacoes ::  */ 
const user100 = new User1('Reinaldo', 43)
const userConta = new UserConta1('nicRei', 10, 'Reinaldo', 43)



console.log(user100)
user100.logDetails()


console.log(userConta)
userConta.logDetails()
// userConta.#nickname = 'Outro Nome'
console.log(userConta.getNickname)
userConta.setNickname = 'novoNick'
console.log(userConta)
