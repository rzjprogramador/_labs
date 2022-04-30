
/* ------------------------------------------- */
// ClasseMAE -- Concreta -- Será um formulario - começa pelo controlle
class AddGrupController {
    constructor (
        private validationProtocol: ValidationProtocol
    ) {}

    add() {
        this.validationProtocol.validate()
    }
}

/* ------------------------------------------- */

// Interface para as classe Implementar e inverter a dependencia para este Protocolo ao inves entre elas
interface ValidationProtocol {
    validate: () => void
}

/* ------------------------------------------- */


/* ------------------------------------------- */
// CLASSES OPERARIAS :: QUE FAZEM TAREFAS ::

// Validacao-1: Campos obrigatorios que tera no formulario
class RequiredFieldValidation implements ValidationProtocol {
    validate(): void {}
}

//Validacao-2:  Campos de telefone que tera no formulario
class PhoneValidation implements ValidationProtocol {
    validate(): void {}
}

// INSTANCIAS OPERARIAS :: 
const requiredFieldValidation = new RequiredFieldValidation()
const phoneValidation = new PhoneValidation()

/* ------------------------------------------- */


/* ------------------------------------------- */
// COMPOSITE ROOT :: VAI AGRUPAR OBJETOS GERADOS DAS CLASSES OPERARIAS

 class AddGroupValidationComposite implements ValidationProtocol {
    constructor (
        private requiredFieldValidation: RequiredFieldValidation,
        private phoneValidation: PhoneValidation,
    ) {}

     validate(): void {}
 }

 /* ------------------------------------------- */

// INSTANCIA COMPOSITE --COMPONDO OBJETOS-OPERARIOS :: Com Dependecy inj.-Injecao de dependencia
const composite = new AddGroupValidationComposite(requiredFieldValidation, phoneValidation)

/* ------------------------------------------- */

// GERANDO CONTROLADOR :: QUE RECEBE A COMPOSICAO DE TODOS OBEJETOS OPERARIOS
const controller1 = new AddGrupController(composite)

/* ------------------------------------------- */







/*  
Principio :: Principios do SOLID
Open Close Principe :: Aberto para extensoes - fechado para modificacoes:

O que faz: Adicionar comportamento a uma classe - sem alterar a classe
Podemos fazer com os Designs: Decorator - Composite- Proxy

trivial Saber: Diferencas Class (TIPO)   --  Instancia (OBJETO)
Nao altere a sua classe e sim a instancia o obj

Construtor onde entram as Dependencias , dependa de abstracoes / interfaces

Inversao de Dependencia -- fazer as classes implementar a interface

Assinaturas :
metodo de interface >> validate: () => void
metodo de classe >> validate(): void {}

*/


/*  
Link: Diagrama :: https://app.diagrams.net/#G1eulaSyy2W7vRYAIUolbIwZHuVTFl8zqh

Fluxo-Conceito :: 
Fluxos na criacao :: é sobre as classes
ClasseMae >> Protocolo >> ClasseOperaria >> Composite >> Controllador
Fluxos na Utilizacao :: é instanciando as classes e utilizando os objetos

Fluxo-Geral : Comecar pelo Controller da Acao :: ex: AddGrupController

@ CLASSE MAE SÓ CONHECE O PROTOCOLO >> VIA CONSTRUTOR ::
Classe Mae : recebe a dependencia da Instancia direta no construtor do Tipo do Protocolo
assim depende só do protocolo e nem conhece as outras classes
poem esta dependencia como private para ser usado só dentro da sua classe no seu metodo
e assim tem acesso ao metodo definido no protocolo.

@ CLASSES OPERARIAS :: QUE FAZEM TAREFAS :: E IMPLEMENTAM O PROTOCOLO
Se eu quiser alguma entidade que sabia fazer uma nova tarefa/validacao 
- crio a classe faço implementar o protocolo 
- a instancio direto no contrutor do composite 
- tbm a intancio na utlizacao e injeto no objeto composite


@ COMPOSITE ROOT :: VAI AGRUPAR OBJETOS GERADOS DAS CLASSES OPERARIAS
Adicionar Comportamento a classe Mae sem modifica-la ..
vamos usar o composition Root 

Composite Root :: Composite vai compor outros objetos operarios - para dar a classe Mae todas classes que ela precisa :: Então no seu construtor recebera as instancias das classes componentes que sabem fazer tarefas

@ INSTANCIA COMPOSITE --COMPONDO OBJETOS-OPERARIOS :: Com Dependecy inj.-Injecao de dependencia
Dou para o objeto composite os objetos operarios que sabem fazer as tarefas

@ GERANDO CONTROLADOR :: QUE RECEBE A COMPOSICAO DE TODOS OBEJETOS OPERARIOS
E tendo o composite com os operarios ..dou o composite container de opperadores para o meu objeto controlle

*/