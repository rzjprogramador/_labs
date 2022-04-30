/*  
# GENERICS
Unico Ponto de contato para mudancas
Para reutilizacao de codigo
VC PODE PASSAR MAIS QUE UM TIPO ACEITO , MAS DEPOIS QUE O CLIENT SETA UM TIPO NAO PODE MUDAR MAIS

Convencoes Generics :
Simbolos que vai representar um tipo

LETRAS CONVENCIONAIS APRA ASSINALACAO :
S => State
T => Type
K => key
V => value
E => Element

<> sinal maior e menor antes dos parenteses da funcao
unknown === desconhecido - parecido com any
a diferenca do unknown é que se vc passar para ele um tipo ele vai ser sempre este tipo a primeira vez definido e nao vai mudar

implementar ::
Antes dos () assinalar com os simbolos <LETRA-ASSINALACAO> onde precisar do tipo 
na variavel , na var do construtor onde precisar definir que o tipo sera o priemiro defnido e nao podera mudar
E QUANDO FOR USAR INSTANCIAR A FUNCAO COLOCAR DENTRO DOS SIMBOLOS O QUE REALMENTE É A ASSINALACAO


Flexivel pode ser qualquer coisa, mas quando for definido sera o que foi definido na primeira vez

Posso extender tipos predefnidos que quero que escolham para ser setado 
*/
type PreDenifido1 = number | string

function useState<S extends PreDenifido1>() {
    let state: S

    function getState() { 
        return state 
    } 

    function setState(newState: S) {
        state = newState
    }
    return { getState, setState }
}

const newState = useState() // Aqui define ou no cabecalho da funcao em extends
newState.setState(123)
console.log(newState.getState())