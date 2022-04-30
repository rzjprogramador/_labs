/* tipo de dados OBJETO  */
/* Colecao dinamica de dados com chave e valores  */
/* Objeto Literal é criado dinamicamente nao precisa ser originado de uma classe  */
/* Objeto Instancia :: é originado de uma classe -- assim como no java  */
/* nao tem construtor - quando tem uma propriedade que assume a funcionalidade de funcao é chamada de metodo  */

/* Após criado o objeto posso adicionar e remover propriedades  */
/* Pode iniciar como um objeto vazio = {} e adicionar propriedades assim :: objeto.propriedade = valor */

/* OBJETO LITERAL  */

let pessoa = {}
console.log( pessoa )
console.log( typeof( pessoa ) ) // tipo object
console.log( pessoa.nome = 'Reinaldo' )
console.log( pessoa.nome ) // 'Reinaldo

let usuario = {
    nome: 'Reinaldo',
    idade: 43,
    endereco: {
        longadouro: 'Rua Um',
        numero: 10,
        cidade: 'Saõ Paulo'
    }
}
console.log( usuario )

/*     ACESSOS :: 
** SE VOCE JA SABE O NOME DA PROPRIEDADE VC PODE FAZER objeto.propriedade e acessar o valor
** SE VOCE NAO SABE OU A CHAVE DA PROP NAO PERMITE ACESSO DESTA FORMA PEGUE PELA POSICAO

ACESSANDO PROPRIEDADE DINAMICAMENTE COM ['na...'] em um for in , um parametro melhor descobrir dinamicamente
    voce acessa a posicao da chave e pega o valor com array de string analogia ..NÀ ... quer dizer na posicao 
    
*/
/* É PRATICAMENTE A MESMA COISA ACESSAR ASSIM  */
console.log( usuario.nome )
console.log( usuario['nome'] )

/* MAS SE TEMOS UMA CHAVE DA PROP POR EXEMPLO COM ESPAÇO ENTÃO MELHOR PEGAR DINAMICAMENTE  */
// adicionando indentificador com espaço o interpretador nao vai deixar criar assim ..mas vc pode pegar assim legado :
usuario['cor dos olhos'] = 'azul'
console.log( usuario )

/* Adicionar chave com palavras reservadas - nao recomendado mas da pra acontecer  */
usuario['case'] = 'qualquer'
console.log( usuario )

/* ACESSAR DINAMICAMENTE -- ESTES ADICIONADOS DINAMICAMENTE ... " NÁ..."  */
console.log( usuario['cor dos olhos'] )
console.log( usuario['case'])


  /*  
  TENTANDO ADICIONAR UMA SUB PROPRIEDADE - DIRETO QUE NAO EXISTE
  EX: Tentando adicionar usuario.profissao.anterior = 'Motoboy' -- 
  o interpretador nao via deixar pq esta sub prop. nao existe

  PARA ADICIOANR UMA SUB PROPRIEDADE E SEU VALOR 
  CRIE UM OBJETO.PROPRIEDADE-DESEJADA = VAZIO {} --> ACESSE O OBJ . PROP =  E ADICIONE O VALOR DESEJADO ex:
    OBS: TENHA CERTEZA QUE ESTA PROPRIEDADE NMOVA NOA EXISTE OU ESTEJA VAZIO SENAO VAI SOBREESCREVER A EXISTENTE
   */
  usuario.profissao = {}
  usuario.profissao.anterior = 'Motoboy'

// DEPOIS DA SUB PROPRIEDADE CRIADA SÓ ADICIONAR NOVAS NAO PRECISA CRIAR OBJ VAZIO SENAO SOBREESCREVE
  usuario.profissao.potencial = 'TI'
  usuario.profissao.atual = 'Programador'
  console.log( usuario )

  usuario.telefone = 9999999
  usuario.telefone = undefined
  console.log( usuario )

  /* FAZENDO UM FOR IN >> NO OBJ PARA MOSTRAR CADA PROP COM ALGUMA INFORMACAO DIFERENTE   
  LOOP CAPTURANDO SÓ OS VALORES DE CADA PROP DO OBJ */
  for( let prop in usuario) {
      console.log( 'propriedade :: ', usuario[prop] )
      // Acessando a prop que veio do usuario na...prop capturada pelo loop
  }

/* DELETANDO PROPRIEDADE DO OBJ */
delete usuario.telefone
console.log( usuario )

delete usuario['cor dos olhos']
console.log( usuario )

delete usuario['idade']
console.log( usuario )

// Deletando uma sub propriedade
delete usuario.profissao.potencial
console.log( usuario )

