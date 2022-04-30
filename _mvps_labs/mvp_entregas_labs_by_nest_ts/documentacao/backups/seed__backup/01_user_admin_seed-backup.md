# CRIANDO USER ADMIN -- PRIMEIRO A SER CRIADO NO SISTEMA DO BANCO

### OBS: AO CRIAR O PRIMEIRO USER -- PRIMEIRO RESET O BANCO / CRIE O USER COM AS INTEGRACOES VAZIAS {}

> OBS: > A CADA MODIFICACAO NO SEED :
> `npx prisma db seed `

---

const admin = await prisma.users.upsert({
where: { email: 'admin@email.com ' },

    create: {
      nome: 'admin-nome 1 ',
      estabelecimento: 'estabelecimento Admin',
      email: 'admin@email.com',
      password: '123123',

      pedidos: {},
    },
