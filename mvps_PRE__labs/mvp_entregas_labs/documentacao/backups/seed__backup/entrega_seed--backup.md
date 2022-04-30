# CRIANDO SEED PARA TABELA ENTREGAS

> OBS: > A CADA MODIFICACAO NO SEED :
> `npx prisma db seed `
> 
## SOMENTE UMA ENTREGA:

const entregas = await prisma.entregas.upsert({
where: { id: '1' },

    create: {
      quantidade: 1,

      remetente: 'remetente_SEED_1',
      destinatario: 'destinatario_SEED_1',
      logradouro: 'rua _SEED_1',
      numero: 'numero _SEED_1',
      complemento: 'complemento _SEED_1',
      cep: 'cep _SEED_1',
      // cidade: 'cidade _SEED_1',
      estado: 'estado _SEED_1',

      pedidos: {},
      cidades: {},
    },

---

