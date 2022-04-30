/* ------------------------------------------- */

/*  Externo -- Fechado -- Nao tenho como mudar -- quero usar sem me Aclopar  */

class Externo {

    autorizar() {
        console.log('EXTERNO :: Autorizar...')
    }
    capturar() {
        console.log('EXTERNO :: capturar')
    }
}

/* ------------------------------------------- */
/*  Adaptador para ao Externo >> Só ele conhece o Externo >> Para mudar dependencia só aqui */ 

class AdapterExterno {
    externo: Externo

    constructor(externo = new Externo()) {
        this.externo = externo
    }

    autorizarAdapter() {
        return this.externo.autorizar()
    }

    capturarAdapter() {
        return this.externo.capturar()
    }
}


/* ------------------------------------------- */
/*  Minha Classe >> usando os metodos do Externo via Adaptador  */


class MinhaClasse {
    adaptado: AdapterExterno

    constructor(adaptado = new AdapterExterno()) {
        this.adaptado = adaptado
    }

    autorizar() {
        return this.adaptado.autorizarAdapter()
    }

    capturar() {
        return this.adaptado.capturarAdapter()
    }
}

/*   Utilizar   */
const obj1 = new MinhaClasse()


/*  Mostrar  */
console.log(obj1.autorizar())
console.log(obj1.capturar())



/*  Conceito Adapter ::
- Adpater : adaptador para um servico se comunicar com outro
- Implementacao : Instanciar o alvo (dependencia) em uma opção(arg) ligar este arg injetado com atributos da classe
e nos metodos da classe referenciar o this.metodo que foi injetado da dependencia

*/