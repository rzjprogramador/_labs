class LoginController {
    constructor (authentication) {
        this.authentication = authentication
    }

    handle (request) {

        if (this.authentication && this.authentication.auth && request && request.body) {

            const { email, password } = request.body
            this.authentication.auth(email, password )

        /* PARA NAO DAR TRASH --> TENHO QUE VALIDAR SE EXISTE ::
        a variavel da classe, a variavel da classe com o metodo, a minha opcao do meu metodo, o que vier do meu metodo
        TUDO TEM QUE SER VERDADE -- EXISTIR
        SE TUDO EXISTIR AI SIM FAZ O QUE PEDI  */

        }
    }
}


class Authentication {
    auth (email, password) {
        console.log(email, password)
        return true
    }

}


/* UTILIZAR */

const authentication = new Authentication()

const controller = new LoginController(authentication)

controller.handle({
    body: {
        email: 'este é o  email',
        password: 'este é a senha'
    }
})

/*
JAVASCRIPT :
META CONTROLAR LOGIN USUARIO ::
====================

*OBTER
- Começar pelo controller (classe)
- Acao como obter() opcao como vou obter(request)
- Dentro queremos fazer uma acao auxiliar que é : autenticar um user
- ENTÃO criarmos a acao e ela vai fazer acao sobre algo 
criamos uma Classe para usar esta acao auxiliar uma outra classe
** SEMPRE QUE PRECISAMOS DE UMA AÇÃO criamos uma funcao()
** PRECISAMOS AGIR SOBRE ALGO ESTE ALGO É UM OBJETO PRA OBTER ESTE OBJ CRIAMOS UMA CLASSE

** classe) Authentication {} classe para autenticar
 * DE QUEM ? auth() - opcoes(desse de quem o que queremos obter)
posso colocar um console para ver os valores recebidos
retornar verdadeiro ou falso

Volto a classe Controlle
construir (a opcao sera o que quero construir authentication) {
    injeto a minha opcao a uma variavel pra usarem na classe
    this.authentication = authentication
}

agora no handle lidar com ::
extraio do que veio da minha opcao pego os dados que vou usar
const { email, password } = req.body

e uso a variavel da classe com o metodo da acao auxiliar
criada passando pra ela as opcoes que eu queria que ela processasse

this.authentication.auth(email, passaword)

// =============================================
* FAZER FUNCIONAR ::

vamos precisar da instancia tbm da acao que queremos pra este controlle

const authentication = new Authentication()

...............

instanciar a classe Controlle para a var controlle
e pra ela daremos a var instanciada que traz a acao que ela precisa :

const controller = new LoginCOntroller(authentication)

..............

vamos executar o metodo handle
ele vai precisar do obj body e dentro do obj body as propriedades encadeadas

controller.handle({
    body: {
        email: 'este é o email'
        password: 'esta é a senha'
    }
})



///////////////////////////////////////////////


// RESUMAO :

Queremos um comportamento :
Começamos com o Controlle deste comportamento

Fazemos uma classe para controlle
preciso de uma acao nesta clase criamos um metodo
dentro deste metodo precisamos de uma outra acao auxiliar -- criamos uma classe para usa-la aqui


*/