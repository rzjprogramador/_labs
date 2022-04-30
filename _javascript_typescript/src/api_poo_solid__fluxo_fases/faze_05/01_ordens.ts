/*
Controlle = AltoNIvel ///// UseCase = baixoNivel
controller usaPassaDelega para o useCase
- usaPassaDelega = quem vai passar tem que fazer quem vai receber de propriedade sua e manda com metodo de quem vai operar fazer para a tarefa para esta classeAltoNivel

- AltoNivel diz: Controlle delega >> useCase executa pra mim o que eu recebi
- baixoNivel diz: tenho pra fazer o que vc precisa, vai recebr algo deixa que recebo aqui tbm processoqfaço regras e devolvo meu metodo ja processado para vc usar.

> no main/index: instancia/cria os objs e dá/injeta no objAltonivel ( o objBaixoNivel )
*/

/*
NIVEIS POR CENARIOS :;
* ALTO NIVEL     * delega > BAIXONIVEL
  Route           Controle
  Controle        UseCase

*/
