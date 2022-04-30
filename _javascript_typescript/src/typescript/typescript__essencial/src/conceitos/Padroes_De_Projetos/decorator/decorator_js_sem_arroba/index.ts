/*  
Decorator :: em Js sem Anotacao @Arroba
Uma Classe/Metodo que adiciona funcionalidades a outra Classe/Metodo.
No uso instanciamos a classeFuncionalExtra e passamos apra ela nossa classe que precisa desta novaFuncionalidade, no outro param deixamos a opcoes que esta novafuncionalidade quer adicionar ex:
new SuperUser(userReinaldo, { nivel: 3 } )

*/

class User {
    nome: string

    constructor(nome) {
        this.nome = nome
    }

    getNome() {
        return this.nome
    }
}

class SuperUser { // Classe com novas funcionalidades apra adicionar na classe Normal User
    user: any
    nivel: any

    constructor(user, props) {
        this.user = user

        this.user.nivel = props.nivel

        this.user.permissoes = {
            create: props.nivel === 3,
            read: props.nivel > 1,
            update: props.nivel === 3,
            remove: props.nivel === 3
        }
       
    }
}


/* ------------------------------------------- */

/*  UTILIZAR   */
const userReinaldo = new User('Reinaldo')

// Utilizando: instancio a classeFuncionalidadeNova - passo a classeAlvo e a opcao que quero nova
const superUserReinaldo = new SuperUser(userReinaldo, { nivel: 3 } )


/* ------------------------------------------- */

/*  MOSTRAR   */
// console.log(userReinaldo)
console.log(superUserReinaldo)

/* ------------------------------------------- */