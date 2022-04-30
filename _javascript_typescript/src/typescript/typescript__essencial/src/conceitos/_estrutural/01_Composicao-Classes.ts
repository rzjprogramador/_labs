class Leitor {
    ler(arquivo: string): void {
        console.log(`Lendo ...${arquivo}`)
    }
}

class Escritor {
    escrever() {
    }
}

class Criador {
    criar(arquivo: any, dado2: any): void {
        console.log(`Criando ...`)
       
    }
}

class Destruidor {
    destruir(target: any): void {
        console.log(`Destruindo...`)
    }
}

/* ------------------------------------------- */


class Manipulador {
    leitor: Leitor

    constructor() {
        this.leitor = new Leitor()
    }

}

/* Instanciando e Utilizando a class Manipuladora  */
const manipulador = new Manipulador()
manipulador.leitor.ler('Passado no Uso da Instanciacao')


/*  
class Leitor {}
class Escritor {}
class Criador {}
class Destruidor {}
class Manipulador {}
*/