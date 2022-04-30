
/* CONTRATO */
interface TemNome {
    nome: string
}

interface TemSobrenome {
    sobrenome: string
}

/* CLASSE CENTRALIZADORA */
class Aluno implements TemNome, TemSobrenome {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
        private readonly idade: number
    ) {}
}

/* UTILIZACAO ::   */
const aluno1 = new Aluno('Gustavo', 'Eduardo', 11)
console.log(aluno1)