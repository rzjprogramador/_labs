import { prisma } from '../../../../database/client_prisma'

// ESTA FUNCAO VAI ENVIAR PARA O SEDD TODOS CRIADOS
//
export const usersMakeSeed = async () => {
  admin_userSeed()
  dois_userSeed()
  tres_userSeed()

}

// FUNCOES PARA CRIAR CADA UM OBJETO DA ENTIDADE:
//
async function admin_userSeed () {
   const admin = await prisma.users.upsert({
    where: { email:  'admin@email.com'}, // TENHO QUE DEFINIR A CONDICAO APRA APLICA ROS DADOS
  create: {
    nome: 'Admin',
    email: 'admin@email.com',
    password: '123123',
    id: '1',
    indexRef: 1,
  },
  update: {}
})
} 

async function dois_userSeed () {
  const dois_user = await prisma.users.upsert({
   where: { email:  'dois@email.com'}, // TENHO QUE DEFINIR A CONDICAO APRA APLICA ROS DADOS
 create: {
   nome: 'dois',
   email: 'dois@email.com',
   password: '123123',
   id: '2',
   indexRef: 2,
 },
 update: {}
})
} 

async function tres_userSeed () {
  const tres_user = await prisma.users.upsert({
   where: { email:  'tres@email.com'}, // TENHO QUE DEFINIR A CONDICAO APRA APLICA ROS DADOS
 create: {
   nome: 'tres',
   email: 'tres@email.com',
   password: '123123',
   id: '3',
   indexRef: 3,
 },
 update: {}
})
} 