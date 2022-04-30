interface UserProtocol3 {
    nome: string
    email: string
    senha: string
}

class User3 implements UserProtocol3 {
    user3: UserProtocol3
    

    constructor(private props: UserProtocol3) {}
    nome: string
    email: string
    senha: string
    
    
}
const user3 = new User3({nome: 'Reinaldo', email: 'email@email', senha: 'senha'})
// const user4 = new User3('Reinaldo', 'email@email', 'senha')
console.log(user3)
// console.log(user4)
