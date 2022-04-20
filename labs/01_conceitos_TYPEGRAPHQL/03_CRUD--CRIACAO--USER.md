# CRUD TS

---
## CRIANDO USUARIO

### 2- CRIANDO USER PASSANDO DADOS POR PARAM 
> Nos params da funcao usar o @Args( passe o nome do campo em "texto" , referencie a variavel e seu retorno e use-a dentro da funcao onde precisa dela.
> Mais que um campo use um @Arg para cada separados por virgula)
> exemplo:
createUser (
    @Arg('nome') nome: string,
    @Arg('idade') idade: number
)


### 1 - FORMA HARDCODE:
> 1 - Criar o objeto que corresponde aos campos pedido na classe de User e guardar em uma var que será a entidade.
> 2 - guardar na colecao desta entidade a variavelEntidade
> 3 - retornar a entidade criada
> exemplo:
> 
@Mutation(() => User)
createUser() {
  const user = { id: '1', nome: 'Reinaldo', idade: 44 }

      this.collectionUser.push(user)
      return user

---
# PLAYGROUND : 

## CRIANDO USER

### 2 - CRIANDO USER >> PASSANDO CAMPO POR PARAM
mutation createUser {
  createUser(nome: "Reinaldo", idade: 40) {
    id
    nome
    idade
  }
}

### 1- CRIANDO USER >> FORMA HARDCODE:
mutation createUser {
  createUser {
    id
    nome
    idade
  }
}

### CONSULTAR TODOS USERS CRIADOS :: HARDCODE
query GET_USERS {
  users {
    id
    nome
    idade
  }
}

---

