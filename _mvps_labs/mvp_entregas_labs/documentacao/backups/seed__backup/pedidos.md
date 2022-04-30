> OBS: > A CADA MODIFICACAO NO SEED :
> `npx prisma db seed `

const pedidos = await prisma.pedidos.upsert({
where: { id: '1' },

    create: {
      nome: 'Rei pedido1 _nome_Pedido _SEED',
      preco_base: 10,
      acrescimo: 5,
      desconto: 3,
      preco_final: 150,
      author: { connect: { id: '1' } },
      produtos: {},
      entregas: {},
    },
