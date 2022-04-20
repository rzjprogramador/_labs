# RESOLVER TRIVIAL
resumido: `Seria um campo RESULTADO para operacoes entre outros campos que ja tenho no objeto.`
contexto: 'Resolver trivial posso resolver em funcao qualquer campo de um campo que existe.'
configurando: `
- crio o campo no tipo que vai receber um resultado 
- mapeio no resolver que vou ex: User: { campoTest: campoTestResolverTrivial, },
- crio a funcao que vai resolver este mapeado 
- na funcao posso pegar este objetoPai no 1º param e usar suas props para fazer algo
- resumo: estarei pegando do meu obj um campo e posso manipula-lo para trazer algum resultado neste campo novo resolvido com resolver trivial.
  `

  exemplo:

// 1 - DEFINIR O CAMPO DE RESULTADO DO TRIVIAL NA TIPAGEM  :: QUE TEREI NO OBJETO PARA CONSULTA E RESOLVER
campo_Resultado_Operacao_Trivial_Entre_Campos: String # para resolver trivial resolvendo campos do tipo

// 2 -  RESOLVER TRIVIAL :: RESOLVENDO RESULTADO DE OPERACOES ENTRE CAMPOS EXISTENTES NO OBJETO
const campo_Resultado_Operacao_Trivial_Entre_Campos = ({ nome, email }) => {
  return `O resultado de nome e email juntos será ${nome} + ${email}`;
};

// 3 - MAPEAMETO DE EXPORTACAO DE RESOLVERS
User: {
    campo_Resultado_Operacao_Trivial_Entre_Campos,
  },