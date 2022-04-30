# Atriutos e Funcionais dos Elementos HTML

onSubmit = { referenciaFuncao } :: Envia o Formulario >> 
vai na primeira tag form do formulario e é ligado ao botao do final onde o botao tem que ter o type = "submit" 

value={}    // è o valor que tem dentro do input -- se hardcodemente colocar uma string ai ela aparecera no input -- para ser dinamico coloco a varValorAtual do Estado

onChange={} // traducao: emMudança ::  toda vez que digitar ele chama o onChange -- 
entao toda vez que digitar vou pegar o digitado e coloca dentro do setEstado
funcaoAnonima que recebe um evento-click e passa para a varQueSeta o evento . alvo . valor
exemplo : (e) => setNome(e.target.value)

# Logica ENVIAR E MOSTRAR DADOS DO FORMULARIO
> ENVIAR FORMULARIO :
onSubmit = { referenciaFuncao }

> CRIAR OS ESTADOS DAS PROPRIEDADES DO OBJETO QUE TEREMOS
> CRIAR UM ESTADO INICIANDO COMO OBJETO VAZIO :
> para ser mergiado e preenchido pelo conteudo da funcao ENVIAR REGISTRO

> FUNCAO PARA ENVIAR O REGISTRO:
recebe um evento - pegamso este evento e preventDefault apra nao atualizar a tela.
e devolvemos o setVariavel( { passando um objeto literal com os campos que queremos no objeto a mostrar })

>> RETORNAR O HTML ( ... )
formulario - onSubmit { referenciaFuncaoRegistro }

a cada input ::
value -
onChange - 

botaoEnviar : type="submit"
