# MUTACOES:

mutation createUser {
  createUser(nome: "Mel", idade: 5) {
    id
    nome
    idade
  }
}

---

# CONSULTAS

query GET_USERS {
  users {
    id
    nome
    idade
  }
}

---

