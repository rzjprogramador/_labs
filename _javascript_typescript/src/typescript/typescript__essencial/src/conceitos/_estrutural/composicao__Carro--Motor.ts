/* COMPOSIÇÃO :: pode-se usar o Padrao Decorator :;
"UM OBJETO TEM DE FORMA OBRIGATORIA OUTRO - O QUE COMPOEM NAO EXISTE SEM O OUTRO"
ex: Pessoa > Coracao // Carro > Motor
*/


class Carro {
    private readonly motor = new Motor()

    ligar (): void {
        this.motor.ligar()
    }

    acelerar (): void {
        this.motor.acelerar()
    }

    parar (): void {
        this.motor.parar()
    }

    desligar (): void {
        this.motor.desligar()
    }
}

/* -------------------------------------------  */

/* Classe que compoem Carro > Motor :: Classe Operaria que faz as tarefas  */

class Motor {
    ligar (): void {
        console.log( `O carro esta ligando ...` )
    }

    acelerar (): void {
        console.log( `O carro esta acelerando ...` )
    }

    parar (): void {
        console.log( `O carro esta parando ...` )
    }

    desligar (): void {
        console.log( `O carro esta desligando ...` )
    }

}

/* -------------------------------------------  */

/* UTILIZAR  */

const carro1 = new Carro()
carro1.ligar()
carro1.acelerar()
carro1.parar()
carro1.desligar()


