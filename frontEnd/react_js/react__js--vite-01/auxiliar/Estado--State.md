
# Logica Mudar Estado Component

Mudanca de Estado do component com o hook useState :: 
- Implementar dentro da funcao do Component

1- CRIAR ESTADO 
cria o estado com a varValorAtual, e a var que vai mudar/setar o estado da varInicial e no useState( definir o estado incial )
exemplo: const [varValorAtual, setVarValorPARAAtual]

2 - CRIAR FUNCAO-ESTADO
criar funcao com params que vai mudar o valor setado ao ser clicado o botão :
FAÇA: mostrar o setEstado com o parametro recebido( <params>)

3- LINKAR FUNCAO-ESTADO COM ELEMENTO HTML
no botao entre hash invocar :: 
-criar uma funcao anonima passando a funcao com o argumento apra o apram da funcao
obs: criar anonima para ela nao ser executada imediatamente somente via click
obs: sempre que precisa retornar um html envolva entre ()

4- USO :
- Interpole no html entre {} a varValorAtual

*/