# DECLARAR ATRIBUTOS SÓ NO CONSTRUTOR COM TYPESCRIPT
No Ts posso declarar atributos somente no COnstrutor 
sintaxe: <acesso> <_atributo> <tipo>,
ex: private _modelo: string,

# constructor
constructor : ligar os atributos da class aos args vindos de fora pelo portal que preenchera os novos objetos

# Mudando Estado - entre atributos Logicos
- atributos logicos use visibilidade privada >>> para disponibiliza-los via metodos publicos
- os metodos publicos vao utilizar estes attibutos privados e manipular seus estados
- Crie 2 metodos para mudar o estado um para true e outro para false ex: tampar() destampar()

# EMPACOTAMENTO E DESEMPACOTAMENTO
Ao Empacotar criando abstracao um Protocolo para grupo de atributos ... Para recuperar Desempacote com nivel de {} objeto literal , passe as props empacotadas e preencha seus valores.
O que empacotar -- desempacote com os memsos niveis e preencha as propriedades.

 # GET & SET no TYPESCRIPT

GET :: RETORNA AS INFORMACOES DO ATRIBUTO PRIVADO PARA VISUALIZAR
pode ter logica/regras como entregar essa visualizacao antes.
instrucao : retorna o atributo alvo ... pode anexar alguma funcionalidade a este atributo tbm.

SET :: SETA UM NOVO VALOR AO ATRIBUTO MESMO DEPOIS DE SUA INICIALIZACAO
Pode ter regras de validacao de como pode ser aceitos estes novos argumentos
instrucao : recebe um valor por param .. pega o atributo alvo e atribui o valor recebido

// utilizacao :: 
// GET para recuperar o getter que ja é um executavel acesse como uma propriedade sem os ()
// SET Para definir o setter use o sinal de atribuicao ao inves dos ()

[AULA](https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/learn/lecture/20616526#overview)
---
