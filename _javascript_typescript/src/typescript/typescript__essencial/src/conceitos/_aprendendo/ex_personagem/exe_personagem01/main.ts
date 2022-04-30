import Personagem1 from './personagem'
const teclado = require('prompt-sync')()

//AO INSTANCIAR OS VALORES DAS PROPS VEM DA REQUEST FEITO PELO CLIENT

let person1 = new Personagem1('Reinaldo', 30, 15, 20, 15)
console.log(person1)

// ...

// ACESSANDO VALORES DO OBJ DE INSTANCIA DA CLASSE

console.log(`Agora ${person1.nome} --
tem energia ${person1.energia}
tem vida ${person1.vida}
tem ataque ${person1.ataque}
tem defesa ${person1.defesa}

`)

// BRINCANDO COM DADOS VINDOS DO PROMPT-SYNC E O OBJ CRIADO.

let opcao: Number = 0

while (opcao != 9 /* || person1.esMorto() -- nao ta saindo do loop chamando esta funcao */) {
    console.log('========== Personagem ==========')
    console.log('| 1 - treinar ataque           |')
    console.log('| 2- treinar defesa            |')
    console.log('| 3- Descansar                 |')
    console.log('| 4- Entrar em batalha         |')
    console.log('| 8- Imprimir                  |')
    console.log('| 9- Sair                      |')
    console.log('================================')

    switch (opcao) {
        case 1:
            person1.treinarAtaque()
            console.log(person1.status())
            // To imprimindo este retorno com console mas posso imprimir com alert - na tela , como quiser

            break

        case 2:
            person1.treinarDefesa()
            console.log(person1.status())
            break

        case 3:
            let horas = Number(teclado('Quantas horas quer descansar? : '))
            person1.descansar(horas)
            console.log(person1.status())
            break

        case 4:
            let rest: number = person1.batalhar()
            console.log(`Esta batalha custou ${rest.toFixed(2)} de energia`)
            console.log(person1.status())
            break

        case 8:
            console.log(person1.status())
            break

        default:
            console.log(`NENHUMA OPÇÃO VALIDA--CAIU NO DEFAULT`)

            // Forçando para parar o loop pela condicao no inicio nao esta parando ainda
            // if (opcao == 9) {
            //     break
            // }
            break
    }

    opcao = Number(teclado('Escolha uma opcao: '))
}
console.log(`Ops! Morreu`)
