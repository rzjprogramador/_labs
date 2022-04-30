/* eslint-disable no-unused-vars */

type ConteudoRepositorio = `
Contexto Repo é o que a entidade precisa Ter:
- tem uma colecao
- tem metodo do que propoem o CasoDeUso
- por enquanto metodoAuxiliar Verificar_seJaExiste
`
type ConteudoServico = `
Contexto: Servico é onde realmente faz a Criacao:
- integra o repositorio
- Antes de criar Verificar_seJaExiste
- executa() do repositorioIntegrado o metodo Do Contexto do CasoDeUso e
 REALMENTE CRIA O OBJ DA ENTIDADE
- Passa para ele uma Combinacao do que receber repassar
`
type instanciaImportandoLocal = `(instanciaImportandoLocal é quando cria a instancia fora da funcao mas usa o objeto dentro da funcao como param)`

type ConteudoRota = `
- instanciaImportandoLocal o objRepositorio
- instancia o objServico injetando o objRepositorio importado
- com o objServico pronto chama o executador() e passa para ele o que receber da requisicao do client http
- Responder a Api

`
