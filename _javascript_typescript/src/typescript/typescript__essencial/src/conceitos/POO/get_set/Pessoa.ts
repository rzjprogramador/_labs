export class Pessoa {

    constructor(
        private nome: string,
        private sobrenome: string,
        private idade: number,
        private _cpf: string,

    ) {}

    get cpf(): string {
        return this._cpf.replace(/\D/g, '')
    }

    set cpf(valor: string) {
        this._cpf = valor
    }

}
/*  Utilizar a classe :: main  */

const pessoa1 = new Pessoa('Reinaldo', 'Zacharias', 43, '111.111.111-48')

/*
 GET & SET no TYPESCRIPT

GET :: RETORNA AS INFORMACOES DO ATRIBUTO PRIVADO PARA VISUALIZAR
pode ter logica/regras como entregar essa visualizacao antes.
instrucao : retorna o atributo alvo ... pode anexar alguma funcionalidade a este atributo tbm.

SET :: SETA UM NOVO VALOR AO ATRIBUTO MESMO DEPOIS DE SUA INICIALIZACAO
Pode ter regras de validacao de como pode ser aceitos estes novos argumentos
instrucao : recebe um valor por param .. pega o atributo alvo e atribui o valor recebido

// utilizacao :: 
// GET para recuperar o getter que ja é um executavel acesse como uma propriedade sem os ()
// SET Para definir o setter use o sinal de atribuicao ao inves dos ()
*/

// UTILIZANDO GET E SET
pessoa1.cpf  
pessoa1.cpf = '222.222.222-49' 

// ESTADO OBJETO
console.log(pessoa1)