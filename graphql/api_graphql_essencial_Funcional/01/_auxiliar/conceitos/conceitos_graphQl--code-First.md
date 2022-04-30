# Conceitos GraphQL :: CodeFirst Funcional :: com TS

## FLUXOS ::
- Implementacoes >> cumprem >> Protocolos ...depois >> controlar

- No Controller resolvemos as Implementacoes >> 

- e ainda no Controller usamos os metodos do banco utilizando o ModelProtocolo que tem o schema do drive do banco que disponibiliza estes metodos do banco

# CODE-FIRST ## CONCEITOS

# ABORDAGEM
*** abordagens Disponiveis: Code Firts || SDL > Schema Firts

Abordagem-Usada : Code Firts == Código Primeiro (Manutenivel, melhor para Tests, 
As Entidades do Programa e do GraphQl podem usar os mesmos Protocolos  )

---

# Ferramentas Code
@ObjectType >> Transforma os atributos em Types GraphQL

---

# Fluxo : A cada Entidade ::
1 -> Protocolo
2 -> model - schema
3 -> implementacao >> em arquivo da Entidade.ts >> Mergiando os atributos com o model

---
Controllers : Se fosse schema first teria que resolver as Querys e Mutations
Resolvers === funcoes - definicoes de Rotas

---

# CONEXAO COM O BANCO DE DADOS ::: /schemas
no index :: configuracao da conexao com o  mongo com mongoose

---

# 2 Contratos para os msm campos >> do PROTOCOLO + MODEL MONGOOSE  :::em: /protocolos/Acao.ts >>
## Definir o Contrato que vai seguir cada campo do contexto 
class do Contexto definindo o Contrato dos campos
Uma Classe que herda Document do Mongo
CRIAR MODEL > instanciar o Schema do Mongoose passando o obj de configuracao do contexto para o Mongo
INSTANCIAR MODEL > passando o nome da Colecao e a instancia do obj do model criado

---

# /schemas fora :: Implementacao do Contrato -- MERGE DE TIPOS TS com GRAPHQL
- Acao.ts :: implementar o contrato IAcao
implemnetar declarando todos campos e defnindo o que é a classe e cada campo
a classe é um @ObjectType() dos tipos do type-graphql

FEITO AQUI O QUE SERIA DEFINICAO DE TIPOS NO GQL NORMAL...

# BUILD SCHEMA
schemas/index >> buildar schema : construir esquema >> 
definir a instancia da var Contexto pelo valor da implementacao feita 
e registrar esta nova instancia implementada no array de resolvers 
neste array de resolvers tbm vai entrar a var do Controller ..Vamos ao controller

# CONTROLLER DO CONTEXTO
se fosse na abordagem do schemaFirts controller seria onde definiriamos as Query{}
Mutation{}

* o Implememtado CONTEXTO vai ser usado aqui nas Querys e Mutations para direcionar os metodos
** Importar tbm PROTOCOLO + MODEL MONGOOSE para usar os metodos do Mongo

@Query@  ...
@Mutation ...

# SERVER
* Configurar o server
importar :: database   e  a Interface/Model que tem o Contrato e Document Modelado pelo Mongo

### Vamos testar no localhost4000
criar acao ..chamando o metodo crir acao preenchndor os campos pedidos nos params em localhost4000

mutation {
  createAcaos (author: "autor1", description : "Jesus1" ) {
    author
    description
    likes
    }
  }

  ...
  * Fazer consulta para ver todos que foram criados
  Fazer query - abrir a acao - e pedir as props que tem dentro do objeto

  query {
  acaos {
    author description likes
  }
  
}

  ---

* Criar novos Bancos só pela String de conexao do Mongo + informacoes ver o Conceitos MOngo

---

# Logica Regra Se existe ou Nao a Acao

const acao = await MongoAcao.findById(id)
        
  if(!acao) {
      throw new Error('Esta acao nao existe !')
  }

  return acao

  /*
  Regra se nao existir - retorno que nao exite
  caso existir retorno meu receptor acao
  */

  ---

# Fluxo funcao e salvar no banco
  - buscar o alvo
  - verificar se existe
  - setar alguma mudanca
  - salvar ()
  - retornar tornar publico o salvo

---


