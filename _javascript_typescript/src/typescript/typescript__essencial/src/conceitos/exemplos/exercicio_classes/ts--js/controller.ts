type httpRequest = {
    body: any
}


class LoginController {
    constructor (private readonly authentication: Authentication) { }

    handle (request: httpRequest) {

        const { email, password } = request.body
        this.authentication.auth(email, password )

    }
}


class Authentication {
    auth (email: string, password: string) {
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
CONVERTER JS para TS :;
* A opcao os parametros tem que ter tipo
* Uma opcao no construtor tem que ter definicao de acesso (private read only - neste caso privado e só pra leitura)
* Nao precisa injetar variavel da classe a opcao de param

* O tipo pode ser um obj, uma funcao, qualquer coisa
no tipo da request é um obj com corpo do tipo qualquer coisa pode vir neste caso
(request: { body: any })

NÃO PRECISO DAQUELAS VALIDAÇÕES SE EXISTE AS PROPS DA CLASSE
O TS VAI ME MOSTRAR O ERRO ANTES DE TENTAR COMPILAR

===================



*/