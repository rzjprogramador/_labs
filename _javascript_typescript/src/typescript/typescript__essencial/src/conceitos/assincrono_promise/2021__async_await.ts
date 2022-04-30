const colecaoUsuarios = [
    { nome: 'Reinaldo', linguagem: 'Typescript'},
    { nome: 'Luis', linguagem: 'Javascript'},
    { nome: 'Foo', linguagem: 'Python'}
]

function buscarUsuarios () {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let sucessoPromessa = true
            sucessoPromessa ? resolve(colecaoUsuarios) : reject(`Erro no Resolver`)
        }, 2000)

    })
}

/* Ao inves de recuperar com encadeamento de then() fazemso a funcao async e esperamos o resolve da promessa */
async function usuariosPronto () {
    try {
        const usuarios = await buscarUsuarios()
        console.log(usuarios)
        console.log('Outra funcao 2')
    }
    catch(err) {
        console.log(`Erro Apontado: ${err}`)
    }
}
usuariosPronto()