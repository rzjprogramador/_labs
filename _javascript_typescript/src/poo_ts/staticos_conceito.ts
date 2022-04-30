/* eslint-disable no-unused-vars */

const metodo_statico = {
    titulo: 'metodo statico',
    contexto: 'é estatico na classe ...nao precisamos instanciar a classe para usa-lo',
    diferencial: 'as instancias nao conseguem usar o metodo estatico que só pertence a classe',
    uso: 'para usa-lo apenas chamamos a classe e dela chamamos o metodo diretamente',
    beneficio: 'Por questao de organizacao deixamos uma funcao onde sabemos onde podemos encontra-la . Serve para atribuir valores padroes default, criar fabrica da classe com props com valores padroes q default... nao precisa usar o new para uso pois nao é instanciavel',
    atributos_staticos: `Tambem nao podem ser configuraods fora da classe nem instanciados , servem para atribuir valores estaticos padroes default.`,
    atributo_statico_uso: `para usar o atributo statico é somente dentro da classe chamando a Classe.atributo`,
    acessando_atributos_staticos: `podemos acessa-los dentro ou fora da classe chamando pelo NomeDaClasse.atributo`,
    metodo_normal_sem_clasula_static: `
    METODO NORMAL SEM A CLAUSULA STATIC :
    - pode fazer uso dentro dele dos atributos staticos sem o this ao inves do this usa o nome da classe . atributo
    - é acessivel fora da classe somente pela instancia

    `

}
