# FUNCOES :
main() {}
> dentro de main criar um obj ex: admin que vai ser o uso do obj do banco prisma na tabela "users" a funcao upset( que vai receber um obj com a estrutura do banco 
> QUANDO O EMAIL FOR :ex: where: { email: 'admin@email.com '},
> CADA VAI TER :
create: { ..configurar campos do obj da tabela alvo "users"  para criar o objeto... },
update: {..update por enquanto pode ficar vazio ... },

> TODOS VAO TER create para cirar e update opcional vazio
> OS CAMPOS FOREKEY IMPORTADOS SEGUEM DENTRO DO OBJ CREATE COMO CHAVE E SEU VALOR SERÁ UM OBJ{ COM OS CAMPOS E VALOR PRA CONFIGURAR}
> )

---
# OBJETO SEED : 

create: { },

      pedidos: {},

        author: {},

        produtos: {},

        entregas: {},

## users {
  nome: 'admin-nome',
  estabelecimento: 'estabelecimento Admin',
  email: 'admin@email.com',
  password: '123123',
}

## pedidos
[
  {
    nome: 'pedido um',
    preco_base: 10,
    acrescimo: 5,
    desconto: 3,
    preco_final: 100,

    statusEntrega: 'HA_RECOLHER',
    areaCobertura: 'APROVADO',
  },
  {
    nome: 'pedido dois',
    preco_base: 10,
    acrescimo: 5,
    desconto: 3,
    preco_final: 100,

    statusEntrega: 'HA_RECOLHER',
    areaCobertura: 'APROVADO',
  },
], // create pedidos


## entrega 01 

  quantidade: 1

  remetente: 'remetente_SEED_1'
  destinatario: 'destinatario_SEED_1',
  logradouro  : 'rua _SEED_1',
  numero      : 'numero _SEED_1',
  complemento : 'complemento _SEED_1',
  cep         : 'cep _SEED_1',
  // cidade: 'cidade _SEED_1',
  estado :     'estado _SEED_1',

  pedidos: {},
  cidades: {},


## entrega
{
  nome: 'produto-entrega1',
  preco: 10,
  acrescimo: 5,
  desconto: 3,
  preco_final: 30,
},

// PEDIDO BANCO
  nome: 'pedido dois',
  preco_base: 10,
  acrescimo: 5,
  desconto: 3,
  preco_final: 100,

  statusEntrega: 'HA_RECOLHER',
  areaCobertura: 'APROVADO',

  author: {} ,

  produtos: {},

  entregas: {},

  ### PRODUTO
  create: [
  {
    nome: 'PRODUTO_ENTREGA1',
    preco_base: 10,
    acrescimo: 5,
    desconto: 3,
    preco_final: 100,

    pedidos: {},
  }, // produto1
], // create array produtos

---
