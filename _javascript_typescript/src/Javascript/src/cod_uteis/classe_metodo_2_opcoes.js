export class Phone {
    constructor () {
        this.dimensoes = { width: '5cm', heigth: '15cm'},
        this.interface = { buttoms: ['home', 'cancel', 'power'] }
    }

    liga_desliga (isOn) {
        isOn ? console.log(`Desligando...`) : console.log(`Ligando....`)
    }
}

new Phone().liga_desliga(false)